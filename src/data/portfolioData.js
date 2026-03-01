import { Code2, Briefcase, Users, Award, Sparkles, Star, ExternalLink } from 'lucide-react';
import gwalior from "../assets/images/gwaliorsmartcity.png";
import bogo from "../assets/images/1onus.png";
import hyprlinc from "../assets/images/hyprlinc.png";

export const projectsData = [
    {
        id: 1,
        title: "Gwalior Municipal Corporation",
        description: "Municipal Corporation Website for Gwalior City",
        tech: ["React", "Node.js", "PostgreSQL"],
        image: gwalior,
        github: "https://github.com/harshpathak0",
        live: "https://gwaliormunicipalcorporation.org/",
        category: "web"
    },
    {
        id: 2,
        title: "1onus|Bogo App",
        description: "Bogo App for 1onus",
        tech: ["Flutter", "Firebase", "Node.js", "Express", "MongoDB", "AWS"],
        image: bogo,
        github: "https://github.com/harshpathak0",
        live: "https://1onus.com/",
        category: "mobile"
    },
    {
        id: 3,
        title: "Hyprlinc",
        description: "Influencer Brand Collaboration Platform",
        tech: ["React.js", "Node.js", "Express", "socket.io", "PostgreSQL", "AWS", "Tailwind"],
        image: hyprlinc,
        github: "https://github.com/harshpathak0",
        live: "https://hyprlinc.com/",
        category: "web"
    },
    // {
    //     id: 4,
    //     title: "Health & Wellness AI",
    //     description: "Personalized fitness and nutrition planner powered by AI recommendations. Achieve your wellness goals smarter.",
    //     tech: ["Python", "FastAPI", "React", "PostgreSQL"],
    //     image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    //     github: "https://github.com",
    //     live: "https://example.com",
    //     category: "ai",
    //     stats: { views: "1.8K", likes: "156", comments: "34" }
    // },
    // {
    //     id: 5,
    //     title: "Crypto Portfolio Tracker",
    //     description: "Real-time cryptocurrency tracking with portfolio management, market insights, and DeFi integration.",
    //     tech: ["react.js", "electron.js", "Express", "node.js", "postgresql"],
    //     image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    //     github: "https://github.com",
    //     live: "https://example.com",
    //     category: "web3",
    //     stats: { views: "2.9K", likes: "223", comments: "56" }
    // },
    // {
    //     id: 6,
    //     title: "Smart Home Controller",
    //     description: "IoT dashboard for smart home devices with automation rules, energy monitoring, and voice control.",
    //     tech: ["React", "Node-RED", "MQTT", "Chart.js"],
    //     image: "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    //     github: "https://github.com",
    //     live: "https://example.com",
    //     category: "iot",
    //     stats: { views: "1.5K", likes: "134", comments: "28" }
    // }
];

export const statsData = [
    { icon: Briefcase, value: "6+", label: "Projects Completed" },
    { icon: Users, value: "15+", label: "Happy Clients" },
    { icon: Award, value: "3", label: "Awards Won" },
    { icon: Code2, value: "10K+", label: "Lines of Code" }
];

export const categoriesData = [
    { id: 'all', label: 'All Projects', icon: Sparkles },
    { id: 'web', label: 'Web Apps', icon: Code2 },
    { id: 'mobile', label: 'Mobile', icon: Briefcase },
    // { id: 'ai', label: 'AI/ML', icon: Star },
    // { id: 'web3', label: 'Web3', icon: ExternalLink },
    // { id: 'iot', label: 'IoT', icon: Users }
];
