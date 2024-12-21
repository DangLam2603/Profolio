import ProjectCard from "@/components/ui/card";
import React from "react";

const Projects = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between xl:pt-8 xl:pb-24">
          <ProjectCard
            title="Fun & Funding"
            date="Sep 2024 - Now"
            content="Fun&Funding helps independent game developers bring their educational children’s games to life by providing a platform to showcase and crowdfund their projects. It connects creators with parents looking for innovative ways to educate their children, offering the financial support and exposure needed to turn ideas into reality."
            imgSrc="/assets/projectImg/FunAndFunding.png"
            teamSize="5"
            isRight={false}
            tags={["React", "Tailwind", ".NET 8", "Azure"]}
            links={[
              {
                href: "https://github.com/CKS-166/Fun-And-Funding-Api",
                label: "GitHub",
              },
            ]}
          />
          <ProjectCard
            title="FPTU Starter"
            date="May 2024 - Jul 2024"
            content="FPTU Starter is a crowdfunding platform supporting FPT University’s students, faculty, and community. It connects creators with backers to bring innovative projects—research, startups, social initiatives, or art—to life, fostering collaboration and meaningful impact."
            imgSrc="/assets/projectImg/FPTUStarter.png"
            teamSize="5"
            isRight={true}
            tags={["React", ".Net 6", "Tailwind"]}
            links={[
              {
                href: "https://github.com/DangLam2603/FPTUStarter_backend",
                label: "GitHub",
              },
            ]}
          />
          <ProjectCard
            title="Deploy Web API using Elastic Beanstalk & CI/CD via CodePipeline"
            date="Aug 2024"
            content="In this workshop, we will build and deploy a Web API system (NET 6, Swagger UI), set up a database (SQL Server), configure load
            balancing and auto-scaling on AWS cloud infrastructure, and develop a continuous integration (CI) and continuous deployment (CD)
            pipeline."
            imgSrc="/assets/projectImg/CICD.png"
            teamSize="1"
            isRight={false}
            tags={[
              "FCJ",
              "AWS",
              ".NET 6",
              "ElasticBeanStalk",
              "CodePipeline",
              "CodeBuild",
            ]}
            links={[
              {
                href: "https://github.com/DangLam2603/FCJ-WS1",
                label: "GitHub",
              },
              { href: "https://fcj-ws1.vercel.app/", label: "Site" },
            ]}
          />
          <ProjectCard
            title="Real-time detection for S3 bucket with Amazon GuardDuty"
            date="Sep 2024"
            content="In this workshop, we will set up real-time detection for an S3 bucket using GuardDuty's new Malware Protection for S3 feature. This will
            include detecting and exporting findings, then triggering an Amazon EventBridge rule to send email notifications via an SNS Topic"
            imgSrc="/assets/projectImg/GD.png"
            teamSize="1"
            isRight={true}
            tags={["FCJ", "GuardDuty", "AWS"]}
            links={[
              {
                href: "https://github.com/DangLam2603/FCJ-WS2",
                label: "GitHub",
              },
              { href: "https://fcj-ws2.vercel.app/", label: "Site" },
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
