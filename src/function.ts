import * as crypto from 'crypto';
import * as fs from 'fs';
import * as path from 'path';
import { aws_lambda as lambda } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Builder } from './builder';
import { parseStackTrace } from './util';

/**
 * Properties for a GolangFunction
 */
export interface GolangFunctionProps extends lambda.FunctionOptions {
  /**
   * Path to the entry Golang source file.
   *
   * @default - Derived from the name of the defining file and the construct's id.
   * If the `GolangFunction` is defined in `stack.ts` with `my-handler` as id
   * (`new GolangFunction(this, 'my-handler')`), the construct will look at `stack/my-handler/main.go`
   */
  readonly entry?: string;

  /**
   * The name of the exported handler in the entry file.
   *
   * @default main
   */
  readonly handler?: string;

  /**
   * The build directory
   *
   * @default - `.build` in the entry file directory
   */
  readonly buildDir?: string;

  /**
   * The build command
   *
   * @default - `go build -ldflags="-s -w"`
   */
  readonly buildCmd?: string;

  /**
   * Additional environment variables
   *
   * @default - `{ GOOS: 'linux' }`
   */
  readonly extraEnv?: any;
}

/**
 * A Node.js Lambda function bundled using Parcel
 */
export class GolangFunction extends lambda.Function {
  constructor(scope: Construct, id: string, props: GolangFunctionProps = {}) {
    const entry = findEntry(id, props.entry);
    const handler = props.handler || 'main';
    const buildCmd = props.buildCmd || 'go build -ldflags="-s -w"';
    const buildDir = props.buildDir || path.join(path.dirname(entry), '.build');
    const handlerDir = path.join(buildDir, crypto.createHash('sha256').update(entry).digest('hex'));
    const runtime = lambda.Runtime.GO_1_X;

    // Build with go
    const builder = new Builder({
      entry,
      outDir: handlerDir,
      handler,
      buildCmd,
      extraEnv: props.extraEnv || {},
    });
    builder.build();

    super(scope, id, {
      ...props,
      runtime,
      code: lambda.Code.fromAsset(handlerDir),
      handler: handler,
    });
  }
}

/**
 * Searches for an entry file. Preference order is the following:
 * 1. Given entry file
 * 2. A .go file named as the defining file with id as suffix (defining-file.id.go)
 */
function findEntry(id: string, entry?: string): string {
  if (entry) {
    if (!/\.(go)$/.test(entry)) {
      throw new Error('Only Golang entry files are supported.');
    }

    entry = path.join(process.cwd(), path.sep, entry);

    if (!fs.existsSync(entry)) {
      throw new Error(`Cannot find entry file at ${entry}`);
    }
    return entry;
  }

  const definingFile = findDefiningFile();
  const libDir = path.join(definingFile, '..');
  const goHandlerFile = path.join(libDir, `/${id}/main.go`);

  if (fs.existsSync(goHandlerFile)) {
    return goHandlerFile;
  }

  throw new Error('Cannot find entry file.');
}

/**
 * Finds the name of the file where the `GolangFunction` is defined
 */
function findDefiningFile(): string {
  const stackTrace = parseStackTrace();
  const functionIndex = stackTrace.findIndex((s) => /GolangFunction/.test(s.methodName || ''));

  if (functionIndex === -1 || !stackTrace[functionIndex + 1]) {
    throw new Error('Cannot find defining file.');
  }

  return stackTrace[functionIndex + 1].file;
}
