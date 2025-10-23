import { Badge, Flex, Grid, GridItem, Timeline, Card, List } from "@chakra-ui/react";
import { ElementCard } from "@/app/components/card/card";
import { SiTerraform } from "react-icons/si";
import { FaGears } from "react-icons/fa6";
import { FaPeopleArrows, FaLock, FaList } from "react-icons/fa";
import { IoIosStats } from "react-icons/io";
import { GrCycle } from "react-icons/gr";
import { AiOutlineCluster } from "react-icons/ai";
import { IoIosPerson } from "react-icons/io";



export default function About() {
  const defaultColumn = 3;
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pb-20 sm:p-20 dark">
      <Flex gap="32" direction="column" bgColor="gray.900" rounded="md" borderWidth="15px" shadow="lg" position="absolute" top="20px" w="1/2" maxW="2x1" minW="800px" padding="8" borderColor="gray.600/40">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start dark">
          Nicholas Strange
          <Grid templateColumns="repeat(3, 1fr)" gap="12">
            <GridItem colSpan={defaultColumn}>
              <ElementCard>
                  <Card.Body gap="2" color="fg.muted">
                <ElementCard.CardTitle><IoIosPerson />About Me</ElementCard.CardTitle>
                <ElementCard.CardText>
                  As a Senior DevOps Engineer, I specialize in building scalable, reliable, and secure systems that empower teams to deliver software with confidence.
                  My approach focuses on automation, observability, and resilient architecture—ensuring that infrastructure and pipelines evolve in step with product growth and organizational needs.
                </ElementCard.CardText>
                  </Card.Body>
              </ElementCard >
            </GridItem>
            <GridItem colSpan={defaultColumn}>
              <ElementCard>
                  <Card.Body gap="2" color="fg.muted">
                <ElementCard.CardTitle><SiTerraform />Infrastructure as Code</ElementCard.CardTitle>
                <ElementCard.CardText>
                  I have hands-on experience with Infrastructure as Code (IaC) tools, including Terraform and AWS CloudFormation.
                  My approach to writing infrastructure code emphasizes modularity, scalability, resilience, and idempotency—ensuring that environments are predictable, repeatable, and easy to manage.
                  I follow best practices such as separating environments, using reusable modules, and integrating IaC with CI/CD pipelines for automated provisioning and updates.
                  This helps reduce manual intervention, improve system reliability, and support rapid development cycles.
                </ElementCard.CardText>
                  </Card.Body>
                  <ElementCard.CardFooter>
                    Tools: <Badge colorPalette="purple">Terraform</Badge> <Badge colorPalette="orange">Cloud Formation</Badge>
                  </ElementCard.CardFooter>
              </ElementCard >
            </GridItem>
            <GridItem colSpan={defaultColumn}>
              <ElementCard>
                  <Card.Body gap="2" color="fg.muted">
                <ElementCard.CardTitle><FaGears />Orchestration</ElementCard.CardTitle>
                <ElementCard.CardText>
                  Automation alone is not sufficient — I aim to orchestrate the entire software development lifecycle to minimize manual intervention and cognitive overhead.
                  By embedding observability into the development process, I ensure that teams have real-time insights into system health, performance, and reliability.
                  I advocate for proactive monitoring, structured logging, and traceability across services, so developers can focus on building features rather than firefighting.
                </ElementCard.CardText>
                  </Card.Body>
              </ElementCard >
            </GridItem>
            <GridItem colSpan={defaultColumn}>
              <ElementCard>
                  <Card.Body gap="2" color="fg.muted">
                <ElementCard.CardTitle><FaPeopleArrows /> Team Integration</ElementCard.CardTitle>
                <ElementCard.CardText>
                  DevOps should never exist in a silo or remain just a theoretical concept.
                  I actively foster strong collaboration across development, security, and operations teams to ensure shared ownership of both the build and runtime environments.
                  By being involved early in the design and planning stages, I help make more informed decisions that consider scalability, security, and maintainability from the start.
                  This integrated approach leads to more robust systems, fewer downstream issues, and ultimately, a better experience for end users and stakeholders alike.
                </ElementCard.CardText>
                  </Card.Body>
                  <ElementCard.CardFooter>
                    Tools:
                    <Badge colorPalette="blue">Jira</Badge>
                    <Badge colorPalette="yellow">Trello</Badge>
                    <Badge colorPalette="red">Service Now</Badge>
                    <Badge colorPalette="teal">Teams</Badge>
                    <Badge colorPalette="purple">Slack</Badge>
                    <Badge colorPalette="cyan">Zoom</Badge>
                  </ElementCard.CardFooter>
              </ElementCard >
            </GridItem>
            <GridItem colSpan={defaultColumn}>
              <ElementCard>
                  <Card.Body gap="2" color="fg.muted">
                <ElementCard.CardTitle><IoIosStats />Observability</ElementCard.CardTitle>
                <ElementCard.CardText>
                  I design and implement comprehensive observability frameworks that turn infrastructure and application behavior into actionable insight using the following:
                  <List.Root ml="5">
                    <List.Item>
                   Develop alerting and SLO-based monitoring strategies to proactively detect performance regressions and reliability risks.
                    </List.Item>
                    <List.Item>
                  Advocate for a data-driven operations culture, where teams use telemetry to improve system performance, resilience, and customer experience.
                    </List.Item>
                    <List.Item>
                  Integrate observability into CI/CD workflows to enable early detection and faster remediation.
                    </List.Item>
                  </List.Root>
                </ElementCard.CardText>
                  </Card.Body>
                  <ElementCard.CardFooter>
                    Tools:
                    <Badge colorPalette="purple">Datadog</Badge>
                    <Badge colorPalette="orange">Prometheus</Badge>
                    <Badge colorPalette="yellow">Grafana</Badge>
                    <Badge colorPalette="blue">Elastic</Badge>
                  </ElementCard.CardFooter>
              </ElementCard >
            </GridItem>
            <GridItem colSpan={defaultColumn}>
              <ElementCard>
                  <Card.Body gap="2" color="fg.muted">
                <ElementCard.CardTitle><GrCycle />CI/CD</ElementCard.CardTitle>
                <ElementCard.CardText>
                  I architect and maintain end-to-end CI/CD pipelines that enable teams to ship code securely and efficiently focusing on the following:
                  <List.Root ml="5">
                    <List.Item>
                  Enforce quality gates through automated testing, static analysis, and vulnerability scanning.
                    </List.Item>
                    <List.Item>
                  Implement progressive delivery strategies (blue/green, canary, feature flags) for safe, zero-downtime releases.
                    </List.Item>
                    <List.Item>
                  Focus on pipeline reliability and feedback loops, ensuring developers receive fast, consistent feedback on every change.
                    </List.Item>
                  </List.Root>
                </ElementCard.CardText>
                  </Card.Body>
                  <ElementCard.CardFooter>
                    Tools:
                    <Badge colorPalette="orange">Argo Suite</Badge>
                    <Badge colorPalette="cyan">Gitlab-ci</Badge>
                    <Badge colorPalette="blue">Jenkins</Badge>
                    <Badge colorPalette="red">Github Actions</Badge>
                    <Badge colorPalette="green">Concourse-CI</Badge>
                  </ElementCard.CardFooter>
              </ElementCard >
            </GridItem>
            <GridItem colSpan={defaultColumn}>
              <ElementCard>
                  <Card.Body gap="2" color="fg.muted">
                <ElementCard.CardTitle><FaLock />Security</ElementCard.CardTitle>
                <ElementCard.CardText>
                  I embed security into every phase of development and operations—shifting left while maintaining a practical DevSecOps approach by using the following:
                  <List.Root ml="5">
                    <List.Item>
                  Automate vulnerability scanning (containers, IaC, dependencies) and integrate findings into CI/CD.
                    </List.Item>
                  Manage secrets and identity securely using AWS IAM, HashiCorp Vault, and SSO integrations.
                    <List.Item>
                  Apply least privilege principles, network segmentation, and encryption by default.
                    </List.Item>
                    <List.Item>
                  Collaborate with security teams to perform threat modeling, compliance checks, and incident response drills. 
                    </List.Item>
                    </List.Root>
                </ElementCard.CardText>
                  </Card.Body>
                  <ElementCard.CardFooter>
                    Tools:
                    <Badge colorPalette="purple">SecScan</Badge>
                    <Badge colorPalette="yellow">Crowdstrike Falcon</Badge>
                    <Badge colorPalette="orange">AWS Inspector</Badge>
                    <Badge colorPalette="blue">Sonar</Badge>
                    <Badge colorPalette="green">Renovate</Badge>
                  </ElementCard.CardFooter>
              </ElementCard >
            </GridItem>
            <GridItem colSpan={defaultColumn}>
              <ElementCard>
                  <Card.Body gap="2" color="fg.muted">
                <ElementCard.CardTitle><AiOutlineCluster />Architecture</ElementCard.CardTitle>
                <ElementCard.CardText>
                  I design and implement cloud-native infrastructure that balances scalability, cost, and maintainability with the following:
                  <List.Root ml="5">
                    <List.Item>
                  Architect highly available systems using AWS, Kubernetes, and Terraform.
                    </List.Item>
                    <List.Item>
                  Develop infrastructure as code (IaC) that is modular, version-controlled, and reviewable.
                    </List.Item>
                    <List.Item>
                  Utilize microservice and event-driven architectures to support complex, distributed systems.
                    </List.Item>
                    <List.Item>
                  Focus on resilience, scalability, and cost optimization, aligning infrastructure decisions with business objectives.
                    </List.Item>
                    <List.Item>
                  Enable self-service and platform engineering to empower development teams while maintaining governance and standards. 
                    </List.Item>
                    </List.Root>
                </ElementCard.CardText>
                  </Card.Body>
                  <ElementCard.CardFooter>
                    Tools:
                    <Badge colorPalette="purple">Miro</Badge>
                    <Badge colorPalette="blue">Lucid</Badge>
                    <Badge colorPalette="teal">Mind Map</Badge>
                  </ElementCard.CardFooter>
              </ElementCard >
            </GridItem>
            <GridItem colSpan={defaultColumn} >
              <ElementCard>
                  <Card.Body gap="2" color="fg.muted">
                <ElementCard.CardTitle><FaList />Example New Project Workflow</ElementCard.CardTitle>
                <ElementCard.CardText> {/* add timeline component here */}

                  <Timeline.Root size="lg" variant="outline">
                    <Timeline.Item>
                      <Timeline.Content flex="1" />
                      <Timeline.Connector>
                        <Timeline.Separator />
                        <Timeline.Indicator />
                      </Timeline.Connector>
                      <Timeline.Content flex="1">
                        <Timeline.Title>Hear of new product/software</Timeline.Title>
                      </Timeline.Content>
                    </Timeline.Item>

                    <Timeline.Item>
                      <Timeline.Content flex="1">
                        <Timeline.Title>View website/examples and look at alternatives</Timeline.Title>
                      </Timeline.Content>
                      <Timeline.Connector>
                        <Timeline.Separator />
                        <Timeline.Indicator />
                      </Timeline.Connector>
                      <Timeline.Content flex="1" />
                    </Timeline.Item>

                    <Timeline.Item>
                      <Timeline.Content flex="1" />
                      <Timeline.Connector>
                        <Timeline.Separator />
                        <Timeline.Indicator />
                      </Timeline.Connector>
                      <Timeline.Content flex="1" >
                        <Timeline.Title>Review if surface level product will be an upgrade/provide use</Timeline.Title>
                      </Timeline.Content>
                    </Timeline.Item>

                    <Timeline.Item>
                      <Timeline.Content flex="1">
                        <Timeline.Title>Discuss with team idea to see benefits/drawbacks/costs and weigh alternatives or existing solution if there is one</Timeline.Title>
                      </Timeline.Content>
                      <Timeline.Connector>
                        <Timeline.Separator />
                        <Timeline.Indicator />
                      </Timeline.Connector>
                      <Timeline.Content flex="1" />
                    </Timeline.Item>

                    <Timeline.Item>
                      <Timeline.Content flex="1" />
                      <Timeline.Connector>
                        <Timeline.Separator />
                        <Timeline.Indicator />
                      </Timeline.Connector>
                      <Timeline.Content flex="1">
                        <Timeline.Title>Submit idea and form a spike</Timeline.Title>
                      </Timeline.Content>
                    </Timeline.Item>

                    <Timeline.Item>
                      <Timeline.Content flex="1">
                        <Timeline.Title>POC on local machine/lower environment(sandbox env)</Timeline.Title>
                      </Timeline.Content>
                      <Timeline.Connector>
                        <Timeline.Separator />
                        <Timeline.Indicator />
                      </Timeline.Connector>
                      <Timeline.Content flex="1" />
                    </Timeline.Item>

                    <Timeline.Item>
                      <Timeline.Content flex="1" />
                      <Timeline.Connector>
                        <Timeline.Separator />
                        <Timeline.Indicator />
                      </Timeline.Connector>
                      <Timeline.Content flex="1">
                        <Timeline.Title>Test POC and have team members validate current deployment</Timeline.Title>
                      </Timeline.Content>
                    </Timeline.Item>

                    <Timeline.Item>
                      <Timeline.Content flex="1">
                        <Timeline.Title>Determine with team(s) if the project should move forward</Timeline.Title>
                      </Timeline.Content>
                      <Timeline.Connector>
                        <Timeline.Separator />
                        <Timeline.Indicator />
                      </Timeline.Connector>
                      <Timeline.Content flex="1" />
                    </Timeline.Item>

                    <Timeline.Item>
                      <Timeline.Content flex="1" />
                      <Timeline.Connector>
                        <Timeline.Separator />
                        <Timeline.Indicator />
                      </Timeline.Connector>
                      <Timeline.Content flex="1">
                        <Timeline.Title>If moving forward design a plan, architecture layout, costs</Timeline.Title>
                      </Timeline.Content>
                    </Timeline.Item>

                    <Timeline.Item>
                      <Timeline.Content flex="1">
                        <Timeline.Title>Designate tasks for doucmentation, rollout, write up of backout plan
</Timeline.Title>
                      </Timeline.Content>
                      <Timeline.Connector>
                        <Timeline.Separator />
                        <Timeline.Indicator />
                      </Timeline.Connector>
                      <Timeline.Content flex="1" />
                    </Timeline.Item>

                  </Timeline.Root>
                </ElementCard.CardText>
                  </Card.Body>
              </ElementCard >
            </GridItem>
          </Grid>
          <div className="flex gap-4 items-center flex-col sm:flex-row">
        </div>
      </main>
    </Flex>
  </div>
  );
}
