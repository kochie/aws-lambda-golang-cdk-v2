const { AwsCdkConstructLibrary } = require('projen');
const project = new AwsCdkConstructLibrary({
  author: 'Robert Koch',
  authorAddress: 'robert@kochie.io',
  cdkVersion: '2.0.0-rc.5',
  defaultReleaseBranch: 'main',
  name: 'aws-lambda-golang-cdk-v2',
  repositoryUrl: 'https://github.com/kochie/aws-lambda-golang-cdk-v2.git',

  // cdkDependencies: undefined,        /* Which AWS CDK modules (those that start with "@aws-cdk/") does this library require when consumed? */
  // cdkTestDependencies: undefined,    /* AWS CDK modules required for testing. */
  deps: [
    'constructs@10.0.0',
    'aws-cdk-lib@2.0.0-rc.5',
  ] /* Runtime dependencies of this module. */,
  // description: undefined,            /* The description is just a string that helps people understand the purpose of the package. */
  devDeps: [
    'constructs@10.0.0',
    'aws-cdk-lib@2.0.0-rc.5',
  ] /* Build dependencies for this module. */,
  peerDeps: [
    'constructs@10.0.0',
    'aws-cdk-lib@2.0.0-rc.5',
  ],
  // packageName: undefined,            /* The "name" in package.json. */
  // projectType: ProjectType.UNKNOWN,  /* Which type of project this is (library/app). */
  // releaseWorkflow: undefined,        /* Define a GitHub workflow for releasing from "main" when new versions are bumped. */
});
project.synth();
