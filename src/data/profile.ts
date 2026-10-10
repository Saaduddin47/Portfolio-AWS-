// ---------------------------------------------------------------------------
// Edit this file to update your personal details across the whole site.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Syed Saaduddin Azhaan",
  shortName: "Saaduddin",
  role: "Cloud & DevOps Engineer",
  typingRoles: [
    "AWS Cloud Engineer",
    "DevOps & Automation Enthusiast",
    "CI/CD Pipeline Builder",
    "Kubernetes & Containers",
    "Infrastructure as Code Advocate",
  ],
  location: "Hyderabad, India",
  email: "saaduddinsyed10@gmail.com",
  phone: "+91 8331928125",
  availability: "Open to opportunities",
  repliesWithin: "Replies within 24h",
  summary:
    "AWS Certified Cloud Practitioner and B.E. Computer Science graduate (CGPA 8.7/10) with hands-on experience deploying and troubleshooting applications on AWS, Docker, and Kubernetes, and automating CI/CD workflows with GitHub Actions.",
  longBio:
    "I build and automate cloud infrastructure — from classic 3-tier architectures on AWS to containerized deployments on Kubernetes with fully automated CI/CD pipelines. I won the Best Use of AWS award at the Hackprix National Hackathon, published research on fraud detection, and spent my internships diagnosing performance bottlenecks in production-like systems. I believe infrastructure should be boring, predictable, and automated.",
  socials: {
    github: "https://github.com/Saaduddin47",
    linkedin: "https://linkedin.com/in/azhaan47",
    x: "https://x.com/Azhaan_47",
  },
  resumeFile: "/resume.pdf",
};

export const stats = [
  { value: 20, suffix: "+", label: "GitHub Repos" },
  { value: 6, suffix: "+", label: "Certifications" },
  { value: 25, suffix: "+", label: "Technologies" },
  { value: 8.7, suffix: "", label: "CGPA / 10", decimals: 1 },
];

export const areasOfWork = [
  {
    index: "01",
    title: "Cloud Engineering",
    tag: "CLOUD",
    description:
      "Designing and deploying secure, cost-aware environments on AWS — EC2, VPC, S3, RDS, Lambda, IAM — from 3-tier architectures to fully serverless stacks.",
  },
  {
    index: "02",
    title: "CI/CD Automation",
    tag: "PIPELINES",
    description:
      "Building automated delivery pipelines with GitHub Actions — compressing deployments from 30 minutes to 5, with testing and rollout baked into the workflow.",
  },
  {
    index: "03",
    title: "Containers & Kubernetes",
    tag: "ORCHESTRATION",
    description:
      "Containerizing applications with Docker and running them on Kubernetes — deployments, services, and scaling for 400+ concurrent users.",
  },
  {
    index: "04",
    title: "Monitoring & Automation",
    tag: "RELIABILITY",
    description:
      "Scripting away repetitive ops work with Python and Bash, and building the monitoring basics that keep systems observable and predictable.",
  },
];

export const education = {
  degree: "B.E., Computer Science (Data Science)",
  school: "Lords Institute of Engineering and Technology, Hyderabad",
  period: "Nov 2022 – Jun 2026",
  gpa: "CGPA 8.7/10",
  coursework:
    "Data Structures & Algorithms, OOP, DBMS, SQL, Networking Basics, Machine Learning",
};

export const internships = [
  {
    role: "Machine Learning Intern",
    company: "Manac Infotech, Hyderabad",
    period: "Dec 2024 – Jan 2025",
    points: [
      "Diagnosed root causes of model performance issues across 50,000+ transaction records, achieving 99% classification accuracy through systematic testing and refinement.",
      "Built automated data pipelines with Python and Pandas; evaluated reliability using precision, recall, and F1-score, reducing false positives by 20%.",
    ],
  },
  {
    role: "Web Development Intern",
    company: "Intern Certify, Hyderabad",
    period: "Oct 2024 – Nov 2024",
    points: [
      "Diagnosed and resolved performance bottlenecks in web applications, improving page load time by 30%.",
      "Collaborated using structured GitHub branching, reducing merge conflicts by 40% across 3 live client projects.",
    ],
  },
];

export const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "Sep 2026 – Sep 2029",
    credentialId: "b98ef05238fd4ec6b7d904cf6a5ce0e4",
    verifyUrl: "https://aws.amazon.com/verification",
    status: "verified" as const,
  },
  {
    title: "Docker Foundations Professional Certificate",
    issuer: "Docker, Inc / LinkedIn Learning",
    date: "Jul 2026",
    credentialId:
      "12e076a515771b9a574db6d89b178efff7157c01446c3898e2f2fd08d70f6a3c",
    verifyUrl: "https://www.linkedin.com/in/azhaan47",
    status: "verified" as const,
  },
  {
    title: "GitHub Actions Workshop: CI/CD Pipelines",
    issuer: "Microsoft Press / LinkedIn Learning",
    date: "Jul 2026",
    credentialId: null,
    verifyUrl: "https://www.linkedin.com/in/azhaan47",
    status: "verified" as const,
  },
  {
    title: "Kubernetes Learning Path (6 courses)",
    issuer: "LinkedIn Learning",
    date: "Jul 2026",
    credentialId: null,
    verifyUrl: "https://www.linkedin.com/in/azhaan47",
    status: "verified" as const,
  },
  {
    title: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    date: "In progress",
    credentialId: null,
    verifyUrl: null,
    status: "in-progress" as const,
  },
  {
    title: "Certified Kubernetes Administrator (CKA)",
    issuer: "CNCF",
    date: "Planned",
    credentialId: null,
    verifyUrl: null,
    status: "planned" as const,
  },
];

export const achievements = [
  {
    title: "Best Use of AWS Award",
    detail:
      "Won at Hackprix National Hackathon (₹22,000 prize) for cloud architecture and deployment strategy.",
    tag: "AWARD",
  },
  {
    title: "Research Publication",
    detail:
      '"Credit Card Fraud Detection Using Random Forest And CART Algorithms" — IJLTEMAS Journal, Apr 2025.',
    tag: "PUBLICATION",
  },
  {
    title: "Invited Speaker",
    detail:
      "Addressed 500+ participants at a 2-day student hackathon at VBIT.",
    tag: "SPEAKER",
  },
  {
    title: "Student Mentor",
    detail:
      "Guided first-year students via the Lords Skill Connect IQAC initiative.",
    tag: "MENTORSHIP",
  },
];

export const skillGroups = [
  {
    group: "Cloud Platforms",
    skills: [
      "AWS EC2",
      "S3",
      "Lambda",
      "RDS",
      "VPC",
      "IAM",
      "SES",
      "Lex",
      "Athena",
      "SageMaker",
      "Azure (basics)",
      "GCP (basics)",
    ],
  },
  {
    group: "DevOps & Infrastructure",
    skills: [
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "Terraform (learning)",
      "Linux",
      "Git",
      "Nginx",
      "Networking",
    ],
  },
  {
    group: "Scripting & Automation",
    skills: ["Python", "Bash", "YAML", "Workflow Automation", "Monitoring Basics"],
  },
  {
    group: "Systems & Backend",
    skills: [
      "REST APIs",
      "Microservices",
      "Node.js",
      "Flask",
      "MySQL",
      "MongoDB",
      "Redis",
    ],
  },
  {
    group: "Languages",
    skills: ["Python", "Java", "JavaScript", "SQL", "C", "HTML", "CSS"],
  },
];
