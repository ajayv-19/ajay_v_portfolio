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
  sternfellow
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "AI/ML Researcher",
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
    title: "Lead AI & Software Developer",
    company_name: "FireBeats, NYU",
    icon: nyu,
    iconBg: "#E6DEDD",
    date: "Feb 2024 - Present",
    points: [
      "Led the development of FireBeats, an AI-driven remote health monitoring app for firefighters, analyzing real-time physiological data to assess cardiovascular risks.",
      "Built a companion mobile app using React Native, Firebase, and AWS, enabling real-time health monitoring, push notifications, and seamless user authentication.",
      "Secured $110,000 in non-equity funding, advancing to the NYU-Berkley Entrepreneurship Challenge semifinals and NYU Stern accelerator program.",
      "Integrated data from Fitbit, Garmin, Google-Fit, and Apple-HealthKit, streamlining data through GCP Functions to trigger AI models on VertexAI, achieving over 95% accuracy in detecting atrial fibrillation, hypertension, and sleep apnea.",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "Berkley Center for Entrepreneurship",
    icon: firebeats,
    iconBg: "#383E56",
    date: "Jun 2024 – Aug 2024",
    points: [
      "Built MyBeats, a FireBeats-integrated doctor-patient platform, designing a scalable AWS backend for appointment booking and virtual consultations.",
      "Integrated LSTM for predictive analytics, S3 for image uploads, Sentry for error tracking, and Stripe for secure transactions within a React Native app.",
      "Optimized Redux state management and Google Maps integration, reducing API latency by 30% and improving cross-platform performance on iOS and Android.",
    ],
    links: [
      {
        text: "Stern Venture Fellows Blog",
        url: "https://www.sternventurefellows.com/2024-fellows",
      },
      {
        text: "Metun Nivin on FireBeats",
        url: "https://nyusternberkleycenter.com/2024/07/summer-coming-to-a-close-with-metun-nivin-of-firebeats/",
      },
    ],
  },
  {
    title: "Front-end Software Development Engineer",
    company_name: "Comviva",
    icon: comviva,
    iconBg: "#E6DEDD",
    date: "Jun 2022 – Aug 2023",
    points: [
      "Led front-end development for the TCP project using Angular, TypeScript, HTML5, and CSS3, enhancing user interface and functionality.",
      "Integrated Java and SQL backend, improving performance by 30% and achieving 99.9% uptime stability.",
      "Executed API testing in card management/payments using Postman, ensuring 98% transaction processing reliability.",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "Cognizant",
    icon: cognizant,
    iconBg: "#383E56",
    date: "Mar 2022 – Jun 2022",
    points: [
      "Developed a secure online banking platform using Java Swings, SQL, and Apache Server, incorporating encrypted authentication and unique ID generation.",
      "Implemented encrypted PIN verification, increasing user engagement by 40% through secure money transfers and bill payments.",
      "Developed a real-time mini-statement feature, enabling users to instantly access their transaction history.",
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
    name: "Quick Consult: Doctor Appointment App",
    description:
      "Developed a React Native doctor appointment app with Expo, providing seamless booking and consultation experiences for both iOS and Android users. Integrated Firebase authentication for secure sign-ins, Strapi for backend management, and Google Cloud Vision API for OCR-based prescription analysis.",
    tags: [
      { name: "react-native", color: "blue-text-gradient" },
      { name: "firebase", color: "green-text-gradient" },
      { name: "google-cloud-vision", color: "pink-text-gradient" },
    ],
    image: docconsult,
    // source_code_link: "https://github.com/MetunNivin",
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
