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
    name: "Vouccom",
    description: `Vouccom is a cross-platform mobile app that makes high-value assets accessible through a participation-based ownership model, starting with vehicles. Built with React Native and Expo from Figma designs, with 50+ screens, light and dark themes, and REST API integration with the backend.`,
    image: "/images/vouccom.png",
    url: "https://appetize.io/app/b_7csa43gfygx5dmyw6dllqbn73e",
    category: "Asset Ownership",
    platform: "Mobile",
    keyword: "OWN",
    tags: ["React Native", "Expo", "TypeScript", "REST APIs"],
    featured: true,
  },
  {
    name: "Mashanoch CBT",
    description: `A computer-based testing platform for Mashanoch Private Schools, letting students sit timed, automatically scored exams in the browser. Exams, questions, and results live in Supabase (PostgreSQL), with Supabase Auth keeping student and staff access separate. Used by 100+ students, with role-based dashboards for students, teachers and admins and instant automated grading that replaces paper tests and manual marking.`,
    image: "/images/mashanoch-cbt.png",
    url: "https://cbt.mashanochprivateschools.com/login",
    category: "School Exam Platform",
    platform: "Web",
    keyword: "EXAMINE",
    tags: ["Next.js", "TypeScript", "Supabase", "PostgreSQL"],
    featured: true,
  },
  {
    name: "HazeHook",
    description: `HazeHook is a Uniswap v4 hook, live on Ethereum Sepolia, built during the Atrium Academy Uniswap Hook Incubator. High-impact swaps go through a commit/settle flow capped at one of five Chainlink VRF price limits drawn after commitment, so attackers cannot predict how much room a swap leaves to sandwich. Part of the premium on protected trades flows back to liquidity providers, and a refundable bond stops spam requests to the randomness oracle.`,
    image: "/images/haze-hook.png",
    url: "https://haze-hook-4otm.vercel.app/swap",
    category: "DeFi Swap Hook",
    platform: "Web3",
    keyword: "PROTECT",
    tags: ["Solidity", "Foundry", "Uniswap v4", "Chainlink VRF", "Next.js"],
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
    description: "REST APIs and data models that hold up, built on Node.js, Express, and Supabase.",
    tags: ["Node.js", "Express", "Supabase", "PostgreSQL"],
    art: "backend",
  },
];

export const EXPERIENCE: Experience[] = [
  {
    role: "React Native Developer",
    company: "Vouccom",
    location: "Contract · Remote",
    date: "10/2026 – Present",
    bullets: [
      "Building a cross-platform mobile app with React Native and Expo for Vouccom, a platform that makes high-value assets accessible through a participation-based ownership model, starting with vehicles.",
      "Implementing 50+ screens from Figma designs with light and dark themes, and connecting them to backend services through REST APIs.",
    ],
  },
  {
    role: "Software Developer",
    company: "Mashanoch Private Schools",
    location: "Contract · Remote, Lagos",
    date: "08/2026 – 09/2026",
    bullets: [
      "Built and launched a computer-based testing platform with Next.js and Supabase, used by 100+ students and replacing paper tests and manual marking.",
      "Created role-based dashboards for students, teachers and admins, with Supabase Auth login and admin management of staff and student records.",
      "Automated grading to give instant results, removing manual marking and the need for admins to revise test questions.",
    ],
  },
  {
    role: "Uniswap Hook Incubator Fellow",
    company: "Atrium Academy",
    location: "Remote",
    date: "07/2026 – 08/2026",
    bullets: [
      "Built Haze, a Uniswap v4 hook that routes high-impact swaps through a commit/settle flow. Execution is capped at one of five Chainlink VRF price limits drawn after commitment, so attackers cannot predict how much room a swap leaves to sandwich.",
      "Designed a fee model that returns part of the premium on protected trades to liquidity providers, so the riskiest swaps contribute most to liquidity.",
      "Developed and tested the hook in Solidity with Foundry and shipped a Next.js frontend.",
    ],
  },
  {
    role: "Solidity Developer Intern",
    company: "Web3bridge Africa",
    location: "Lagos, Nigeria",
    date: "01/2026 – 05/2026",
    bullets: [
      "Built full-stack dApps connecting Solidity contracts to React and Next.js frontends with ethers.js, including wallet connection, transaction handling and on-chain data fetching.",
      "Wrote unit and integration tests with Foundry and Hardhat, using coverage analysis to verify contract behavior before deployment.",
      "Implemented upgradeable contract architecture with the EIP-2535 Diamond Standard and proxy patterns, applying defenses against reentrancy and access control flaws.",
    ],
  },
  {
    role: "Open Source Maintainer & Contributor",
    company: "Stellar Drips Wave",
    location: "Remote",
    date: "03/2026",
    bullets: [
      "Maintain an open-source project: define and assign issues to contributors, and answer their questions on scope and requirements.",
      "Review contributors' pull requests for correctness and code quality, request changes where needed and merge approved work.",
      "Shipped smart contract and frontend features across multiple repositories through pull requests and code reviews.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Web3Unilag",
    location: "Lagos, Nigeria",
    date: "10/2025 – Present",
    bullets: [
      "Develop and maintain the Web3Unilag website in React, delivering responsive, accessible interfaces across desktop and mobile.",
      "Work with cross-functional teammates on debugging, performance and UI/UX improvements for a stable production site.",
    ],
  },
  {
    role: "Frontend Engineer Intern",
    company: "ALX Africa",
    location: "Remote",
    date: "07/2025 – 12/2025",
    bullets: [
      "Built and deployed responsive web apps with React, Next.js and TypeScript, consuming RESTful APIs with async data handling.",
      "Developed a cross-platform React Native app with navigation, state management and Supabase for authentication and real-time data.",
      "Improved load times and responsiveness through lazy loading and modular, reusable components.",
    ],
  },
];

export const CERTIFICATIONS: Certification[] = [
  { issuer: "ALX Academy", title: "Intro to Software Engineering" },
  { issuer: "ALX Africa", title: "Professional Certificate, Frontend Engineering" },
  { issuer: "ALX Academy", title: "Professional Foundations" },
  { issuer: "Web3bridge Africa", title: "Blockchain Development (Solidity)" },
];

export const STACK: StackGroup[] = [
  {
    label: "Frontend",
    tools: ["Next.js", "React", "JavaScript", "TypeScript", "Tailwind CSS", "Redux"],
  },
  { label: "Mobile", tools: ["React Native", "Expo", "REST API Integration"] },
  { label: "Backend", tools: ["Node.js", "Express", "Supabase Auth", "PostgreSQL", "REST APIs", "JWT"] },
  {
    label: "Web3",
    tools: ["Solidity", "Foundry", "Hardhat", "Ethers.js", "EIP-2535 Diamond", "Uniswap v4 Hooks", "Chainlink VRF"],
  },
  { label: "AI", tools: ["AI-assisted development", "AI + Web3 integration"] },
  { label: "Tools", tools: ["Git", "GitHub", "Vercel", "Unit & Integration Testing", "Code Review"] },
];
