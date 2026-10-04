import { Capability, CardProps, Certification, Experience, StackGroup } from "@/interfaces";

export const EMAIL = "supremeajala@gmail.com";

export const SOCIALS = [
  { label: "GitHub", href: "https://github.com/Dydex" },
  { label: "X / Twitter", href: "https://x.com/dp7954" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ajala-dolapo-756394281/" },
];

export const NAV_LINKS = [
  { label: "About", href: "/#about" },
  { label: "Work", href: "/#work" },
  { label: "Experience", href: "/#experience" },
  { label: "Toolkit", href: "/#toolkit" },
];

export const PROJECTSAMPLE: CardProps[] = [
  {
    name: "Mashanoch CBT",
    description: `A computer-based testing platform for Mashanoch Private Schools, letting students sit timed, automatically scored exams in the browser. Exams, questions, and results live in Supabase (PostgreSQL), with Supabase Auth keeping student and staff access separate. Built and shipped as the sole developer, working directly with school staff.`,
    image: "/images/mashanoch-cbt.png",
    url: "https://cbt.mashanochprivateschools.com/login",
    category: "School Exam Platform",
    platform: "Web",
    keyword: "EXAMINE",
    tags: ["Next.js", "TypeScript", "Supabase", "PostgreSQL"],
    featured: true,
  },
  {
    name: "Estate Homes",
    description: `EstateHomes is a property management app for landlords and property managers, pairing a React Native mobile app with an Express and PostgreSQL API. It tracks properties, units, and tenants, turns every lease into a rent payment schedule, and flags overdue payments, all behind JWT authentication with role-based access.`,
    image: "/images/estate-homes.png",
    url: "https://appetize.io/app/b_gltipn2425evdbjdvxle5rqfpi",
    category: "Property Management",
    platform: "Mobile",
    keyword: "MANAGE",
    tags: ["React Native", "Expo", "TypeScript", "Express", "PostgreSQL", "JWT"],
    featured: true,
  },
  {
    name: "Web3Unilag",
    description: `Web3Unilag is the official community platform for blockchain and crypto enthusiasts at the University of Lagos. The website showcases student testimonials, upcoming events, and curated learning resources all designed to inspire and educate members about Web3 technologies. It serves as a hub for collaboration, networking, and staying updated with the latest happenings in the decentralized ecosystem.`,
    image: "/images/web3unilag.png",
    url: "https://web3unilag.xyz",
    category: "Community Platform",
    platform: "Web",
    keyword: "CONNECT",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    featured: true,
  },
  {
    name: "Fed Vote",
    description: `A decentralized election protocol inspired by the Nigerian voting system, designed to work globally while preventing double voting and rewarding civic participation built fully on-chain on Hedera Testnet.`,
    image: "/images/fed-vote.png",
    url: "https://fed-vote.vercel.app/",
    category: "On-chain Elections",
    platform: "Web3",
    keyword: "VERIFY",
    tags: ["Solidity", "Hedera Hashgraph", "Ethers.js", "Next.js"],
    featured: true,
  },
  {
    name: "Scholar Chain",
    description: `A fully on-chain, decentralized grant distribution protocol built on Ethereum Sepolia Testnet. Bridges philanthropists, reviewers, and beneficiaries via trustless funding, verifiable achievements, and permanent on-chain recognition.`,
    image: "/images/scholar-chain.png",
    url: "https://scholar-chain.vercel.app/",
    category: "Grant Protocol",
    platform: "Web3",
    keyword: "FUND",
    tags: ["Solidity", "Ethereum", "Next.js", "Tailwind CSS"],
  },
  {
    name: "HazeHook",
    description: `HazeHook is a swap protocol built around a custom pool hook, live on Ethereum Sepolia. Each swap is checked against the deployed contract: small trades clear in a fast lane, while larger ones are routed through a commit/settle flow whose output is bounded by a VRF draw, with a refundable bond that stops spam requests to the randomness oracle.`,
    image: "/images/haze-hook.png",
    url: "https://haze-hook-4otm.vercel.app/swap",
    category: "DeFi Swap Hook",
    platform: "Web3",
    keyword: "PROTECT",
    tags: ["Solidity", "Ethereum", "VRF", "Next.js"],
  },
  {
    name: "Wrap Spotify",
    description: `Wrap Spotify is a secure and visually appealing companion app built with React Native and Expo that transforms your Spotify listening habits into interactive dashboards. It allows you to explore your top tracks, artists, albums, and genre trends across different time frames without waiting for the annual Spotify Wrapped release.`,
    image: "/images/wrap-spotify.png",
    url: "https://appetize.io/app/b_2jmekv4fnsac2zc23om6my4omi",
    category: "Music Analytics",
    platform: "Mobile",
    keyword: "REPLAY",
    tags: ["React Native", "Expo", "Spotify API", "TypeScript"],
  },
];

export const CAPABILITIES: Capability[] = [
  {
    kicker: "THE INTERFACE",
    title: "Frontend",
    description: "Clean, responsive interfaces with a strong eye for design and user experience.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    art: "frontend",
  },
  {
    kicker: "THE POCKET",
    title: "Mobile",
    description: "Cross-platform apps with React Native and Expo, from navigation to real-time data.",
    tags: ["React Native", "Expo", "Redux", "Supabase"],
    art: "mobile",
  },
  {
    kicker: "THE CHAIN",
    title: "Web3",
    description: "Secure, gas-aware Solidity contracts, wired into frontends people actually enjoy using.",
    tags: ["Solidity", "Foundry", "Hardhat", "Ethers.js"],
    art: "web3",
  },
  {
    kicker: "THE SYSTEM",
    title: "Backend",
    description: "REST APIs and data models that hold up, built on Node.js, Express, and PostgreSQL.",
    tags: ["Node.js", "Express", "PostgreSQL", "JWT"],
    art: "backend",
  },
];

export const EXPERIENCE: Experience[] = [
  {
    role: "Freelance Developer",
    company: "Mashanoch Private School",
    location: "Remote",
    date: "09/2026",
    bullets: [
      "Built a computer-based testing (CBT) platform with Next.js and TypeScript, allowing students to sit timed, automatically scored exams in the browser.",
      "Designed the exam, question, and result schema in Supabase (PostgreSQL) and used Supabase Auth to separate student and staff access.",
      "Worked directly with school staff as the sole developer, handling requirements, deployment, and iteration on their feedback.",
    ],
  },
  {
    role: "Open Source Contributor",
    company: "Stellar Drips Wave",
    location: "Remote",
    date: "03/2026",
    bullets: [
      "Contributed across multiple repositories, implementing and refining smart contract components as well as developing front-end integrations to improve functionality and user experience.",
      "Collaborated effectively within a distributed team environment, engaging in code reviews, debugging, and feature development, while contributing to discussions on protocol design, usability, and security.",
      "Enhanced proficiency in open-source collaboration, version control practices, and building scalable, secure blockchain applications.",
    ],
  },
  {
    role: "Solidity Developer Intern",
    company: "Web3bridge Africa",
    location: "On-site / Lagos",
    date: "01/2026 – 05/2026",
    bullets: [
      "Gained hands-on experience in smart contract development using Solidity, focusing on building secure, efficient, and scalable decentralized applications, with a strong understanding of Ethereum architecture, EVM, gas optimization, and security practices.",
      "Worked extensively with development tools such as Foundry and Hardhat for testing, deployment, debugging, and coverage analysis, applying both unit and integration testing techniques.",
      "Integrated smart contracts with React/Next.js frontend applications, handling wallet connections, transaction flows, and contract interaction using ethers.js.",
      "Analyzed contract attack surfaces and implemented secure patterns against common vulnerabilities (reentrancy, access control, DoS, unsafe external calls, signature replay).",
      "Explored upgradeable contract patterns, including Diamonds (EIP-2535 Diamond Standard), proxy designs, and modular protocol architectures.",
    ],
  },
  {
    role: "Frontend Engineer",
    company: "Web3Unilag",
    location: "Lagos",
    date: "10/2025 – Present",
    bullets: [
      "Voluntarily contributed to the Web3Unilag website, building responsive, accessible, and user-centric interfaces using React, implementing reusable UI components, and applying a scalable component architecture.",
      "Optimized page performance via lazy loading and efficient state management, improving load times across multiple devices and screen sizes.",
      "Collaborated closely with cross-functional team members to ensure seamless data flow, high responsiveness, and reliable functionality while actively debugging and optimizing UI/UX.",
    ],
  },
  {
    role: "Frontend Engineer Intern",
    company: "ALX",
    location: "Remote / Lagos",
    date: "07/2025 – 12/2025",
    bullets: [
      "Built and deployed responsive web applications using React and Next.js, and developed a mobile application using React Native, implementing navigation, state management, and Supabase integration (auth & real-time database).",
      "Engineered an Airbnb clone, building dynamic UI components, handling data fetching, managing application state, and designing modular UI components to improve scalability and reuse.",
      "Integrated RESTful APIs and managed asynchronous data flows with async/await, actively debugging and optimizing performance to improve responsiveness and page speed across different browsers.",
    ],
  },
];

export const CERTIFICATIONS: Certification[] = [
  { issuer: "ALX Academy", title: "Intro to Software Engineering" },
  { issuer: "ALX Academy", title: "ProDev Frontend" },
  { issuer: "ALX Academy", title: "Professional Foundations" },
  { issuer: "Web3bridge Africa", title: "Solidity Smart Contract Development" },
];

export const STACK: StackGroup[] = [
  {
    label: "Frontend",
    tools: ["Next.js", "React", "React Native", "JavaScript", "TypeScript", "Tailwind CSS", "Redux", "Expo"],
  },
  { label: "Backend", tools: ["Node.js", "Express", "PostgreSQL", "REST APIs", "JWT"] },
  { label: "Blockchain", tools: ["Solidity", "Hardhat", "Foundry", "Ethers.js", "Reown AppKit"] },
  { label: "Database", tools: ["Supabase", "PostgreSQL"] },
  { label: "Tools", tools: ["Git", "GitHub", "Vercel", "Postman"] },
];
