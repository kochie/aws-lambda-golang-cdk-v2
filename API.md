# API Reference

**Classes**

Name|Description
----|-----------
[GolangFunction](#aws-lambda-golang-cdk-v2-golangfunction)|A Node.js Lambda function bundled using Parcel.


**Structs**

Name|Description
----|-----------
[GolangFunctionProps](#aws-lambda-golang-cdk-v2-golangfunctionprops)|Properties for a GolangFunction.



## class GolangFunction  <a id="aws-lambda-golang-cdk-v2-golangfunction"></a>

A Node.js Lambda function bundled using Parcel.

__Implements__: [IConstruct](#constructs-iconstruct), [IDependable](#constructs-idependable), [IResource](#aws-cdk-lib-iresource), [IDependable](#constructs-idependable), [IConstruct](#constructs-iconstruct), [aws_lambda.IFunction](#aws-cdk-lib-aws-lambda-ifunction), [IDependable](#constructs-idependable), [IConstruct](#constructs-iconstruct), [IResource](#aws-cdk-lib-iresource), [aws_ec2.IConnectable](#aws-cdk-lib-aws-ec2-iconnectable), [aws_iam.IGrantable](#aws-cdk-lib-aws-iam-igrantable), [aws_ec2.IClientVpnConnectionHandler](#aws-cdk-lib-aws-ec2-iclientvpnconnectionhandler)
__Extends__: [aws_lambda.Function](#aws-cdk-lib-aws-lambda-function)

### Initializer




```ts
new GolangFunction(scope: Construct, id: string, props?: GolangFunctionProps)
```

* **scope** (<code>[Construct](#constructs-construct)</code>)  *No description*
* **id** (<code>string</code>)  *No description*
* **props** (<code>[GolangFunctionProps](#aws-lambda-golang-cdk-v2-golangfunctionprops)</code>)  *No description*
  * **maxEventAge** (<code>[Duration](#aws-cdk-lib-duration)</code>)  The maximum age of a request that Lambda sends to a function for processing. __*Default*__: Duration.hours(6)
  * **onFailure** (<code>[aws_lambda.IDestination](#aws-cdk-lib-aws-lambda-idestination)</code>)  The destination for failed invocations. __*Default*__: no destination
  * **onSuccess** (<code>[aws_lambda.IDestination](#aws-cdk-lib-aws-lambda-idestination)</code>)  The destination for successful invocations. __*Default*__: no destination
  * **retryAttempts** (<code>number</code>)  The maximum number of times to retry when the function returns an error. __*Default*__: 2
  * **allowAllOutbound** (<code>boolean</code>)  Whether to allow the Lambda to send all network traffic. __*Default*__: true
  * **allowPublicSubnet** (<code>boolean</code>)  Lambda Functions in a public subnet can NOT access the internet. __*Default*__: false
  * **architecture** (<code>[aws_lambda.Architecture](#aws-cdk-lib-aws-lambda-architecture)</code>)  The system architectures compatible with this lambda function. __*Default*__: Architecture.X86_64
  * **codeSigningConfig** (<code>[aws_lambda.ICodeSigningConfig](#aws-cdk-lib-aws-lambda-icodesigningconfig)</code>)  Code signing config associated with this function. __*Default*__: Not Sign the Code
  * **currentVersionOptions** (<code>[aws_lambda.VersionOptions](#aws-cdk-lib-aws-lambda-versionoptions)</code>)  Options for the `lambda.Version` resource automatically created by the `fn.currentVersion` method. __*Default*__: default options as described in `VersionOptions`
  * **deadLetterQueue** (<code>[aws_sqs.IQueue](#aws-cdk-lib-aws-sqs-iqueue)</code>)  The SQS queue to use if DLQ is enabled. __*Default*__: SQS queue with 14 day retention period if `deadLetterQueueEnabled` is `true`
  * **deadLetterQueueEnabled** (<code>boolean</code>)  Enabled DLQ. __*Default*__: false unless `deadLetterQueue` is set, which implies DLQ is enabled.
  * **description** (<code>string</code>)  A description of the function. __*Default*__: No description.
  * **environment** (<code>Map<string, string></code>)  Key-value pairs that Lambda caches and makes available for your Lambda functions. __*Default*__: No environment variables.
  * **environmentEncryption** (<code>[aws_kms.IKey](#aws-cdk-lib-aws-kms-ikey)</code>)  The AWS KMS key that's used to encrypt your function's environment variables. __*Default*__: AWS Lambda creates and uses an AWS managed customer master key (CMK).
  * **events** (<code>Array<[aws_lambda.IEventSource](#aws-cdk-lib-aws-lambda-ieventsource)></code>)  Event sources for this function. __*Default*__: No event sources.
  * **filesystem** (<code>[aws_lambda.FileSystem](#aws-cdk-lib-aws-lambda-filesystem)</code>)  The filesystem configuration for the lambda function. __*Default*__: will not mount any filesystem
  * **functionName** (<code>string</code>)  A name for the function. __*Default*__: AWS CloudFormation generates a unique physical ID and uses that ID for the function's name. For more information, see Name Type.
  * **initialPolicy** (<code>Array<[aws_iam.PolicyStatement](#aws-cdk-lib-aws-iam-policystatement)></code>)  Initial policy statements to add to the created Lambda Role. __*Default*__: No policy statements are added to the created Lambda role.
  * **insightsVersion** (<code>[aws_lambda.LambdaInsightsVersion](#aws-cdk-lib-aws-lambda-lambdainsightsversion)</code>)  Specify the version of CloudWatch Lambda insights to use for monitoring. __*Default*__: No Lambda Insights
  * **layers** (<code>Array<[aws_lambda.ILayerVersion](#aws-cdk-lib-aws-lambda-ilayerversion)></code>)  A list of layers to add to the function's execution environment. __*Default*__: No layers.
  * **logRetention** (<code>[aws_logs.RetentionDays](#aws-cdk-lib-aws-logs-retentiondays)</code>)  The number of days log events are kept in CloudWatch Logs. __*Default*__: logs.RetentionDays.INFINITE
  * **logRetentionRetryOptions** (<code>[aws_lambda.LogRetentionRetryOptions](#aws-cdk-lib-aws-lambda-logretentionretryoptions)</code>)  When log retention is specified, a custom resource attempts to create the CloudWatch log group. __*Default*__: Default AWS SDK retry options.
  * **logRetentionRole** (<code>[aws_iam.IRole](#aws-cdk-lib-aws-iam-irole)</code>)  The IAM role for the Lambda function associated with the custom resource that sets the retention policy. __*Default*__: A new role is created.
  * **memorySize** (<code>number</code>)  The amount of memory, in MB, that is allocated to your Lambda function. __*Default*__: 128
  * **profiling** (<code>boolean</code>)  Enable profiling. __*Default*__: No profiling.
  * **profilingGroup** (<code>[aws_codeguruprofiler.IProfilingGroup](#aws-cdk-lib-aws-codeguruprofiler-iprofilinggroup)</code>)  Profiling Group. __*Default*__: A new profiling group will be created if `profiling` is set.
  * **reservedConcurrentExecutions** (<code>number</code>)  The maximum of concurrent executions you want to reserve for the function. __*Default*__: No specific limit - account limit.
  * **role** (<code>[aws_iam.IRole](#aws-cdk-lib-aws-iam-irole)</code>)  Lambda execution role. __*Default*__: A unique role will be generated for this lambda function. Both supplied and generated roles can always be changed by calling `addToRolePolicy`.
  * **securityGroups** (<code>Array<[aws_ec2.ISecurityGroup](#aws-cdk-lib-aws-ec2-isecuritygroup)></code>)  The list of security groups to associate with the Lambda's network interfaces. __*Default*__: If the function is placed within a VPC and a security group is not specified, either by this or securityGroup prop, a dedicated security group will be created for this function.
  * **timeout** (<code>[Duration](#aws-cdk-lib-duration)</code>)  The function execution time (in seconds) after which Lambda terminates the function. __*Default*__: Duration.seconds(3)
  * **tracing** (<code>[aws_lambda.Tracing](#aws-cdk-lib-aws-lambda-tracing)</code>)  Enable AWS X-Ray Tracing for Lambda Function. __*Default*__: Tracing.Disabled
  * **vpc** (<code>[aws_ec2.IVpc](#aws-cdk-lib-aws-ec2-ivpc)</code>)  VPC network to place Lambda network interfaces. __*Default*__: Function is not placed within a VPC.
  * **vpcSubnets** (<code>[aws_ec2.SubnetSelection](#aws-cdk-lib-aws-ec2-subnetselection)</code>)  Where to place the network interfaces within the VPC. __*Default*__: the Vpc default strategy if not specified
  * **buildCmd** (<code>string</code>)  The build command. __*Default*__: `go build -ldflags="-s -w"`
  * **buildDir** (<code>string</code>)  The build directory. __*Default*__: `.build` in the entry file directory
  * **entry** (<code>string</code>)  Path to the entry Golang source file. __*Default*__: Derived from the name of the defining file and the construct's id. If the `GolangFunction` is defined in `stack.ts` with `my-handler` as id (`new GolangFunction(this, 'my-handler')`), the construct will look at `stack/my-handler/main.go`
  * **extraEnv** (<code>any</code>)  Additional environment variables. __*Default*__: `{ GOOS: 'linux' }`
  * **handler** (<code>string</code>)  The name of the exported handler in the entry file. __*Default*__: main




## struct GolangFunctionProps  <a id="aws-lambda-golang-cdk-v2-golangfunctionprops"></a>


Properties for a GolangFunction.



Name | Type | Description 
-----|------|-------------
**allowAllOutbound**? | <code>boolean</code> | Whether to allow the Lambda to send all network traffic.<br/>__*Default*__: true
**allowPublicSubnet**? | <code>boolean</code> | Lambda Functions in a public subnet can NOT access the internet.<br/>__*Default*__: false
**architecture**? | <code>[aws_lambda.Architecture](#aws-cdk-lib-aws-lambda-architecture)</code> | The system architectures compatible with this lambda function.<br/>__*Default*__: Architecture.X86_64
**buildCmd**? | <code>string</code> | The build command.<br/>__*Default*__: `go build -ldflags="-s -w"`
**buildDir**? | <code>string</code> | The build directory.<br/>__*Default*__: `.build` in the entry file directory
**codeSigningConfig**? | <code>[aws_lambda.ICodeSigningConfig](#aws-cdk-lib-aws-lambda-icodesigningconfig)</code> | Code signing config associated with this function.<br/>__*Default*__: Not Sign the Code
**currentVersionOptions**? | <code>[aws_lambda.VersionOptions](#aws-cdk-lib-aws-lambda-versionoptions)</code> | Options for the `lambda.Version` resource automatically created by the `fn.currentVersion` method.<br/>__*Default*__: default options as described in `VersionOptions`
**deadLetterQueue**? | <code>[aws_sqs.IQueue](#aws-cdk-lib-aws-sqs-iqueue)</code> | The SQS queue to use if DLQ is enabled.<br/>__*Default*__: SQS queue with 14 day retention period if `deadLetterQueueEnabled` is `true`
**deadLetterQueueEnabled**? | <code>boolean</code> | Enabled DLQ.<br/>__*Default*__: false unless `deadLetterQueue` is set, which implies DLQ is enabled.
**description**? | <code>string</code> | A description of the function.<br/>__*Default*__: No description.
**entry**? | <code>string</code> | Path to the entry Golang source file.<br/>__*Default*__: Derived from the name of the defining file and the construct's id. If the `GolangFunction` is defined in `stack.ts` with `my-handler` as id (`new GolangFunction(this, 'my-handler')`), the construct will look at `stack/my-handler/main.go`
**environment**? | <code>Map<string, string></code> | Key-value pairs that Lambda caches and makes available for your Lambda functions.<br/>__*Default*__: No environment variables.
**environmentEncryption**? | <code>[aws_kms.IKey](#aws-cdk-lib-aws-kms-ikey)</code> | The AWS KMS key that's used to encrypt your function's environment variables.<br/>__*Default*__: AWS Lambda creates and uses an AWS managed customer master key (CMK).
**events**? | <code>Array<[aws_lambda.IEventSource](#aws-cdk-lib-aws-lambda-ieventsource)></code> | Event sources for this function.<br/>__*Default*__: No event sources.
**extraEnv**? | <code>any</code> | Additional environment variables.<br/>__*Default*__: `{ GOOS: 'linux' }`
**filesystem**? | <code>[aws_lambda.FileSystem](#aws-cdk-lib-aws-lambda-filesystem)</code> | The filesystem configuration for the lambda function.<br/>__*Default*__: will not mount any filesystem
**functionName**? | <code>string</code> | A name for the function.<br/>__*Default*__: AWS CloudFormation generates a unique physical ID and uses that ID for the function's name. For more information, see Name Type.
**handler**? | <code>string</code> | The name of the exported handler in the entry file.<br/>__*Default*__: main
**initialPolicy**? | <code>Array<[aws_iam.PolicyStatement](#aws-cdk-lib-aws-iam-policystatement)></code> | Initial policy statements to add to the created Lambda Role.<br/>__*Default*__: No policy statements are added to the created Lambda role.
**insightsVersion**? | <code>[aws_lambda.LambdaInsightsVersion](#aws-cdk-lib-aws-lambda-lambdainsightsversion)</code> | Specify the version of CloudWatch Lambda insights to use for monitoring.<br/>__*Default*__: No Lambda Insights
**layers**? | <code>Array<[aws_lambda.ILayerVersion](#aws-cdk-lib-aws-lambda-ilayerversion)></code> | A list of layers to add to the function's execution environment.<br/>__*Default*__: No layers.
**logRetention**? | <code>[aws_logs.RetentionDays](#aws-cdk-lib-aws-logs-retentiondays)</code> | The number of days log events are kept in CloudWatch Logs.<br/>__*Default*__: logs.RetentionDays.INFINITE
**logRetentionRetryOptions**? | <code>[aws_lambda.LogRetentionRetryOptions](#aws-cdk-lib-aws-lambda-logretentionretryoptions)</code> | When log retention is specified, a custom resource attempts to create the CloudWatch log group.<br/>__*Default*__: Default AWS SDK retry options.
**logRetentionRole**? | <code>[aws_iam.IRole](#aws-cdk-lib-aws-iam-irole)</code> | The IAM role for the Lambda function associated with the custom resource that sets the retention policy.<br/>__*Default*__: A new role is created.
**maxEventAge**? | <code>[Duration](#aws-cdk-lib-duration)</code> | The maximum age of a request that Lambda sends to a function for processing.<br/>__*Default*__: Duration.hours(6)
**memorySize**? | <code>number</code> | The amount of memory, in MB, that is allocated to your Lambda function.<br/>__*Default*__: 128
**onFailure**? | <code>[aws_lambda.IDestination](#aws-cdk-lib-aws-lambda-idestination)</code> | The destination for failed invocations.<br/>__*Default*__: no destination
**onSuccess**? | <code>[aws_lambda.IDestination](#aws-cdk-lib-aws-lambda-idestination)</code> | The destination for successful invocations.<br/>__*Default*__: no destination
**profiling**? | <code>boolean</code> | Enable profiling.<br/>__*Default*__: No profiling.
**profilingGroup**? | <code>[aws_codeguruprofiler.IProfilingGroup](#aws-cdk-lib-aws-codeguruprofiler-iprofilinggroup)</code> | Profiling Group.<br/>__*Default*__: A new profiling group will be created if `profiling` is set.
**reservedConcurrentExecutions**? | <code>number</code> | The maximum of concurrent executions you want to reserve for the function.<br/>__*Default*__: No specific limit - account limit.
**retryAttempts**? | <code>number</code> | The maximum number of times to retry when the function returns an error.<br/>__*Default*__: 2
**role**? | <code>[aws_iam.IRole](#aws-cdk-lib-aws-iam-irole)</code> | Lambda execution role.<br/>__*Default*__: A unique role will be generated for this lambda function. Both supplied and generated roles can always be changed by calling `addToRolePolicy`.
**securityGroups**? | <code>Array<[aws_ec2.ISecurityGroup](#aws-cdk-lib-aws-ec2-isecuritygroup)></code> | The list of security groups to associate with the Lambda's network interfaces.<br/>__*Default*__: If the function is placed within a VPC and a security group is not specified, either by this or securityGroup prop, a dedicated security group will be created for this function.
**timeout**? | <code>[Duration](#aws-cdk-lib-duration)</code> | The function execution time (in seconds) after which Lambda terminates the function.<br/>__*Default*__: Duration.seconds(3)
**tracing**? | <code>[aws_lambda.Tracing](#aws-cdk-lib-aws-lambda-tracing)</code> | Enable AWS X-Ray Tracing for Lambda Function.<br/>__*Default*__: Tracing.Disabled
**vpc**? | <code>[aws_ec2.IVpc](#aws-cdk-lib-aws-ec2-ivpc)</code> | VPC network to place Lambda network interfaces.<br/>__*Default*__: Function is not placed within a VPC.
**vpcSubnets**? | <code>[aws_ec2.SubnetSelection](#aws-cdk-lib-aws-ec2-subnetselection)</code> | Where to place the network interfaces within the VPC.<br/>__*Default*__: the Vpc default strategy if not specified



