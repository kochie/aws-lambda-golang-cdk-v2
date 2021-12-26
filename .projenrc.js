const { AwsCdkConstructLibrary, ProjectType } = require('projen');
const project = new AwsCdkConstructLibrary({
  author: 'Robert Koch',
  authorAddress: 'robert@kochie.io',
  cdkVersion: '2.0.0-rc.21',
  defaultReleaseBranch: 'main',
  name: 'aws-lambda-golang-cdk-v2',
  repositoryUrl: 'https://github.com/kochie/aws-lambda-golang-cdk-v2.git',

  // cdkDependencies: undefined,        /* Which AWS CDK modules (those that start with "@aws-cdk/") does this library require when consumed? */
  // cdkTestDependencies: undefined,    /* AWS CDK modules required for testing. */
  deps: [
    'aws-cdk-lib@2.3.0',
    'constructs@^10.0.13',
  ] /* Runtime dependencies of this module. */,
  description:
    'CDK construct for golang files' /* The description is just a string that helps people understand the purpose of the package. */,
  devDeps: [
    'aws-cdk-lib@2.3.0',
  ] /* Build dependencies for this module. */,
  peerDeps: ['aws-cdk-lib@2.3.0'],
  packageName: 'aws-lambda-golang-cdk-v2' /* The "name" in package.json. */,
  // projectType: ProjectType  /* Which type of project this is (library/app). */
  // releaseWorkflow: undefined,        /* Define a GitHub workflow for releasing from "main" when new versions are bumped. */
});
project.synth();
