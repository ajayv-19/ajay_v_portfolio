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
  carrent,
  airobot,
  docconsult,
  threejs,
  whatsappUI,
  strokedetection,
  aquilasvm,
  robotpaper,
  springerpaper,
  hybridintrusion,
  ckd,
  ecological,
  neuralnetwork,
  sternblog,
  sternfellow,
  youtubeSummarization,
  rainPrediction,
  gadgetEase,
  workoutBuddyImage,
} from "../assets";

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
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactJS,
  },
  {
    name: "React Native",
    icon: reactnative,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Python",
    icon: python,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Campus Mesh",
    icon: backend,
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
    icon: creator,
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
    icon: comviva,
    iconBg: "#383E56",
    date: "Aug 2021 – Aug 2024",
    points: [
      "Developed a distributed backend on Microsoft Azure for a health platform, integrating with Microsoft CRM and implementing event-driven processing and fault tolerance.",
      "Led code reviews and mentored engineers on software design principles, reducing production bugs by 25%.",
      "Deployed an NLP-based OCR neural model on Azure to automate structured data extraction, reducing data processing time by 75%.",
      "Optimized data ingestion with parallel processing for 100K-row Excel files; reduced execution time from 5 hours to 1 hour.",
      "Built Power BI dashboards processing large datasets from multiple databases, improving reporting efficiency by 40%.",
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
    name: "Gadget Ease",
    description:
      "Gadget Ease is a cutting-edge ecommerce platform tailored for mobile phone enthusiasts, offering a seamless purchasing experience with customizable options.",
    tags: [
      { name: "mvc-architecture", color: "blue-text-gradient" },
      { name: "express.js", color: "green-text-gradient" },
      { name: "node.js", color: "pink-text-gradient" },
      { name: "mongodb", color: "orange-text-gradient" },
      { name: "socket.io", color: "blue-text-gradient" },
      { name: "twilio-api", color: "green-text-gradient" },
      { name: "paypal-integration", color: "pink-text-gradient" },
    ],
    image: gadgetEase,
    source_code_link: "https://github.com/MetunNivin/Gadgets_Ease-ecom",
    isFigma: false,
  },
  {
    name: "Rain in Australia - Next-Day Prediction Model",
    description:
      "Developed a machine learning model to predict next-day rainfall in Australia using PySpark, Apache Spark MLlib, and XGBoost. Processed 10+ years of meteorological data (~10M records), applying feature engineering on key weather attributes like temperature, humidity, and wind speed. Optimized performance with hyperparameter tuning and MLflow for tracking, enhancing accuracy and efficiency.",
    tags: [
      { name: "pyspark", color: "blue-text-gradient" },
      { name: "xgboost", color: "green-text-gradient" },
      { name: "big-data", color: "pink-text-gradient" },
      { name: "mlflow", color: "orange-text-gradient" },
    ],
    image: rainPrediction,
    source_code_link: "https://github.com/MetunNivin/Weather_Prediction",
    isFigma: false,
  },
  {
    name: "Retrieval-Augmented LLM Summarization & Transcription Engine for YouTube",
    description:
      "Developed an advanced AI-powered transcription and summarization engine for YouTube videos using Llama 2, Whisper ASR, and Haystack. Optimized inference pipelines to enhance performance and reduce GPU dependency.",
    tags: [
      { name: "llama2", color: "blue-text-gradient" },
      { name: "haystack", color: "green-text-gradient" },
      { name: "whisper-asr", color: "pink-text-gradient" },
      { name: "fastapi", color: "orange-text-gradient" },
    ],
    image: youtubeSummarization,
    source_code_link:
      "https://github.com/MetunNivin/Retrieval-Augmented-LLM-Summarization-Transcription-Engine-for-YouTube",
    isFigma: false,
  },
  {
    name: "Workout Buddy",
    description:
      "Workout Buddy is a fitness platform designed to help users discover exercises for every body part. Built using React and Rapid API, it offers a user-friendly interface to explore, filter, and sort exercises based on body parts, equipment, and difficulty levels.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "material-ui", color: "green-text-gradient" },
      { name: "rapid-api", color: "pink-text-gradient" },
    ],
    image: workoutBuddyImage, 
    source_code_link: "https://github.com/MetunNivin/Workout_buddy",
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
    source_code_link: "https://github.com/MetunNivin/MediConsult",
    isFigma: false,
  },
  {
    name: "MediBot: AI-Driven Medication Delivery Bot",
    description:
      "Secured funding from KSCST, ranking among the top 130 national projects. Developed an AI-powered medical robot with a dual-algorithm framework for accurate patient face recognition and advanced navigation. Achieved 95% navigation accuracy, 98% medicine dispensing accuracy, and zero safety incidents in real-world trials.",
    tags: [
      { name: "robotics", color: "blue-text-gradient" },
      { name: "deep-learning", color: "green-text-gradient" },
      { name: "computer-vision", color: "pink-text-gradient" },
    ],
    image: airobot,
    publication_link: "https://ieeexplore.ieee.org/document/10592899",
    // source_code_link: "https://github.com/MetunNivin",
    isFigma: false,
  },
  {
    name: "Smart IoT Object Detection Accelerator",
    description:
      "Designed a cross-deep learning model integrating CNNs and the MKM algorithm to optimize energy-efficient cluster formation in MEC. Achieved 98.7 fps real-time object detection on ZC702 with an 11.25x reduction in energy consumption. Implemented a high-performance data architecture using InfluxDB for efficient IoT data processing in constrained environments.",
    tags: [
      { name: "iot", color: "blue-text-gradient" },
      { name: "cnn", color: "green-text-gradient" },
      { name: "edge-computing", color: "pink-text-gradient" },
    ],
    image: carrent,
    publication_link: "https://acrobat.adobe.com/id/urn:aaid:sc:AP:2e5259b9-680e-4fde-8e51-9a60455540ff",
    // source_code_link: "https://github.com/MetunNivin",
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
      "Lightweight Deep Learning Accelerators for Real-Time Object Detection in Resource-Constrained IoT Devices",
    journal: "Springer - Accepted",
    link: "https://acrobat.adobe.com/id/urn:aaid:sc:AP:2e5259b9-680e-4fde-8e51-9a60455540ff",
    image: springerpaper,
  },
  {
    title:
      "Enhanced EEG Emotion Recognition through Hybrid STANN-3DCANN Deep Architectures",
    journal: "IJCRT",
    link: "https://www.ijcrt.org/papers/IJCRT2401111.pdf",
    image: neuralnetwork,
  },
  {
    title:
      "Hybrid Features-Based Intrusion Detection for the Internet of Vehicles using Dynamic Adaptation",
    journal: "IJRASET",
    link: "https://www.ijraset.com/best-journal/hybrid-featuresbased-intrusion-detection-for-the-internet-of-vehicles-using-dynamic-adaptation",
    image: hybridintrusion,
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
      "Advances in Ecological Surveillance: Real-Time Wildlife Detection using MobileNet-SSD V2 CNN",
    journal: "IJRASET",
    link: "https://www.ijraset.com/best-journal/advances-in-ecological-surveillance-realtime-wildlife-detection-using-mobilenetssd-v2-convolutional-neural-network",
    image: ecological,
  },
];

export const featured = [
  {
    title: "Stern Venture Fellows Blog",
    image: sternblog,
    links: [
      {
        url: "https://nyusternberkleycenter.com/2024/07/summer-coming-to-a-close-with-metun-nivin-of-firebeats/",
      },
    ],
  },
  {
    title: "Metun Nivin on FireBeats",
    image: sternfellow,
    links: [
      {
        url: "https://www.sternventurefellows.com/2024-fellows",
      },
    ],
  },
];

export default projects;

export { services, technologies, experiences, testimonials, projects };
