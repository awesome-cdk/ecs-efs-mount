import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as ExperimentEcsEfsMount from '../lib/experiment-ecs-efs-mount-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new ExperimentEcsEfsMount.ExperimentEcsEfsMountStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
