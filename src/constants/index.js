import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactJS,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  reactnative,
  python,
  nyu,
  firebeats,
  comviva,
  cognizant,
  airobot,
  docconsult,
  threejs,
  whatsappUI,
  strokedetection,
  aquilasvm,
  robotpaper,
  ckd,
  automatedImage,
  youtubeSummarization,
  rainPrediction,
  gadgetEase,
  workoutBuddyImage,
  aws,
  azure,
  javaTech,
  restapi,
  langchain,
  lld,
  campusmeshLogo,
  amazonLogo,
  pwcLogo,
  certAws,
  certPython,
  certMachineLearning,
  certAzureFundamentals,
  certPowerBI,
  certAzureDataScientist,
  certPL400,
  certSolutionArchitect,
  certJava,
  expenseTracker,
  cancerProject,
  flightProject,
} from "../assets";

const CERTIFICATES_DRIVE_FOLDER = "https://drive.google.com/drive/folders/1-Jvfb8c76gi73qbyc3Fq5TI-T0iq_uL_";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "tech",
    title: "Tech Stacks",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "publications",
    title: "Publications",
  },
  {
    id: "certificates",
    title: "Certificates",
  },
  {
    id: "contact",
    title: "Hire Me",
  },
];

const services = [
  {
    title: "Backend & Microservices",
    icon: backend,
  },
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Cloud & DevOps",
    icon: docker,
  },
  {
    title: "AI/ML & Data",
    icon: creator,
  },
];

