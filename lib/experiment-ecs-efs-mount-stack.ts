import * as cdk from '@aws-cdk/core';
import * as ecs from '@aws-cdk/aws-ecs';
import {ApplicationLoadBalancedFargateService} from "@aws-cdk/aws-ecs-patterns";

export class ExperimentEcsEfsMountStack extends cdk.Stack {
    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const cluster = new ecs.Cluster(this, 'Cluster');

        const loadBalancedFargateService = new ApplicationLoadBalancedFargateService(this, 'Service', {
            cluster,
            memoryLimitMiB: 1024,
            cpu: 512,
            taskImageOptions: {
                image: ecs.ContainerImage.fromRegistry("amazon/amazon-ecs-sample"),
            },
        });

        // loadBalancedFargateService.targetGroup.configureHealthCheck({
        //     path: "/custom-health-path",
        // });
    }
}
