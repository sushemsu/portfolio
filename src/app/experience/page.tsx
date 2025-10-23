
import { Flex, Grid, GridItem, Card, Heading, } from "@chakra-ui/react";
import { ElementCard } from "@/app/components/experience/expcard";



export default function About() {
  const defaultColumn = 3;
  const jobs = [
    {
      Company: "Morning Consult",
      Title: "Senior Devops Engineer 2 -- Platform",
      Dates: "2022 Jul - 2025 Oct",
      Desc: `On the Devops Platform team: Automate and orchestrate pipelines for existing and new infrastructure.
      Plan, design and document software project initiatives.
      Mentor and pair with peers to help both parties professionally develop.
      Collaborate with external teams and stakeholders to help achieve a good rapport as well as to meet slas/slos.
      Design, discuss, codify, and document and deploy initiatives of projects from start to finish.`,
      Location: "remote",
    }, {
      Company: "VMware",
      Title: "Site Reliability Engineer",
      Dates: "2021 Apr - 2022 Jul",
      Desc: `Create, implement and maintain automation infrastructure utilizing concourse-ci paired with gitlab.
      Debug/troubleshoot systems and pipelines for infrastructure deployed in aws (ec2/eks/ecs).
      Write and maintain configuration as code with ansible.
      Foster a rapport between dev and ops groups to provide cohesion between the teams and ensure a synergetic workflow can benefit both groups.
      Create and update documentation related to tasks and duties.
      Work with others to help improve current implementations as well as to integrate newer solutions within the environments.`,
      Location: "remote",
    },{
      Company: "Comcast",
      Title: "Devops Engineer/Developer",
      Dates: "2020 Jan - 2021 Apr",
      Desc: `Implement technical infrastructure solutions to support the deployment of IP video technologies and services.
      Oversee configuration and capacity management of infrastructure domains for production environments.
      Monitor and maintain fault tolerant and distributed virtual machines (para and full).
      Development of tools and/or processes for monitoring and managing physical and container based systems.
      Collaborate, support and implement forward-looking designs provided by Platform Infrastructure Engineering.
      Support Platform CI/CD Development initiatives to assist in the deployment, research and augmentation of platform automation in order to remove manual operations.
      Foster cross-functional knowledge sharing and mentoring among the various engineering teams.`,
      Location: "Denver, CO",
    },{
      Company: "Charter Communications",
      Title: "Devops Engineer",
      Dates: "2018 May - 2020 Jan",
      Desc: `Provision and maintain systems within a cloud environment utilizing devops tooling.
      Collaborate with development and operations groups to produce a platform for delivering software.
      Plan and work with the teams to ensure infrastructure and configurations meet the needs of both groups.
      Document and validate changes made to automation and adhere to coding standards within the organization.`,
      Location: "Denver Tech Center, CO",
  },{
      Company: "IBM",
      Title: "Linux/Unix System Administrator",
      Dates: "2016 May - 2018 May",
      Desc: `Deploy and maintain a virtual and physical Linux and Solaris baseline.
      Create scripts and packages to address system needs and ensure system stability using puppet and IBM BigFix.
      Provide support for custom system applications.
      Regularly interface with customers to ensure quality of service is met.`,
      Location: "Boulder, CO",
  },{
      Company: "Raytheon",
      Title: "Linux/Unix System Administrator",
      Dates: "2013 Jan - 2016 May",
      Desc: `Deploy and maintain a virtual and physical Linux and Solaris Baseline.
      Create scripts and packages for this baseline, setup a repository server and ensure the configurations are stable and persistent.
      Using in house deployment software, VmWare, and RHEV stand up servers to support the platform delivered to customers.
      Provide support for custom system applications.
      Regularly interface with customers to ensure quality of service is met.`,
      Location: "Aurora, CO",
  }, {
      Company: "ITEC",
      Title: "Computer System Tech Operating Sys Admin",
      Dates: "2011 Dec - 2013 Jan",
      Desc: `Perform system administration on local and wide area networks on Unix, Linux, and Windows machines.
      Perform day to day maintenance activities of backup/recovery, performance tuning, scripting, monitoring of servers and clients.
      Work in an open environment where frequent and direct interaction and collaboration with customers and peers is ordinary.`,
      Location: "Aurora, CO"
  },{
      Company: "National Guard",
      Title: "35G Geospatial Analyst",
      Dates: "2010 Jul - 2017 Jul",
      Desc: `Geospatial Analyst`,
      Location: "Denver, CO",
  },


  ]
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pb-20 sm:p-20 dark">
      <Flex gap="32" direction="column" bgColor="gray.900" rounded="md" borderWidth="15px" shadow="lg" position="absolute" top="20px" w="1/2" maxW="2x1" minW="800px" padding="8" borderColor="gray.600/40">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start dark">
          Nicholas Strange
          <Grid templateColumns="repeat(2, 1fr)" gap="12" w="100%">
            {jobs.map((job, i) => (
            <GridItem key={i} colSpan={defaultColumn}>
              <ElementCard>
                  <Card.Body gap="2" color="fg.muted">
                <ElementCard.CardHeader>
                  <Heading color="teal" size="3xl"> {job.Company} </Heading>
                  <Heading size="xl"> {job.Title} </Heading>
                  <Heading size="md"> {job.Dates} </Heading>
                  <Heading size="md"> Location: {job.Location} </Heading>
                  </ElementCard.CardHeader>
                <ElementCard.CardText>
                      {job.Desc}
                </ElementCard.CardText>
                  </Card.Body>
              </ElementCard>
            </GridItem>
            ))}
          </Grid>
          <div className="flex gap-4 items-center flex-col sm:flex-row">
        </div>
      </main>
    </Flex>
  </div>
  );
}