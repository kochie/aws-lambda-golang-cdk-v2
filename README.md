# aws-lambda-golang-cdk (V2)

> Based off the great work done by @RafalWilinski in https://github.com/RafalWilinski/aws-lambda-golang-cdk

This library provides CDK constructs for Golang Lambda functions compatible with CDKv2.

## Installation

```bash
npm i --save aws-lambda-golang-cdk-v2
```

## Usage

```typescript
import { GolangFunction } from 'aws-lambda-golang-v2';
import { aws_apigateway as apigateway } from 'aws-cdk-lib';
import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class TestStackStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // Define function. Source code should be located in ./test-function/main.go
    const backend = new GolangFunction(this, 'test-function');
    const api = new apigateway.LambdaRestApi(this, 'myapi', {
      handler: backend,
      proxy: false,
    });

    const items = api.root.addResource('items');
    items.addMethod('GET');
  }
}
```
