import * as cdk from '@aws-cdk/core';
import * as ecs from '@aws-cdk/aws-ecs';
import {ApplicationLoadBalancedFargateService} from "@aws-cdk/aws-ecs-patterns";
import * as path from "path";
import {Duration} from "@aws-cdk/core";

export class ExperimentEcsEfsMountStack extends cdk.Stack {
    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const cluster = new ecs.Cluster(this, 'Cluster');

        const loadBalancedFargateService = new ApplicationLoadBalancedFargateService(this, 'Service', {
            cluster,
            memoryLimitMiB: 512,
            cpu: 256,
            desiredCount: 2,
            taskImageOptions: {
                image: ecs.ContainerImage.fromAsset(path.resolve(__dirname, './../app')),
                containerPort: 8080,
            },
            healthCheckGracePeriod: Duration.seconds(10),
        });
    }
}
