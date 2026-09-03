export const personalInfo = {
  name: "Muhammad Farhan",
  title: "Full-Stack Software Engineer",
  location: "Sahiwal, Punjab, Pakistan",
  bio: "I architect and build scalable, decoupled web applications. With a strong focus on system resilience, advanced data integrations, and clean code, I transform complex technical challenges into robust, production-ready solutions.",
  github: "https://github.com/Farhan0614",
  linkedin: "https://linkedin.com/in/muhammad-farhan-web-dev",
  email: "farhanmirza0614@gmail.com",
  cvUrl: "/cv/Muhammad_Farhan_CV.pdf",
};

export const skills = {
  frontend: ["Next.js", "React", "Tailwind CSS"],
  backend: ["Node.js", "Express.js", "REST APIs"],
  database: ["MongoDB", "Mongoose", "Supabase"],
  engineering: [
    "Git/GitHub",
    "Software Quality Engineering",
    "JUnit",
    "Boundary Value Analysis",
  ],
  additional: ["Python", "scikit-learn", "Data Analysis (NumPy)", "OpenCV"],
};

export const projects = [
  {
    id: "spendsignature",
    title: "SpendSignature",
    description:
      "A comprehensive web-based financial management platform featuring expense tracking, subscription control, and automated PDF reporting. Engineered a machine learning backend to provide financial forecasting(min 2-3 month data required) and anomaly detection.",
    techStack: [
      "React",
      "Tailwind CSS",
      "Supabase",
      "Flask",
      "scikit-learn",
      "Forest Isolation",
      "Python",
    ],
    image: "/img/spendsignature-mockup.png", // We will add placeholders later
    liveLink: "https://spendsignature.vercel.app/",
    githubLink: "https://github.com/Farhan0614/SpendSignature",
  },
  {
    id: "natours",
    title: "Natours Architecture",
    description:
      "A decoupled, full-stack tour-booking application with a Next.js server-rendered frontend and a custom Node.js/Express + MongoDB backend, featuring complete JWT cookie-based auth, REST APIs for tours/users/reviews/bookings, Stripe integration, and file uploads.",
    techStack: [
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT Auth",
    ],
    image: "/img/natours-mockup.png", // add this asset later
    liveLink: "",
    githubLink: "https://github.com/Farhan0614/natours-client",
    sourceBackend: "https://github.com/Farhan0614/natours-api",
  },
];

export const services = [
  {
    id: "full-stack",
    title: "Full-Stack Web Development",
    description:
      "Building responsive, highly optimized, and decoupled web applications using Next.js and React on the frontend, powered by resilient Node.js backends.",
    icon: "MonitorSmartphone", // We will map these in the component
  },
  {
    id: "api-architecture",
    title: "API Design & Architecture",
    description:
      "Developing secure, scalable RESTful APIs with Express, integrating complex databases (MongoDB, Supabase), and implementing strict JWT authentication flows.",
    icon: "Network",
  },
  {
    id: "data-ml",
    title: "Data & ML Integration",
    description:
      "Leveraging Python, scikit-learn, and data analysis libraries to integrate advanced features like financial forecasting and anomaly detection into web platforms.",
    icon: "BrainCircuit",
  },
  {
    id: "quality-engineering",
    title: "Software Quality Engineering",
    description:
      "Ensuring application reliability and fault tolerance through rigorous testing methodologies, including unit testing and Boundary Value Analysis.",
    icon: "ShieldCheck",
  },
];