const technologies = [
  { name: "Java", icon: javaTech },
  { name: "Python", icon: python },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "React", icon: reactJS },
  { name: "React Native", icon: reactnative },
  { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node.js", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "REST APIs", icon: restapi },
  { name: "AWS", icon: aws },
  { name: "Azure", icon: azure },
  { name: "LangChain", icon: langchain },
  { name: "System Design / LLD", icon: lld },
  { name: "Three.js", icon: threejs },
  { name: "Git", icon: git },
  { name: "Figma", icon: figma },
  { name: "Docker", icon: docker },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Campus Mesh",
    icon: campusmeshLogo,
    iconBg: "#E6DEDD",
    date: "Jan 2025 – Present",
    points: [
      "Developed and maintained scalable Node.js microservices powering real-time academic workflows for 10K+ users, including study groups, messaging, notifications, and profile management.",
      "Built a personalized recommendation engine using collaborative filtering and behavioral analytics, increasing user engagement by 28% and retention by 50%.",
      "Authored LLM-based retrieval pipelines for CampusIQ (AI Assistant), improving contextual accuracy by 30% through semantic retrieval and structured data indexing.",
    ],
  },
  {
    title: "Software Development Engineer Intern",
    company_name: "Amazon",
    icon: amazonLogo,
    iconBg: "#383E56",
    date: "May 2025 – Aug 2025",
    points: [
      "Architected a secure UI console for Amazon fulfillment center teams to view image/video evidence across FCs; presented the system design for approval and established Role Based Access (4+ roles) using OAuth, Midway SSO, and HELIS.",
      "Provisioned serverless Infrastructure-as-Code using AWS CDK with API Gateway, Lambda, DynamoDB, S3, and IAM, reducing provisioning time by 70% and enabling multi-stage, multi-region CI/CD deployments.",
      "Built a React 18 frontend with optimized API integration, advanced filtering, and client-side caching, reducing page load time by 40%.",
      "Engineered backend services in Java using Coral, Smithy, Dagger, and CBOR serialization; applied low-level design and design patterns, reducing backend execution time by 35% with unit and integration testing using Mockito.",
    ],
  },
  {
    title: "Software Developer (On-Campus)",
    company_name: "New York University (Novel AI Technologies, Inc.)",
    icon: nyu,
    iconBg: "#E6DEDD",
    date: "Aug 2024 – Present",
    points: [
      "Architected an NSF-funded ($100K) AI-powered health app for iOS and Android, processing real-time wearable data; deployed cloud-hosted AI models for health metrics analysis and food image processing.",
      "Engineered ETL pipelines transforming NoSQL into PostgreSQL using concurrency control and locking mechanisms; processed 250K+ records and powered AWS QuickSight dashboards for real-time health analytics.",
      "Developed an insurance analytics platform (React, Node.js, REST APIs); deployed Docker containers on EC2, implemented Stripe billing, RBAC, and row-level security, generating $50K+ revenue.",
      "Streamlined underwriting via broker portal integrated with insurer platform; implemented document and media processing and WebSocket-based real-time communication; secured 6 insurance clients.",
    ],
    links: [
      { text: "MyBeats Health", url: "https://mybeatshealth.com/home" },
      { text: "Broker Portal", url: "https://broker.mybeatshealth.com/" },
    ],
  },
  {
    title: "Senior Software Engineer",
    company_name: "PricewaterhouseCoopers (PwC)",
    icon: pwcLogo,
    iconBg: "#383E56",
    date: "Aug 2021 – Aug 2024",
    points: [
      "Developed a distributed backend on Microsoft Azure for a health platform, integrating with Microsoft CRM and implementing event-driven processing and fault tolerance.",
      "Led code reviews and mentored engineers on software design principles, reducing production bugs by 25%.",
      "Deployed an NLP-based OCR neural model on Azure to automate structured data extraction, reducing data processing time by 75%.",
      "Optimized data ingestion with parallel processing for 100K-row Excel files; reduced execution time from 5 hours to 1 hour.",
      "Built Power BI dashboards processing large datasets from multiple databases, improving reporting efficiency by 40%.",
    ],
    links: [
      { text: "Employment Verification Letter", url: CERTIFICATES_DRIVE_FOLDER },
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Advanced Expense Tracker (Java)",
    description:
      "Desktop expense tracker built with Java and JavaFX. Log and organize daily expenses, manage shared/group spending, and split costs cleanly between people, all with clear visual summaries powered by JFreeChart. Clean client–server separation and a modern UI for actionable insights into day-to-day spending.",
    tags: [
      { name: "java", color: "blue-text-gradient" },
      { name: "javafx", color: "green-text-gradient" },
      { name: "sqlite", color: "pink-text-gradient" },
      { name: "jfreechart", color: "orange-text-gradient" },
    ],
    image: expenseTracker,
    source_code_link: "https://github.com/ajayv-19/advavanced_expense_tracker_java",
    isFigma: false,
  },
  {
    name: "ALIVE: Cancer Prevention Training",
    description:
      "Web-based training app for firefighter cancer awareness, combining interactive digital resources, quizzes, and multimedia scenarios to teach how to recognize and reduce occupational cancer risks.",
    tags: [
      { name: "html5", color: "blue-text-gradient" },
      { name: "css3", color: "green-text-gradient" },
      { name: "javascript", color: "pink-text-gradient" },
      { name: "php", color: "orange-text-gradient" },
    ],
    image: cancerProject,
    source_code_link: "https://github.com/ajayv-19/alive-cancer",
    isFigma: false,
  },
  {
    name: "Flight Delay Prediction (Big Data)",
    description:
      "Big data pipeline to predict US flight delays using 2024 BTS data. Uses Hadoop HDFS for distributed storage, PySpark and Spark SQL for cleaning and feature engineering, and MLlib models to classify delay severity with rich visualizations in Seaborn, Matplotlib, and Plotly.",
    tags: [
      { name: "pyspark", color: "blue-text-gradient" },
      { name: "hadoop", color: "green-text-gradient" },
      { name: "spark-sql", color: "pink-text-gradient" },
      { name: "mllib", color: "orange-text-gradient" },
    ],
    image: flightProject,
    source_code_link: "https://github.com/ajayvenkatesh19/flight-delay-2024",
    isFigma: false,
  },
  {
    name: "Quick Consult: Doctor Appointment App",
    description:
      "Developed a React Native doctor appointment app with Expo, providing seamless booking and consultation experiences for both iOS and Android users. Integrated Firebase authentication for secure sign-ins, Strapi for backend management, and Google Cloud Vision API for OCR-based prescription analysis.",
    tags: [
      { name: "react-native", color: "blue-text-gradient" },
      { name: "firebase", color: "green-text-gradient" },
      { name: "google-cloud-vision", color: "pink-text-gradient" },
    ],
    image: docconsult,
    source_code_link: "https://github.com/ajayv-19/doctor_management/tree/main",
    isFigma: false,
  },
  {
    name: "WhatsApp UI Enhancement Prototype",
    description:
      "Designed a Figma prototype to enhance WhatsApp’s UI and introduce new features including multi-account switching, scheduled messaging, and expanded group video calls. Addressed major usability constraints by implementing seamless transitions and improved user experience flows.",
    tags: [
      { name: "figma", color: "blue-text-gradient" },
      { name: "ux/ui", color: "green-text-gradient" },
      { name: "prototyping", color: "pink-text-gradient" },
    ],
    image: whatsappUI,
    source_code_link:
      "https://www.figma.com/design/g90Vaf1IFOkSh4vgNYDW7L/24?node-id=0-1&t=kWQmU9GZTPlLuGqk-1",
    isFigma: true,
  },
];

