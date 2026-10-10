// ---------------------------------------------------------------------------
// Edit this file to add/remove projects shown on the Portfolio page.
// ---------------------------------------------------------------------------

export type Project = {
  title: string;
  description: string;
  metric?: string;
  tech: string[];
  github?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    title: "AWS 3-Tier Architecture",
    description:
      "Classic 3-tier (web, application, database) architecture deployed on AWS with layered networking, security groups, and scalability across tiers.",
    metric: "Full VPC design with public/private subnets",
    tech: ["AWS EC2", "VPC", "RDS", "ALB"],
    github:
      "https://github.com/Saaduddin47/AWS-Projects-CCP-Exam-Help/blob/main/AWS_3-Tier_Project_Documentation.docx",
  },
  {
    title: "Social Network — Academic Portal Deployment",
    description:
      "Full-stack app deployed via Docker and Kubernetes on AWS with an automated GitHub Actions CI/CD pipeline.",
    metric: "400+ concurrent users · deploy time 30 min → 5 min",
    tech: ["Docker", "Kubernetes", "AWS", "GitHub Actions", "Redis", "MongoDB"],
    github: "https://github.com/Saaduddin47",
  },
  {
    title: "AWS Mass Email Automation",
    description:
      "Serverless bulk email system on AWS handling templating, delivery tracking, and scaling for high-volume sends.",
    metric: "Fully serverless — zero servers to manage",
    tech: ["AWS SES", "Lambda", "S3", "Python"],
    github:
      "https://github.com/Saaduddin47/AWS-Projects-CCP-Exam-Help/blob/main/AWS_Mass_Email_Automation_Complete_Documentation.docx",
  },
  {
    title: "PizzaPal — AWS Lex Ordering Chatbot",
    description:
      "Conversational pizza-ordering chatbot built with Lex for natural language understanding, integrated with backend order processing.",
    metric: "NLU-driven ordering flow end to end",
    tech: ["AWS Lex", "Lambda", "DynamoDB"],
    github:
      "https://github.com/Saaduddin47/AWS-Projects-CCP-Exam-Help/blob/main/PizzaPal%20%E2%80%94%20AWS%20Lex%20Pizza%20Ordering%20Chatbot%20Documentation.docx",
  },
  {
    title: "AWS Athena + S3 Data Analysis",
    description:
      "Serverless data analysis pipeline querying structured data directly in S3 using Athena, with documented setup and query workflow.",
    metric: "Query S3 directly — no ETL servers",
    tech: ["AWS Athena", "S3", "IAM"],
    github:
      "https://github.com/Saaduddin47/AWS-Projects-CCP-Exam-Help/blob/main/AWS%20Athena%20%2B%20S3%20Data%20Analysis%20Project%20Documentation.docx",
  },
  {
    title: "AWS SageMaker Income Classification",
    description:
      "ML classification model trained and deployed on SageMaker to predict income brackets from demographic data.",
    metric: "Trained, deployed & served on AWS",
    tech: ["AWS SageMaker", "S3", "Python", "scikit-learn"],
    github:
      "https://github.com/Saaduddin47/AWS-Projects-CCP-Exam-Help/blob/main/AWS_SageMaker_Income_Classification_Project_Documentation.docx",
  },
  {
    title: "Visitor Management System",
    description:
      "Role-based visitor management platform, containerised with Docker and deployed on Vercel with CI on GitHub.",
    metric: "Dockerised full visitor journey — QR check-in/out",
    tech: ["Docker", "React", "Node.js", "MongoDB", "Vercel"],
    github: "https://github.com/Saaduddin47/visitor-management-system",
  },
  {
    title: "AWS CCP Projects & Exam Prep",
    description:
      "Hands-on AWS projects plus CLF-C02 study notes, a 7-day checklist, and 10 practice exams — everything used to pass the certification.",
    metric: "6 documented AWS projects in one repo",
    tech: ["AWS", "Documentation"],
    github: "https://github.com/Saaduddin47/AWS-Projects-CCP-Exam-Help",
  },
];
