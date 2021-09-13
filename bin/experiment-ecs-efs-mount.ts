#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import {ExperimentEcsEfsMountStack} from '../lib/experiment-ecs-efs-mount-stack';

const app = new cdk.App();
new ExperimentEcsEfsMountStack(app, 'ExperimentEcsEfsMountStack', {
    env: {account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION},
});