export const publications = [
  {
    title:
      "Supervised Machine Learning System Based Stroke Detection Using Deep Learning Techniques",
    journal: "IEEE ICDCECE",
    link: "https://ieeexplore.ieee.org/document/9792818",
    image: strokedetection,
  },
  {
    title: "An Aquila-optimized SVM classifier for Diabetes prediction",
    journal: "IEEE AIDE",
    link: "https://ieeexplore.ieee.org/document/10060334",
    image: aquilasvm,
  },
  {
    title:
      "AI-Enhanced Personal Care Robot Assistant for Hospital Medication Delivery",
    journal: "IEEE 5th INCET 2024",
    link: "https://ieeexplore.ieee.org/document/10592899",
    image: robotpaper,
  },
  {
    title:
      "Predictive Analysis in Nephrology: Evaluating Machine Learning Models for Chronic Kidney Disease Prediction",
    journal: "IJRASET",
    link: "https://www.ijraset.com/best-journal/predictive-analysis-in-nephrology-evaluating-machine-learning-models-for-chronic-kidney-disease-prediction",
    image: ckd,
  },
  {
    title:
      "Automated Image Labelling Using Active Learning and Transfer Learning Techniques",
    journal: "IJARESM",
    link: "https://www.ijaresm.com/uploaded_files/document_file/Madhuvanthi_S,,,ZB0d.pdf",
    image: automatedImage,
  },
];

export const certificates = [
  { title: "AWS Certified Cloud Practitioner", link: "https://drive.google.com/file/d/1a3exoiS79RS3q8vSJHT-PpkczSPg54EZ/view", image: certAws },
  { title: "Microsoft Certified: Azure Data Scientist Associate", link: "https://drive.google.com/file/d/1IDtiC9HSlFDAWIEs3UvDjSLfHvI_8iSu/view", image: certAzureDataScientist },
  { title: "Microsoft Certified: Azure Data Fundamentals", link: "https://drive.google.com/file/d/1VBJjfRMsIm8BckoUtLUV7ZbY88Jju2qT/view", image: certAzureFundamentals },
  { title: "NPTEL (IIT): Programming in Java", link: "https://drive.google.com/file/d/13Md8DvOfFVlsNgUzlB2U4A-y-eVglcbM/view", image: certJava },
  { title: "NPTEL (IIT): Programming, Data Structures and Algorithms Using Python", link: "https://drive.google.com/file/d/1RDLhYHN73sEGvajt0HxQuAKzSLmdNvRz/view", image: certPython },
  { title: "Stanford Online / Coursera: Machine Learning", link: "https://drive.google.com/file/d/1At3BLkqJ9vuhPPUCcrNAw9yNH5li7XdQ/view", image: certMachineLearning },
  { title: "Microsoft Certified: Power Platform Solution Architect Expert", link: "https://drive.google.com/file/d/1FCrObY9o2Jr3vfk_EttcIbOYrUey55NU/view", image: certSolutionArchitect },
  { title: "Microsoft Certified: Power BI Data Analyst Associate", link: "https://drive.google.com/file/d/1XaffZ7Grnmp8K8dwTcZymsE-HYHMuM-U/view", image: certPowerBI },
  { title: "Microsoft Certified: Power Platform Developer Associate", link: "https://drive.google.com/file/d/1m-RZVaeo78cn2RUUctiKuqbV9F7i1tTx/view", image: certPL400 },
];

export default projects;

export { services, technologies, experiences, testimonials, projects };
