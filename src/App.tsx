/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  Briefcase,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Facebook,
  Twitter,
  MessageSquare,
  Sun,
  Moon,
  Eye,
  Download,
  Wrench,
  UserCheck,
  FolderGit2,
  Award,
  GraduationCap,
  Sparkles,
  Zap,
  CheckCircle2,
  FileText,
  Copy,
  ChevronRight,
  Send,
  X,
  Code2,
  BarChart3,
  TestTube2,
  Printer,
  Sliders,
  Check,
  Target,
  Layers,
  Settings,
  Flame,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

// Contact and Profile constants
const PROFILE = {
  name: "Muhammed Salah Uddin (Azad)",
  role: "SQA Engineer & Data Analyst",
  subRole: "Manager at AJM Artificial | CSE Graduate",
  currentCompany: "AJM Artificial",
  workingAt: "Manager At AJM Artificial",
  email: "salahuddinazad01631@gmail.com",
  phone: "+880 1305-430838",
  location: "Mirpur, Dhaka, Bangladesh",
  education: {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "Green University of Bangladesh",
    focus: "Software Engineering, Database Systems (MySQL), Data Structures & Analysis"
  },
  socials: {
    linkedin: "https://www.linkedin.com/in/salahuddinazad",
    github: "https://github.com/salahuddinazad",
    facebook: "https://www.facebook.com/salahuddinazad",
    whatsapp: "https://wa.me/8801305430838",
    twitter: "https://twitter.com/salahuddinazad"
  }
};

// Profile photo slider images
const PROFILE_PHOTOS = [
  {
    id: 'photo-1',
    src: '/images/azad1.jpg',
    alt: 'Muhammed Salah Uddin (Azad) - Professional Portrait'
  },
  {
    id: 'photo-2',
    src: '/images/azad2.jpg',
    alt: 'Muhammed Salah Uddin (Azad) - Formal Portrait'
  },
  {
    id: 'photo-3',
    src: '/images/azad3.jpg',
    alt: 'Muhammed Salah Uddin (Azad) - Outdoor Portrait'
  }
];

interface ProjectItem {
  id: string;
  title: string;
  bengaliTitle?: string;
  category: 'sqa' | 'data' | 'api' | 'all';
  categoryLabel?: string;
  status?: string;
  role?: string;
  image?: string;
  problemStatement?: string;
  geographicScope?: string;
  technicalNotes?: string[];
  keyFeatures?: string[];
  highlights?: string[];
  qaConsiderations?: string[];
  liveUrl?: string;
  githubUrl?: string;
  summary: string;
  tags: string[];
  metrics: string;
  deliverables: string[];
  icon: 'chart' | 'vial' | 'api' | 'db' | 'web';
  details: {
    objective: string;
    toolsUsed: string[];
    sampleTestcase?: string;
    sampleBugReport?: {
      id: string;
      title: string;
      severity: string;
      status: string;
      steps: string[];
      expected: string;
      actual: string;
    };
  };
}

const PROJECTS: ProjectItem[] = [
  {
    id: 'proj-turfbd',
    title: 'TurfBD — Sports Turf Booking Platform',
    category: 'api',
    categoryLabel: 'Full-Stack Web App',
    status: 'In Progress — Pre-launch Prototype',
    role: 'Product Owner / AI-Assisted Application Builder. Defined product requirements, role permissions, security rules, feature priorities, visual direction, and testing expectations while using ChatGPT and Google AI Studio/Gemini for development assistance.',
    image: '/images/turfbd-cover.jpg',
    summary: 'TurfBD is a sports venue booking platform designed for Bangladesh, connecting players, turf owners, and administrators. It supports venue discovery, slot selection, bookings, role-based dashboards, owner verification, QR-based gate check-in, pricing, and payout workflows, with a mobile-friendly PWA experience.',
    tags: ['React', 'TypeScript', 'Node.js / Express', 'PostgreSQL', 'Drizzle ORM', 'Progressive Web App (PWA)'],
    metrics: 'Pre-launch Prototype | Bangladesh Sports Booking',
    deliverables: ['PWA Venue Booking Architecture', 'Role-Based Access System', 'QR Gate Pass Specification', 'Admin & Payout Workflows'],
    icon: 'web',
    liveUrl: 'https://turfbd-beta.onrender.com',
    githubUrl: 'https://github.com/Azad-2025/TurBD',
    keyFeatures: [
      'Sports venue discovery, search, and filtering',
      'Booking and slot availability management',
      'Customer, Turf Owner, and Admin roles',
      'Separately authorized Super Admin privileges',
      'Owner verification and approval workflow',
      'Turf pricing and scheduling management',
      'QR-based match pass and gate check-in',
      'Squad cost splitter with WhatsApp sharing',
      'Administrative moderation, dispute, and payout workflows',
      'Mobile-responsive PWA experience'
    ],
    details: {
      objective: 'TurfBD is designed as a sports venue booking platform for Bangladesh, connecting players, turf owners, and administrators with role-based governance, scheduling, and QR check-in as a pre-launch prototype.',
      toolsUsed: ['React', 'TypeScript', 'Node.js / Express', 'PostgreSQL', 'Drizzle ORM', 'Progressive Web App (PWA)', 'Tailwind CSS']
    }
  },
  {
    id: 'proj-bengali-nostalgia',
    title: 'Bengali Nostalgia Score Card App',
    category: 'api',
    categoryLabel: 'Web Application',
    status: 'Completed — Live Deployment Reported',
    role: 'Product Owner, AI-Assisted Developer, QA & Testing Lead, and Deployment Coordinator. Defined requirements, directed AI-assisted implementation, tested interactive workflows, identified and resolved visual and canvas-export defects, and worked on GitHub and Vercel deployment configuration.',
    image: '/images/bengali-nostalgia-cover.jpg',
    summary: 'An interactive web app allowing 90s and 2000s Bengali users to explore 50 nostalgic childhood memories, calculate real-time scores, upload custom avatars, and generate downloadable social media cards using HTML5 Canvas.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'html2canvas', 'Vercel'],
    metrics: 'Live on Vercel | 50 Nostalgia Memories',
    deliverables: ['Interactive Memory Checklist', 'Canvas Card Export Engine', 'Vercel Deployment Pipeline'],
    icon: 'api',
    liveUrl: 'https://bengali-nostalgia-app.vercel.app/',
    githubUrl: 'https://github.com/Azad-2025/bengali-nostalgia-app',
    keyFeatures: [
      'Interactive checklist of 50 Bengali childhood memories',
      'Real-time nostalgia score and percentage calculation',
      'Category filtering',
      'Select All, Clear All, and Random 25 controls',
      'Custom name and profile image upload',
      'Interactive vintage 90s wooden-shelf card design',
      'High-resolution PNG card generation and download',
      'Responsive interface for different screen sizes'
    ],
    highlights: [
      'Addressed Bengali font baseline misalignment in exported canvas images',
      'Fixed missing name text and card-layout clipping issues in PNG output',
      'Resolved a reported Vercel dependency installation conflict',
      'Deployed the application to Vercel, according to the supplied project report'
    ],
    details: {
      objective: 'An interactive web app allowing 90s and 2000s Bengali users to explore 50 nostalgic childhood memories, calculate real-time scores, upload custom avatars, and generate downloadable social media cards using HTML5 Canvas.',
      toolsUsed: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'html2canvas', 'HTML5 Canvas', 'Vercel']
    }
  },
  {
    id: 'proj-foodie-bd',
    title: 'Foodie BD — Bangladesh Food Discovery & Journey Map',
    bengaliTitle: 'খাদক ম্যাপ',
    category: 'api',
    categoryLabel: 'FULL-STACK WEB APP',
    status: 'In Progress / Prototype',
    role: 'Project Initiator & AI-Assisted Application Builder. Defined product requirements, supplied design references, directed UI/UX refinements, planned features, and used ChatGPT and Google AI Studio to support implementation. Identified visible issues and specified validation scenarios for geographic accuracy, user workflows, and export functionality.',
    image: '/images/foodie-bd-cover.png',
    summary: 'Foodie BD is an AI-assisted web application for discovering regional Bangladeshi foods and tracking personal tasting journeys across 64 districts. It combines district-based food discovery, interactive map visualization, journey statistics, and personalized Foodie Card exports.',
    tags: ['React', 'TypeScript', 'Express.js', 'Vite', 'Leaflet', 'GeoJSON'],
    metrics: 'AI-Assisted Development | Bangladesh Food Discovery',
    deliverables: [
      'Interactive 64-District Map Visualization',
      'Regional Food Discovery & Filter Architecture',
      'Personal Tasting Journey Progress Tracker',
      'Downloadable Foodie Card Export Specifications'
    ],
    icon: 'web',
    liveUrl: 'https://foodie-bd.vercel.app',
    githubUrl: 'https://github.com/Azad-2025/Foodie-BD',
    problemStatement: 'Information about regional Bangladeshi foods can be scattered across websites and social media. Foodie BD aims to bring regional food discovery, district-based exploration, personal tasting records, and shareable journey progress together in one platform.',
    geographicScope: '8 divisions & 64 districts of Bangladesh (Target Coverage Scope)',
    keyFeatures: [
      'Bangladesh district map and division-based exploration',
      'Regional food discovery and district-based search',
      'Food search and division/category filters',
      'Personal food tracking using Tried and Want to Try categories',
      'Journey statistics and progress visualization',
      'Personalized Foodie Card preview and export functionality',
      'User profiles and authentication (Reported / Planned)',
      'Admin dashboard and food-content management (Reported / Planned)'
    ],
    qaConsiderations: [
      'Verify district-map rendering and geographic data accuracy',
      'Validate district-to-division assignments',
      'Test food search and division/district filters',
      'Verify Tried and Want to Try tracking',
      'Check whether journey records persist after refreshing the application',
      'Verify user-data isolation and admin authorization',
      'Test Bengali-English language switching',
      'Verify PNG, JPG, and PDF exports',
      'Check responsive behavior on desktop and mobile'
    ],
    technicalNotes: [
      'JSON-file persistence may be used by the current prototype implementation',
      'PostgreSQL/Supabase migrations reportedly exist, but active cloud DB connection is unconfirmed',
      'Map rendering and district-data boundary accuracy require validation',
      'External map tiles and CORS policies may affect canvas/map export operations',
      'Authentication and authorization workflows require formal security testing',
      'A previous blank-map issue was observed; final resolution in production remains unconfirmed'
    ],
    details: {
      objective: 'Foodie BD (খাদক ম্যাপ) is a Bangladesh-focused food discovery and journey-tracking application designed to help users explore regional foods, record personal tasting experiences, and visualize their food journey across the country\'s districts.',
      toolsUsed: ['React', 'TypeScript', 'Express.js', 'Vite', 'Leaflet', 'GeoJSON', 'Tailwind CSS']
    }
  },
  {
    id: 'proj-1',
    title: 'Data Analysis & Executive Reporting System',
    category: 'data',
    summary: 'Analyzed operational and software datasets, executing thorough data cleaning, statistical distribution checks, and executive metric dashboards.',
    tags: ['Data Analytics', 'Excel / Sheets', 'MySQL', 'Visualizations'],
    metrics: '99.2% Data Integrity | 15+ KPIs Tracked',
    deliverables: ['Automated Pivot Workbooks', 'Data Cleaning Pipeline', 'Executive Summaries'],
    icon: 'chart',
    details: {
      objective: 'Clean raw transaction logs and deliver structured reporting tables for weekly management review.',
      toolsUsed: ['MySQL Workbench', 'Advanced Microsoft Excel (VLOOKUP, INDEX/MATCH, Dynamic Arrays)', 'Google Sheets', 'SQL Aggregations'],
      sampleBugReport: {
        id: 'DATA-104',
        title: 'Discrepancy in monthly revenue aggregation due to unhandled null discounts',
        severity: 'High',
        status: 'Resolved & Validated',
        steps: [
          'Import raw order records from external CSV batch',
          'Execute monthly gross margin calculation macro',
          'Inspect row entries with null promotional vouchers'
        ],
        expected: 'Null discount values default to 0.00 and calculate gross margin correctly.',
        actual: 'Expression evaluated to NaN for 142 records, skewing report totals by ~4.1%.'
      }
    }
  },
  {
    id: 'proj-2',
    title: 'E-Commerce Platform SQA Test Suite',
    category: 'sqa',
    summary: 'Authored end-to-end test scenarios, boundary value analyses, and regression test suites across authentication, cart checkout, and payment gateways.',
    tags: ['SQA', 'Manual Testing', 'JIRA', 'STLC', 'Regression'],
    metrics: '120+ Test Cases Designed | 42 Defects Logged',
    deliverables: ['Test Matrix & Traceability Sheet', 'JIRA Defect Reports', 'Regression Sign-off'],
    icon: 'vial',
    details: {
      objective: 'Guarantee high reliability and security across user journeys from registration to final order confirmation.',
      toolsUsed: ['JIRA', 'TestLink', 'Chrome DevTools', 'Boundary Value Analysis (BVA)', 'Equivalence Partitioning (EP)'],
      sampleBugReport: {
        id: 'BUG-208',
        title: 'Checkout button remains disabled after resolving invalid coupon code error',
        severity: 'Major',
        status: 'Closed & Verified',
        steps: [
          'Add items totaling > $50 into cart',
          'Enter expired promotional code "SAVE90" and click Apply',
          'Clear invalid code input field and verify Checkout button state'
        ],
        expected: 'Checkout button re-enables allowing user to proceed with normal cart total.',
        actual: 'Button stays disabled with form validation lock until complete page refresh.'
      }
    }
  },
  {
    id: 'proj-3',
    title: 'RESTful API Testing & Verification Suite',
    category: 'api',
    summary: 'Structured comprehensive Postman collections to validate endpoint authorization, response status codes, payload contracts, and error structures.',
    tags: ['Postman', 'API Testing', 'JSON Schema', 'HTTP Statuses'],
    metrics: '35+ Endpoints Validated | 100% Schema Coverage',
    deliverables: ['Postman Test Collections', 'Environment Variables Config', 'API Health Audit'],
    icon: 'api',
    details: {
      objective: 'Ensure backend microservices conform strictly to OpenAPI specs and respond predictably under boundary payloads.',
      toolsUsed: ['Postman', 'JavaScript Assertions', 'JSON Schema Validator', 'cURL'],
      sampleTestcase: 'pm.test("Status is 200 OK & schema conforms", function () { pm.response.to.have.status(200); var data = pm.response.json(); pm.expect(data.token).to.be.a("string"); });'
    }
  },
  {
    id: 'proj-4',
    title: 'Database Schema Integrity & Query Optimization',
    category: 'data',
    summary: 'Audited relational database tables in MySQL, formulating optimized JOIN queries, foreign key validations, and data migration check scripts.',
    tags: ['MySQL', 'RDBMS', 'SQL Querying', 'Data Validation'],
    metrics: '40% Query Speedup | Zero Orphaned Records',
    deliverables: ['SQL Migration Scripts', 'Data Dictionary Document', 'Integrity Constraints Test Plan'],
    icon: 'db',
    details: {
      objective: 'Prevent inconsistent foreign references and ensure performant indexing across customer transaction records.',
      toolsUsed: ['MySQL 8.0', 'DBeaver', 'Relational Algebra', 'Constraint Auditing']
    }
  }
];

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [activeSection, setActiveSection] = useState('home');
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [projectFilter, setProjectFilter] = useState<'all' | 'sqa' | 'data' | 'api'>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  const [showEffects, setShowEffects] = useState(true);

  // Preload profile photos to prevent blank frames or flickering
  useEffect(() => {
    PROFILE_PHOTOS.forEach((photo) => {
      const img = new Image();
      img.src = photo.src;
    });
  }, []);

  // Contact form state
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Auto rotate profile photo slider every 5 seconds (5000ms)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % PROFILE_PHOTOS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Sync theme with html root attribute
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Scroll spy to update active nav link
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'services', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setContactForm({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  const filteredProjects = projectFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === projectFilter);

  return (
    <div className={`min-h-screen relative ${theme === 'light' ? 'text-slate-900' : 'text-[#F4F7FA]'}`}>
      {/* Background canvas styling with subtle theme gradients */}
      <div className="bg-canvas" />

      {/* Sunlight & Birds Ambient Overlay */}
      {showEffects && (
        <>
          <div className="sunlight-container">
            <div className="sun-glow" />
          </div>
          <div className="birds-container">
            <div className="bird bird-1" />
            <div className="bird bird-2" />
            <div className="bird bird-3" />
          </div>
        </>
      )}

      {/* Main Page Layout Container */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-6 sm:py-10 relative z-10 flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
        
        {/* ===================== SIDEBAR ===================== */}
        <aside className="w-full lg:w-[320px] shrink-0 panel-gradient-border p-6 sm:p-7 flex flex-col items-center text-center lg:sticky lg:top-8 transition-all">
          
          {/* Automatic Profile Photo Slider Container */}
          <div className="relative group mb-5">
            <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-3xl overflow-hidden card-gradient-border p-1 flex items-center justify-center shadow-xl relative transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full relative rounded-2xl overflow-hidden bg-[#0C141C]">
                {PROFILE_PHOTOS.map((photo, index) => (
                  <img
                    key={photo.id}
                    src={photo.src}
                    alt={photo.alt}
                    className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out motion-reduce:transition-none ${
                      index === currentSlideIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                    }`}
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                ))}
              </div>
            </div>

            {/* Subtle slider dot indicators */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 flex gap-1.5 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-xs border border-white/10 pointer-events-auto">
              {PROFILE_PHOTOS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlideIndex(idx)}
                  aria-label={`Show photo ${idx + 1}`}
                  className={`w-1.5 h-1.5 rounded-full transition-all cursor-pointer ${
                    idx === currentSlideIndex
                      ? 'w-3.5 bg-gradient-to-r from-[#009B77] to-[#16B8A6]'
                      : 'bg-white/40 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Name & Title with Teal-to-Pink Theme Gradient */}
          <h1 className="text-lg sm:text-xl font-bold tracking-tight mb-1">
            <span className="text-gradient-theme">
              {PROFILE.name}
            </span>
          </h1>
          <p className="text-xs font-semibold mb-4">
            <span className="text-gradient-theme">
              {PROFILE.role}
            </span>
          </p>

          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#16B8A6]/30 to-transparent my-1" />

          {/* Four Information Rows: WORKING AT, EMAIL, PHONE, LOCATION */}
          <div className="w-full space-y-3.5 my-4 text-left">
            {/* 1. WORKING AT */}
            <div className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-xl card-gradient-border flex items-center justify-center text-[#16B8A6] group-hover:text-white transition-all shrink-0">
                <Briefcase className="w-4 h-4" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] uppercase font-bold tracking-wider text-[#8292A3]">Working At</p>
                <p 
                  className="text-xs font-medium text-[var(--text-primary)] hover:text-[#16B8A6] transition-colors truncate"
                  title={PROFILE.workingAt}
                >
                  {PROFILE.workingAt}
                </p>
              </div>
            </div>

            {/* 2. EMAIL */}
            <div className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-xl card-gradient-border flex items-center justify-center text-[#16B8A6] group-hover:text-white transition-all shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] uppercase font-bold tracking-wider text-[#8292A3]">Email</p>
                <div className="flex items-center gap-1.5">
                  <a
                    href={`mailto:${PROFILE.email}`}
                    className="text-xs font-medium text-[var(--text-primary)] hover:text-[#16B8A6] truncate transition-colors"
                    title={PROFILE.email}
                  >
                    {PROFILE.email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="text-slate-400 hover:text-[#16B8A6] shrink-0 p-0.5 cursor-pointer"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? <Check className="w-3 h-3 text-[#16B8A6]" /> : <Copy className="w-3 h-3" />}
                  </button>
                </div>
              </div>
            </div>

            {/* 3. PHONE */}
            <div className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-xl card-gradient-border flex items-center justify-center text-[#16B8A6] group-hover:text-white transition-all shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] uppercase font-bold tracking-wider text-[#8292A3]">Phone</p>
                <a
                  href={`tel:${PROFILE.phone}`}
                  className="text-xs font-medium text-[var(--text-primary)] hover:text-[#16B8A6] transition-colors"
                >
                  {PROFILE.phone}
                </a>
              </div>
            </div>

            {/* 4. LOCATION */}
            <div className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-xl card-gradient-border flex items-center justify-center text-[#16B8A6] group-hover:text-white transition-all shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] uppercase font-bold tracking-wider text-[#8292A3]">Location</p>
                <p className="text-xs font-medium text-[var(--text-primary)] truncate">{PROFILE.location}</p>
              </div>
            </div>
          </div>

          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#16B8A6]/30 to-transparent my-1" />

          {/* Social Links */}
          <div className="w-full mt-3">
            <p className="text-[10px] uppercase font-bold tracking-wider text-[#8292A3] mb-2.5 text-left">
              Social Links
            </p>
            <div className="flex items-center justify-between gap-1.5">
              <a
                href={PROFILE.socials.github}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl card-gradient-border flex items-center justify-center text-[#16B8A6] hover:text-[#F32F45] transition-all hover:-translate-y-1"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PROFILE.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl card-gradient-border flex items-center justify-center text-[#16B8A6] hover:text-[#F32F45] transition-all hover:-translate-y-1"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={PROFILE.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl card-gradient-border flex items-center justify-center text-[#16B8A6] hover:text-[#F32F45] transition-all hover:-translate-y-1"
                title="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={PROFILE.socials.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl card-gradient-border flex items-center justify-center text-[#16B8A6] hover:text-[#F32F45] transition-all hover:-translate-y-1"
                title="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href={PROFILE.socials.twitter}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl card-gradient-border flex items-center justify-center text-[#16B8A6] hover:text-[#F32F45] transition-all hover:-translate-y-1"
                title="Twitter / X"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Primary Action Button: View Curriculum Vitae with full gradient */}
          <button
            onClick={() => setIsCVModalOpen(true)}
            className="w-full mt-6 py-3 px-4 rounded-xl btn-gradient-primary flex items-center justify-center gap-2 text-xs font-bold tracking-wide shadow-lg active:scale-95 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>View Full Curriculum Vitae</span>
          </button>
        </aside>

        {/* ===================== MAIN CONTENT AREA ===================== */}
        <main className="flex-1 min-w-0 panel-gradient-border p-5 sm:p-8 relative">
          
          {/* Top Floating Navbar (matching reference design) */}
          <div className="sticky top-4 -mt-2 mb-8 z-30 flex items-center justify-between gap-3 flex-wrap p-2 rounded-2xl bg-[#080D12]/90 backdrop-blur-xl border border-[#16B8A6]/30 shadow-2xl">
            <nav className="flex items-center gap-1 sm:gap-2 text-xs font-semibold overflow-x-auto py-1">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'skills', label: 'Skills' },
                { id: 'projects', label: 'Projects' },
                { id: 'experience', label: 'Experience' },
                { id: 'services', label: 'Services' },
                { id: 'contact', label: 'Contact' },
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3.5 py-1.5 rounded-xl transition-all cursor-pointer ${
                    activeSection === item.id
                      ? 'text-white bg-[#16B8A6]/15 border border-[#16B8A6] shadow-sm'
                      : 'text-[#B8C4D2] hover:text-[#16B8A6] hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Theme & Visual Toggle */}
            <div className="flex items-center gap-2 ml-auto">
              <button
                onClick={() => setShowEffects(!showEffects)}
                title={showEffects ? "Disable birds & glow" : "Enable birds & glow"}
                className="w-8 h-8 rounded-xl card-gradient-border flex items-center justify-center text-[#16B8A6] hover:text-white transition-all cursor-pointer"
                aria-label="Toggle visual effects"
              >
                <Sparkles className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={toggleTheme}
                title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                className="w-8 h-8 rounded-xl card-gradient-border flex items-center justify-center text-[#16B8A6] hover:text-[#F32F45] transition-all cursor-pointer"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 transition-transform hover:rotate-45" />
                ) : (
                  <Moon className="w-4 h-4 transition-transform hover:-rotate-12" />
                )}
              </button>
            </div>
          </div>

          {/* 1. HERO SECTION */}
          <section id="home" className="mb-14 scroll-mt-28">
            <div className="mb-8">
              {/* Welcome Badge with Line */}
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs uppercase font-extrabold tracking-widest text-[#16B8A6]">
                  WELCOME TO <span className="text-[var(--text-primary)]">MY PORTFOLIO</span>
                </span>
                <div className="h-[2px] w-12 bg-gradient-to-r from-[#16B8A6] to-[#D58B8D]" />
              </div>

              {/* Full Green-to-Red Gradient Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-3">
                <span className="text-gradient-theme">
                  Muhammed Salah Uddin (Azad)
                </span>
              </h1>

              {/* Subtitle */}
              <h2 className="text-base sm:text-lg font-semibold text-[var(--text-primary)] mb-4 flex items-center gap-2 flex-wrap">
                <span className="text-[#16B8A6]">SQA Engineer</span>
                <span>& Data Analyst</span>
                <span className="text-slate-500">|</span>
                <span className="text-[#B8C4D2]">CSE Graduate</span>
              </h2>

              <p className="text-sm sm:text-base leading-relaxed text-[#B8C4D2] max-w-2xl mb-7">
                Passionate Software Quality Assurance Engineer and Data Analyst dedicated to delivering
                bug-free applications and data-driven analytical insights with structured testing and
                thorough test case design.
              </p>

              {/* Action Buttons - Solid Theme Gradient Style */}
              <div className="flex flex-wrap gap-3.5">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="px-5 py-2.5 rounded-xl btn-gradient-primary flex items-center gap-2 text-xs sm:text-sm font-bold shadow-md cursor-pointer"
                >
                  <Eye className="w-4 h-4" />
                  <span>View Projects</span>
                </button>

                <button
                  onClick={() => setIsCVModalOpen(true)}
                  className="px-5 py-2.5 rounded-xl btn-gradient-primary flex items-center gap-2 text-xs sm:text-sm font-bold shadow-md cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Preview & Download CV</span>
                </button>

                <a
                  href={`mailto:${PROFILE.email}`}
                  className="px-5 py-2.5 rounded-xl btn-gradient-primary flex items-center gap-2 text-xs sm:text-sm font-bold shadow-md cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                  <span>Hire Me</span>
                </a>
              </div>
            </div>

            {/* Quick Stat Badges with Gradient Border (matching reference image) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-4">
              <div className="card-gradient-border p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#080D12] border border-[#16B8A6]/30 flex items-center justify-center text-[#16B8A6] shrink-0">
                  <Wrench className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[var(--text-primary)]">JIRA & Postman</h4>
                  <p className="text-[11px] text-[#8292A3]">Test Tools</p>
                </div>
              </div>

              <div className="card-gradient-border p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#080D12] border border-[#16B8A6]/30 flex items-center justify-center text-[#16B8A6] shrink-0">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[var(--text-primary)]">SQA & Analytics</h4>
                  <p className="text-[11px] text-[#8292A3]">Quality + Data</p>
                </div>
              </div>

              <div className="card-gradient-border p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#080D12] border border-[#16B8A6]/30 flex items-center justify-center text-[#16B8A6] shrink-0">
                  <FolderGit2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[var(--text-primary)]">5+ Projects</h4>
                  <p className="text-[11px] text-[#8292A3]">Completed</p>
                </div>
              </div>

              <div className="card-gradient-border p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#080D12] border border-[#16B8A6]/30 flex items-center justify-center text-[#16B8A6] shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[var(--text-primary)]">45+ WPM</h4>
                  <p className="text-[11px] text-[#8292A3]">Typing & Accuracy</p>
                </div>
              </div>
            </div>
          </section>

          {/* 2. ABOUT SECTION */}
          <section id="about" className="mb-14 scroll-mt-28">
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">About Me</h2>
              <div className="h-[2px] flex-1 bg-gradient-to-r from-[#16B8A6] via-[#D58B8D] to-transparent max-w-[140px]" />
            </div>

            <p className="text-sm sm:text-base leading-relaxed text-[#B8C4D2] mb-6">
              I am a dedicated Computer Science & Engineering graduate with hands-on experience in Software
              Quality Assurance (SQA), Data Analytics, and managerial leadership. With a strong analytical
              mindset, I bridge software testing precision with data-driven decision making to deliver reliable
              and high-performing software solutions.
            </p>

            {/* 6 Structured Cards with Gradient Borders */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="card-gradient-border p-5 rounded-2xl">
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#080D12] border border-[#16B8A6]/40 flex items-center justify-center text-[#16B8A6]">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-base text-[var(--text-primary)]">Who I Am</h3>
                </div>
                <p className="text-xs sm:text-sm text-[#B8C4D2] leading-relaxed">
                  Muhammed Salah Uddin — a versatile SQA Engineer, Data Analyst, and Manager based in Dhaka,
                  Bangladesh. I specialize in software testing, defect tracking, and data analysis.
                </p>
              </div>

              <div className="card-gradient-border p-5 rounded-2xl">
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#080D12] border border-[#16B8A6]/40 flex items-center justify-center text-[#16B8A6]">
                    <Target className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-base text-[var(--text-primary)]">Career Objective</h3>
                </div>
                <p className="text-xs sm:text-sm text-[#B8C4D2] leading-relaxed">
                  To leverage my background in SQA and Data Analytics to drive quality assurance standards,
                  optimize data-driven decisions, and advance technical skills to modern software organizations.
                </p>
              </div>

              <div className="card-gradient-border p-5 rounded-2xl">
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#080D12] border border-[#16B8A6]/40 flex items-center justify-center text-[#16B8A6]">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-base text-[var(--text-primary)]">Education</h3>
                </div>
                <p className="text-xs sm:text-sm text-[#B8C4D2] leading-relaxed">
                  <strong className="text-[var(--text-primary)] block font-semibold">B.Sc. in Computer Science & Engineering</strong>
                  Green University of Bangladesh (Completed)<br />
                  <span className="text-xs text-[#16B8A6] mt-1 inline-block">
                    Focus on Software Engineering, Database Systems (MySQL), Data Structures & Analysis.
                  </span>
                </p>
              </div>

              <div className="card-gradient-border p-5 rounded-2xl">
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#080D12] border border-[#16B8A6]/40 flex items-center justify-center text-[#16B8A6]">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-base text-[var(--text-primary)]">Professional Background</h3>
                </div>
                <p className="text-xs sm:text-sm text-[#B8C4D2] leading-relaxed">
                  Currently working as <strong className="text-[var(--text-primary)]">Manager at AJM Artificial</strong>.
                  Previously served as <strong className="text-[var(--text-primary)]">Data Analyst at TechnoNext Software Ltd</strong> (2026)
                  and <strong className="text-[var(--text-primary)]">SQA Intern at Iching Software Lab</strong> (2025).
                </p>
              </div>

              <div className="card-gradient-border p-5 rounded-2xl">
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#080D12] border border-[#16B8A6]/40 flex items-center justify-center text-[#16B8A6]">
                    <Settings className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-base text-[var(--text-primary)]">Working Approach</h3>
                </div>
                <ul className="text-xs sm:text-sm text-[#B8C4D2] space-y-1.5 list-disc pl-4">
                  <li>Focused on SQA testing standards & bug life cycle.</li>
                  <li>Data-driven analysis and reporting accuracy.</li>
                  <li>Structured and clean design and client management mindset.</li>
                </ul>
              </div>

              <div className="card-gradient-border p-5 rounded-2xl">
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#080D12] border border-[#16B8A6]/40 flex items-center justify-center text-[#16B8A6]">
                    <Award className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-base text-[var(--text-primary)]">Core Strengths</h3>
                </div>
                <ul className="text-xs sm:text-sm text-[#B8C4D2] space-y-1.5 list-disc pl-4">
                  <li>Test case design, defect tracking & reporting in JIRA.</li>
                  <li>Data analysis, Excel/Sheets (pivot, visualization).</li>
                  <li>Problem solving, collaboration & team management.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 3. SKILLS SECTION */}
          <section id="skills" className="mb-14 scroll-mt-28">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">Skills & Tools</h2>
              <div className="h-[2px] flex-1 bg-gradient-to-r from-[#16B8A6] via-[#D58B8D] to-transparent max-w-[140px]" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4.5">
              {/* QA Tools Card */}
              <div className="card-gradient-border p-5 rounded-2xl hover:-translate-y-1 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#080D12] border border-[#16B8A6]/40 flex items-center justify-center text-[#16B8A6]">
                      <TestTube2 className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-sm sm:text-base text-[var(--text-primary)]">
                      Testing & QA <span className="text-[#D58B8D]">Tools</span>
                    </h3>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-[#B8C4D2] mb-3.5">
                  JIRA, Postman, STLC, SDLC, Test Case Design, Defect Reporting, Regression Testing, Bug Life Cycle.
                </p>
                <div className="flex flex-wrap items-center gap-1.5">
                  {['JIRA', 'Postman', 'STLC/SDLC', 'Regression'].map(tag => (
                    <span key={tag} className="text-[11px] px-2.5 py-1 rounded-md bg-[#080D12] text-[#16B8A6] border border-white/10">
                      {tag}
                    </span>
                  ))}
                  <ChevronRight className="w-4 h-4 text-[#8292A3] ml-auto" />
                </div>
              </div>

              {/* Data Analytics Card */}
              <div className="card-gradient-border p-5 rounded-2xl hover:-translate-y-1 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#080D12] border border-[#16B8A6]/40 flex items-center justify-center text-[#16B8A6]">
                      <BarChart3 className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-sm sm:text-base text-[var(--text-primary)]">
                      Data Analytics & <span className="text-[#D58B8D]">Databases</span>
                    </h3>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-[#B8C4D2] mb-3.5">
                  Data Analysis, Excel (Pivot), Google Sheets, Data Visualization, MySQL, Data Cleaning.
                </p>
                <div className="flex flex-wrap items-center gap-1.5">
                  {['MySQL', 'Excel Pivot', 'Google Sheets'].map(tag => (
                    <span key={tag} className="text-[11px] px-2.5 py-1 rounded-md bg-[#080D12] text-[#16B8A6] border border-white/10">
                      {tag}
                    </span>
                  ))}
                  <ChevronRight className="w-4 h-4 text-[#8292A3] ml-auto" />
                </div>
              </div>

              {/* Programming Card */}
              <div className="card-gradient-border p-5 rounded-2xl hover:-translate-y-1 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#080D12] border border-[#16B8A6]/40 flex items-center justify-center text-[#16B8A6]">
                      <Code2 className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-sm sm:text-base text-[var(--text-primary)]">
                      Programming & <span className="text-[#D58B8D]">Web</span>
                    </h3>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-[#B8C4D2] mb-3.5">
                  C, Java, Python, HTML, CSS, JavaScript, MySQL, Git, Basic Web Development.
                </p>
                <div className="flex flex-wrap items-center gap-1.5">
                  {['C', 'Java', 'Python', 'HTML/CSS', 'Git'].map(tag => (
                    <span key={tag} className="text-[11px] px-2.5 py-1 rounded-md bg-[#080D12] text-[#16B8A6] border border-white/10">
                      {tag}
                    </span>
                  ))}
                  <ChevronRight className="w-4 h-4 text-[#8292A3] ml-auto" />
                </div>
              </div>

              {/* Speed & Rigor Card */}
              <div className="card-gradient-border p-5 rounded-2xl hover:-translate-y-1 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#080D12] border border-[#16B8A6]/40 flex items-center justify-center text-[#16B8A6]">
                      <Zap className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-sm sm:text-base text-[var(--text-primary)]">
                      Speed & Operational <span className="text-[#D58B8D]">Rigor</span>
                    </h3>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-[#B8C4D2] mb-3.5">
                  Typing Speed 45+ WPM with High Accuracy, Quick Learner, Attention to Detail, Team Collaboration.
                </p>
                <div className="flex flex-wrap items-center gap-1.5">
                  {['Typing', 'Data Accuracy', 'Teamwork'].map(tag => (
                    <span key={tag} className="text-[11px] px-2.5 py-1 rounded-md bg-[#080D12] text-[#16B8A6] border border-white/10">
                      {tag}
                    </span>
                  ))}
                  <ChevronRight className="w-4 h-4 text-[#8292A3] ml-auto" />
                </div>
              </div>
            </div>
          </section>

          {/* 4. PROJECTS SECTION */}
          <section id="projects" className="mb-14 scroll-mt-28">
            <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-3">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">Featured Projects</h2>
                <div className="h-[2px] w-12 bg-gradient-to-r from-[#16B8A6] to-[#D58B8D]" />
              </div>

              {/* Category Filter Pills (matching reference design) */}
              <div className="flex items-center gap-1 bg-[#080D12] p-1 rounded-full border border-white/10 text-xs">
                {(['all', 'sqa', 'data', 'api'] as const).map(cat => (
                  <button
                    key={cat}
                    onClick={() => setProjectFilter(cat)}
                    className={`px-3.5 py-1 rounded-full capitalize transition-all cursor-pointer ${
                      projectFilter === cat
                        ? 'bg-[#16B8A6] text-[#080D12] font-bold shadow-sm'
                        : 'text-[#B8C4D2] hover:text-white'
                    }`}
                  >
                    {cat === 'all' ? 'All' : cat === 'api' ? 'Web / API' : cat.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="card-gradient-border rounded-2xl overflow-hidden flex flex-col group hover:-translate-y-1.5 transition-all cursor-pointer shadow-xl"
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Card Visual Header */}
                  <div className="h-44 bg-gradient-to-br from-[#080D12] via-[#0C141C] to-[#10171F] p-4 sm:p-5 flex flex-col justify-between border-b border-white/10 relative overflow-hidden">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    ) : null}
                    {project.image ? (
                      <div className="absolute inset-0 bg-gradient-to-t from-[#080D12] via-[#080D12]/40 to-black/20 pointer-events-none" />
                    ) : null}

                    <div className="flex justify-between items-start z-10">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#080D12]/85 backdrop-blur-md text-[#16B8A6] border border-[#16B8A6]/40 shadow-sm">
                        {project.categoryLabel || (project.category === 'api' ? 'WEB / API' : project.category.toUpperCase())}
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-[#080D12]/85 backdrop-blur-md border border-white/10 flex items-center justify-center text-[#16B8A6] group-hover:scale-110 transition-transform shadow-sm">
                        {project.icon === 'chart' && <BarChart3 className="w-4 h-4" />}
                        {project.icon === 'vial' && <TestTube2 className="w-4 h-4" />}
                        {project.icon === 'api' && <Code2 className="w-4 h-4" />}
                        {project.icon === 'db' && <Wrench className="w-4 h-4" />}
                        {project.icon === 'web' && <Layers className="w-4 h-4" />}
                      </div>
                    </div>

                    <div className="z-10">
                      <p className="text-xs font-semibold text-[#D58B8D] drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">{project.metrics}</p>
                    </div>

                    {!project.image && (
                      <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-[#16B8A6]/10 rounded-full blur-2xl group-hover:bg-[#F32F45]/15 transition-all" />
                    )}
                  </div>

                  {/* Card Body */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-base sm:text-lg text-[var(--text-primary)] mb-2 group-hover:text-[#16B8A6] transition-colors">
                        {project.title}
                        {project.bengaliTitle && (
                          <span className="block text-xs font-normal text-[#16B8A6] mt-0.5">
                            ({project.bengaliTitle})
                          </span>
                        )}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#B8C4D2] leading-relaxed mb-4">
                        {project.summary}
                      </p>
                    </div>

                    <div>
                      <div className="flex flex-wrap gap-1.5 mb-3.5">
                        {project.tags.map(tag => (
                          <span key={tag} className="text-[11px] font-medium text-[#16B8A6]">
                            #{tag.replace(/\s+/g, '')}
                          </span>
                        ))}
                      </div>

                      <div className="pt-2.5 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-[#16B8A6] group-hover:text-[#D58B8D] transition-colors">
                        <span>View Details</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 5. EXPERIENCE SECTION */}
          <section id="experience" className="mb-14 scroll-mt-28">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">Experience</h2>
              <div className="h-[2px] flex-1 bg-gradient-to-r from-[#16B8A6] via-[#D58B8D] to-transparent max-w-[140px]" />
            </div>

            <div className="relative pl-6 border-l-2 border-[#16B8A6]/40 space-y-7">
              {/* Experience Item 1 */}
              <div className="relative group">
                <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#16B8A6] ring-4 ring-[#080D12]" />
                <div className="card-gradient-border p-5 rounded-2xl">
                  <div className="flex flex-wrap justify-between items-baseline gap-2 mb-1">
                    <h3 className="font-bold text-base sm:text-lg text-[var(--text-primary)]">Manager</h3>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#16B8A6]/15 text-[#16B8A6] border border-[#16B8A6]/30">
                      01 Aug 2026 — Present
                    </span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-semibold text-[#D58B8D] mb-3">AJM Artificial</h4>
                  <p className="text-xs sm:text-sm text-[#B8C4D2] leading-relaxed mb-2">
                    Leading operational and technical workflows to drive team performance, ensure standard operating procedures, and maintain top quality deliverables.
                  </p>
                  <ul className="text-xs sm:text-sm text-[#8292A3] space-y-1 list-disc pl-4">
                    <li>Overseeing team milestones, sprint deliverables, and resource allocation.</li>
                    <li>Aligning operational goals with strict quality control benchmarks.</li>
                  </ul>
                </div>
              </div>

              {/* Experience Item 2 */}
              <div className="relative group">
                <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#91B8A7] ring-4 ring-[#080D12]" />
                <div className="card-gradient-border p-5 rounded-2xl">
                  <div className="flex flex-wrap justify-between items-baseline gap-2 mb-1">
                    <h3 className="font-bold text-base sm:text-lg text-[var(--text-primary)]">Data Analyst</h3>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#080D12] text-[#B8C4D2] border border-white/10">
                      22 Feb 2026 — 22 Jun 2026 (4 Months)
                    </span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-semibold text-[#D58B8D] mb-3">TechnoNext Software Ltd</h4>
                  <p className="text-xs sm:text-sm text-[#B8C4D2] leading-relaxed mb-2">
                    Analyzed complex datasets to extract key operational and performance metrics for management decision making.
                  </p>
                  <ul className="text-xs sm:text-sm text-[#8292A3] space-y-1.5 list-disc pl-4">
                    <li>Cleaned, processed, and validated data using SQL queries, Excel, and spreadsheet models.</li>
                    <li>Created analytical reports to assist stakeholders in data-driven decision making.</li>
                    <li>Conducted verification audits ensuring zero duplicate or inconsistent records.</li>
                  </ul>
                </div>
              </div>

              {/* Experience Item 3 */}
              <div className="relative group">
                <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#F32F45] ring-4 ring-[#080D12]" />
                <div className="card-gradient-border p-5 rounded-2xl">
                  <div className="flex flex-wrap justify-between items-baseline gap-2 mb-1">
                    <h3 className="font-bold text-base sm:text-lg text-[var(--text-primary)]">
                      Software Quality Assurance (SQA) Intern
                    </h3>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#080D12] text-[#B8C4D2] border border-white/10">
                      Nov 2025 — Dec 2025
                    </span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-semibold text-[#D58B8D] mb-3">Iching Software Lab, Bangladesh</h4>
                  <p className="text-xs sm:text-sm text-[#B8C4D2] leading-relaxed mb-2">
                    Prepared comprehensive test cases, test scenarios, and defect reports following standard SDLC and STLC methodologies.
                  </p>
                  <ul className="text-xs sm:text-sm text-[#8292A3] space-y-1.5 list-disc pl-4">
                    <li>Executed functional, UI, boundary, and regression testing across core features.</li>
                    <li>Logged reproducible defects in JIRA with steps, screenshots, severity, and logs.</li>
                    <li>Collaborated closely with developers to verify fixes during sprint retests.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* 6. SERVICES SECTION */}
          <section id="services" className="mb-14 scroll-mt-28">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">Services Offered</h2>
              <div className="h-[2px] flex-1 bg-gradient-to-r from-[#16B8A6] via-[#D58B8D] to-transparent max-w-[140px]" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="card-gradient-border p-5 rounded-2xl flex gap-4 hover:-translate-y-1 transition-all">
                <div className="w-12 h-12 rounded-xl bg-[#080D12] border border-[#16B8A6]/40 flex items-center justify-center text-[#16B8A6] shrink-0">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-[var(--text-primary)] mb-1">Data Analytics & Reporting</h3>
                  <p className="text-xs sm:text-sm text-[#B8C4D2] leading-relaxed">
                    Data extraction, data cleaning, trend visualization, SQL querying, and executive reporting using Excel, Sheets, and analytical frameworks.
                  </p>
                </div>
              </div>

              <div className="card-gradient-border p-5 rounded-2xl flex gap-4 hover:-translate-y-1 transition-all">
                <div className="w-12 h-12 rounded-xl bg-[#080D12] border border-[#16B8A6]/40 flex items-center justify-center text-[#16B8A6] shrink-0">
                  <TestTube2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-[var(--text-primary)] mb-1">Software Quality Assurance</h3>
                  <p className="text-xs sm:text-sm text-[#B8C4D2] leading-relaxed">
                    Manual testing, test case design, functional & regression testing, defect tracking via JIRA, and API testing with Postman.
                  </p>
                </div>
              </div>

              <div className="card-gradient-border p-5 rounded-2xl flex gap-4 hover:-translate-y-1 transition-all">
                <div className="w-12 h-12 rounded-xl bg-[#080D12] border border-[#16B8A6]/40 flex items-center justify-center text-[#16B8A6] shrink-0">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-[var(--text-primary)] mb-1">Test Documentation & Audits</h3>
                  <p className="text-xs sm:text-sm text-[#B8C4D2] leading-relaxed">
                    Preparing detailed Test Plans, Test Scenarios, Traceability Matrices, and Defect Summary reports for stakeholder visibility.
                  </p>
                </div>
              </div>

              <div className="card-gradient-border p-5 rounded-2xl flex gap-4 hover:-translate-y-1 transition-all">
                <div className="w-12 h-12 rounded-xl bg-[#080D12] border border-[#16B8A6]/40 flex items-center justify-center text-[#16B8A6] shrink-0">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-[var(--text-primary)] mb-1">High-Speed Data Entry & Validation</h3>
                  <p className="text-xs sm:text-sm text-[#B8C4D2] leading-relaxed">
                    Accurate data entry at 45+ WPM with strict validation checks, format harmonization, and zero-defect records.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 7. CONTACT SECTION */}
          <section id="contact" className="scroll-mt-28">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">Contact Me</h2>
              <div className="h-[2px] flex-1 bg-gradient-to-r from-[#16B8A6] via-[#D58B8D] to-transparent max-w-[140px]" />
            </div>

            <p className="text-xs sm:text-sm text-[#B8C4D2] mb-6">
              Feel free to reach out to me for any SQA, Data Analysis, or Technical Management opportunities.
              I respond promptly to inquiries.
            </p>

            {/* Quick Contact Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
              <a
                href={`mailto:${PROFILE.email}`}
                className="card-gradient-border p-3.5 rounded-xl flex items-center gap-3 hover:border-[#16B8A6] transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-[#080D12] flex items-center justify-center text-[#16B8A6]">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] text-[#8292A3] uppercase font-bold">Email Direct</p>
                  <p className="text-xs font-semibold text-[var(--text-primary)] truncate">{PROFILE.email}</p>
                </div>
              </a>

              <a
                href={PROFILE.socials.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="card-gradient-border p-3.5 rounded-xl flex items-center gap-3 hover:border-[#16B8A6] transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-[#080D12] flex items-center justify-center text-[#16B8A6]">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] text-[#8292A3] uppercase font-bold">WhatsApp</p>
                  <p className="text-xs font-semibold text-[var(--text-primary)] truncate">+880 1305-430838</p>
                </div>
              </a>

              <a
                href={`tel:${PROFILE.phone}`}
                className="card-gradient-border p-3.5 rounded-xl flex items-center gap-3 hover:border-[#16B8A6] transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-[#080D12] flex items-center justify-center text-[#16B8A6]">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] text-[#8292A3] uppercase font-bold">Call</p>
                  <p className="text-xs font-semibold text-[var(--text-primary)] truncate">+880 1305-430838</p>
                </div>
              </a>
            </div>

            {/* Interactive Form with Gradient Button */}
            <form onSubmit={handleFormSubmit} className="card-gradient-border p-6 rounded-2xl space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#B8C4D2] mb-1.5">Your Full Name</label>
                  <input
                    type="text"
                    required
                    value={contactForm.name}
                    onChange={e => setContactForm({ ...contactForm, name: e.target.value })}
                    placeholder="e.g. John Doe"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#080D12] border border-white/10 text-xs sm:text-sm text-[var(--text-primary)] placeholder-slate-500 focus:border-[#16B8A6] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#B8C4D2] mb-1.5">Email Address</label>
                  <input
                    type="email"
                    required
                    value={contactForm.email}
                    onChange={e => setContactForm({ ...contactForm, email: e.target.value })}
                    placeholder="e.g. john@company.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#080D12] border border-white/10 text-xs sm:text-sm text-[var(--text-primary)] placeholder-slate-500 focus:border-[#16B8A6] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#B8C4D2] mb-1.5">Subject / Opportunity</label>
                <input
                  type="text"
                  value={contactForm.subject}
                  onChange={e => setContactForm({ ...contactForm, subject: e.target.value })}
                  placeholder="e.g. SQA Engineer Position / Data Analytics Project"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#080D12] border border-white/10 text-xs sm:text-sm text-[var(--text-primary)] placeholder-slate-500 focus:border-[#16B8A6] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#B8C4D2] mb-1.5">Your Message</label>
                <textarea
                  required
                  rows={4}
                  value={contactForm.message}
                  onChange={e => setContactForm({ ...contactForm, message: e.target.value })}
                  placeholder="Write your message, project scope, or interview details here..."
                  className="w-full px-4 py-2.5 rounded-xl bg-[#080D12] border border-white/10 text-xs sm:text-sm text-[var(--text-primary)] placeholder-slate-500 focus:border-[#16B8A6] focus:outline-none transition-colors resize-y"
                />
              </div>

              <div className="flex items-center justify-between flex-wrap gap-3 pt-2">
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl btn-gradient-primary flex items-center gap-2 text-xs sm:text-sm font-bold shadow-md cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>

                {formSubmitted && (
                  <div className="flex items-center gap-2 text-xs text-[#16B8A6] font-semibold animate-in fade-in">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Message dispatched successfully! I will reply shortly.</span>
                  </div>
                )}
              </div>
            </form>
          </section>

          {/* Footer Copyright with Gradient Accent */}
          <footer className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8292A3] gap-2">
            <p>© {new Date().getFullYear()} Muhammed Salah Uddin (Azad). All rights reserved.</p>
            <p className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#009B77] to-[#F32F45]" />
              <span>Engineered for quality, accuracy, and data precision</span>
            </p>
          </footer>
        </main>
      </div>

      {/* ===================== CV / RESUME MODAL ===================== */}
      {isCVModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
          <div className="w-full max-w-3xl max-h-[90vh] bg-[#0C141C] border border-[#16B8A6]/40 rounded-3xl overflow-hidden shadow-2xl flex flex-col text-[var(--text-primary)]">
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-[#080D12]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#16B8A6]/20 text-[#16B8A6] flex items-center justify-center">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm sm:text-base text-white">Curriculum Vitae</h3>
                  <p className="text-[11px] text-[#B8C4D2]">Muhammed Salah Uddin (Azad) — SQA & Analytics</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => window.print()}
                  className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-medium text-slate-200 flex items-center gap-1.5 cursor-pointer"
                  title="Print / Save as PDF"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Print / PDF</span>
                </button>
                <button
                  onClick={() => setIsCVModalOpen(false)}
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 flex items-center justify-center cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-xs sm:text-sm text-[#B8C4D2] leading-relaxed font-sans">
              {/* CV Header */}
              <div className="border-b border-white/10 pb-5 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center sm:items-start gap-4">
                <div>
                  <h1 className="text-2xl font-extrabold text-white">{PROFILE.name}</h1>
                  <p className="text-sm text-[#16B8A6] font-semibold mt-0.5">{PROFILE.role}</p>
                  <p className="text-xs text-[#8292A3] mt-1">{PROFILE.location}</p>
                </div>
                <div className="text-xs sm:text-right text-[#B8C4D2] space-y-1">
                  <p>Email: <a href={`mailto:${PROFILE.email}`} className="text-[#16B8A6]">{PROFILE.email}</a></p>
                  <p>Phone: <span className="text-white">{PROFILE.phone}</span></p>
                  <p>LinkedIn: <span className="text-slate-400">linkedin.com/in/salahuddinazad</span></p>
                </div>
              </div>

              {/* Professional Summary */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#16B8A6] mb-2 border-b border-[#16B8A6]/20 pb-1">
                  Professional Summary
                </h4>
                <p>
                  Detail-oriented Software Quality Assurance (SQA) Engineer and Data Analyst with a solid Computer Science
                  background from Green University of Bangladesh. Proficient in manual testing, test case design, defect tracking
                  via JIRA, REST API testing with Postman, MySQL data analysis, and executive Excel reporting. Proven capability
                  in team management, operational leadership, and maintaining high software delivery standards.
                </p>
              </div>

              {/* Core Competencies */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#16B8A6] mb-2 border-b border-[#16B8A6]/20 pb-1">
                  Technical & Functional Competencies
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="font-semibold text-white">SQA & Methodologies:</span>
                    <p className="text-slate-400">SDLC, STLC, Agile/Scrum, Test Case Authoring, Defect Tracking, Regression & Smoke Testing, Boundary Value Analysis, JIRA.</p>
                  </div>
                  <div>
                    <span className="font-semibold text-white">Data Analytics & Tools:</span>
                    <p className="text-slate-400">MySQL, Relational Databases, Advanced Microsoft Excel (Pivots, Lookups), Google Sheets, Data Cleaning & Validation.</p>
                  </div>
                  <div>
                    <span className="font-semibold text-white">API & Programming:</span>
                    <p className="text-slate-400">Postman API Testing, JSON, HTTP Status Protocols, C, Java, Python, HTML5, CSS3, Git.</p>
                  </div>
                  <div>
                    <span className="font-semibold text-white">Key Capabilities:</span>
                    <p className="text-slate-400">45+ WPM typing speed with high accuracy, fast data entry, operational management, analytical documentation.</p>
                  </div>
                </div>
              </div>

              {/* Work Experience */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#16B8A6] mb-3 border-b border-[#16B8A6]/20 pb-1">
                  Work Experience
                </h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-baseline">
                      <h5 className="font-bold text-white text-sm">Manager</h5>
                      <span className="text-xs text-[#16B8A6]">01 Aug 2026 — Present</span>
                    </div>
                    <p className="text-xs text-slate-400 font-medium">AJM Artificial</p>
                    <ul className="list-disc pl-4 mt-1.5 space-y-1 text-[#B8C4D2] text-xs">
                      <li>Direct daily team operations, technical task assignment, and process standards.</li>
                      <li>Conduct quality verification checks across deliverable milestones.</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-between items-baseline">
                      <h5 className="font-bold text-white text-sm">Data Analyst</h5>
                      <span className="text-xs text-slate-400">22 Feb 2026 — 22 Jun 2026 (4 Months)</span>
                    </div>
                    <p className="text-xs text-slate-400 font-medium">TechnoNext Software Ltd</p>
                    <ul className="list-disc pl-4 mt-1.5 space-y-1 text-[#B8C4D2] text-xs">
                      <li>Extracted, cleansed, and analyzed datasets from operational relational databases.</li>
                      <li>Built spreadsheet dashboards to monitor KPIs and present findings to executive leadership.</li>
                      <li>Executed data verification routines using SQL queries to ensure zero discrepancies.</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex justify-between items-baseline">
                      <h5 className="font-bold text-white text-sm">Software Quality Assurance (SQA) Intern</h5>
                      <span className="text-xs text-slate-400">Nov 2025 — Dec 2025</span>
                    </div>
                    <p className="text-xs text-slate-400 font-medium">Iching Software Lab, Bangladesh</p>
                    <ul className="list-disc pl-4 mt-1.5 space-y-1 text-[#B8C4D2] text-xs">
                      <li>Prepared test cases, test scenarios, and execution matrices for software features.</li>
                      <li>Executed functional, UI, and regression test passes; documented bugs in JIRA.</li>
                      <li>Collaborated with engineering team to verify bug fixes during sprint cycles.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#16B8A6] mb-2 border-b border-[#16B8A6]/20 pb-1">
                  Education
                </h4>
                <div>
                  <h5 className="font-bold text-white">B.Sc. in Computer Science & Engineering</h5>
                  <p className="text-slate-400">Green University of Bangladesh</p>
                  <p className="text-xs text-slate-400 mt-0.5">Relevant Coursework: Software Engineering, Database Management Systems, Data Structures & Algorithms, Object-Oriented Programming.</p>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-[#080D12] border-t border-white/10 flex justify-end gap-2">
              <button
                onClick={() => setIsCVModalOpen(false)}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-slate-200 cursor-pointer"
              >
                Close
              </button>
              <a
                href={`mailto:${PROFILE.email}?subject=Interview%20Invitation%20-%20Muhammed%20Salah%20Uddin`}
                className="px-4 py-2 rounded-xl btn-gradient-primary text-xs font-bold flex items-center gap-1.5 cursor-pointer"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Contact For Interview</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ===================== PROJECT DETAILS MODAL ===================== */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
          <div className="w-full max-w-2xl max-h-[90vh] bg-[#0C141C] border border-[#16B8A6]/40 rounded-3xl overflow-hidden shadow-2xl flex flex-col text-[var(--text-primary)]">
            {/* Header */}
            <div className="p-5 border-b border-white/10 flex items-start justify-between bg-[#080D12]">
              <div>
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-[#16B8A6]/20 text-[#16B8A6] border border-[#16B8A6]/30">
                    {selectedProject.categoryLabel || (selectedProject.category === 'api' ? 'WEB / API' : selectedProject.category.toUpperCase())}
                  </span>
                  {selectedProject.status && (
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-white/5 text-[#D58B8D] border border-white/10">
                      {selectedProject.status}
                    </span>
                  )}
                </div>
                <h3 className="font-bold text-lg text-white mt-1">
                  {selectedProject.title}
                  {selectedProject.bengaliTitle && (
                    <span className="ml-2 text-sm text-[#16B8A6] font-normal">
                      ({selectedProject.bengaliTitle})
                    </span>
                  )}
                </h3>
                <p className="text-xs text-[#16B8A6] mt-0.5">{selectedProject.metrics}</p>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto space-y-5 text-xs sm:text-sm text-[#B8C4D2]">
              {selectedProject.image && (
                <div className="rounded-2xl overflow-hidden border border-white/10 h-48 sm:h-56 relative shadow-lg">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C141C]/80 via-transparent to-transparent pointer-events-none" />
                </div>
              )}
              {selectedProject.role && (
                <div className="p-3.5 rounded-xl bg-[#080D12] border border-[#16B8A6]/30">
                  <h4 className="font-bold text-xs uppercase tracking-wider mb-1 text-[#16B8A6] flex items-center gap-1.5">
                    <UserCheck className="w-3.5 h-3.5" />
                    <span>My Role</span>
                  </h4>
                  <p className="leading-relaxed text-xs text-[#F4F7FA]">{selectedProject.role}</p>
                </div>
              )}

              <div>
                <h4 className="font-bold text-xs uppercase tracking-wider mb-1 text-[#16B8A6]">
                  Project Overview
                </h4>
                <p className="leading-relaxed">{selectedProject.summary || selectedProject.details.objective}</p>
              </div>

              {selectedProject.problemStatement && (
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider mb-1 text-[#16B8A6]">
                    Problem Statement
                  </h4>
                  <p className="leading-relaxed text-xs text-[#B8C4D2]">{selectedProject.problemStatement}</p>
                </div>
              )}

              {selectedProject.geographicScope && (
                <div className="p-3 rounded-xl bg-[#080D12] border border-white/10 flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-[#16B8A6] shrink-0" />
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#8292A3] block">Target Geographic Scope</span>
                    <span className="text-xs text-[#F4F7FA] font-medium">{selectedProject.geographicScope}</span>
                  </div>
                </div>
              )}

              <div>
                <h4 className="font-bold text-xs uppercase tracking-wider mb-2 text-[#16B8A6]">
                  Tools & Technologies
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.details.toolsUsed.map(tool => (
                    <span key={tool} className="px-2.5 py-1 rounded-lg bg-[#080D12] border border-white/10 text-xs text-slate-200">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {selectedProject.keyFeatures && (
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider mb-2 text-[#16B8A6]">
                    Core Features (Reported / Planned)
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {selectedProject.keyFeatures.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 p-2 rounded-lg bg-[#080D12]/60 border border-white/5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#16B8A6] shrink-0 mt-0.5" />
                        <span className="text-[#F4F7FA]">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedProject.qaConsiderations && (
                <div className="p-3.5 rounded-xl bg-[#080D12] border border-[#16B8A6]/30">
                  <h4 className="font-bold text-xs uppercase tracking-wider mb-2 text-[#16B8A6] flex items-center gap-1.5">
                    <TestTube2 className="w-3.5 h-3.5" />
                    <span>Quality Assurance & Proposed Test Scenarios</span>
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {selectedProject.qaConsiderations.map((scenario, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 p-2 rounded-lg bg-[#0C141C]/60 border border-white/5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#16B8A6] shrink-0 mt-0.5" />
                        <span className="text-[#F4F7FA]">{scenario}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedProject.technicalNotes && (
                <div className="p-3.5 rounded-xl bg-[#080D12] border border-amber-500/20">
                  <h4 className="font-bold text-xs uppercase tracking-wider mb-1.5 text-amber-400 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Reported Technical Considerations & Notes</span>
                  </h4>
                  <ul className="space-y-1.5 text-xs text-[#B8C4D2]">
                    {selectedProject.technicalNotes.map((note, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-amber-400 mt-0.5 font-bold">•</span>
                        <span>{note}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedProject.highlights && (
                <div className="p-3.5 rounded-xl bg-[#080D12] border border-[#D58B8D]/30">
                  <h4 className="font-bold text-xs uppercase tracking-wider mb-1.5 text-[#D58B8D]">
                    Project Highlights & Quality Assurance
                  </h4>
                  <ul className="space-y-1.5 text-xs">
                    {selectedProject.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 text-[#F4F7FA]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D58B8D] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedProject.details.sampleBugReport && (
                <div className="p-4 rounded-xl bg-[#080D12] border border-[#16B8A6]/40 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-[#16B8A6] font-bold">
                      Defect Ticket: {selectedProject.details.sampleBugReport.id}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] bg-red-500/20 text-red-300 border border-red-500/30">
                      Severity: {selectedProject.details.sampleBugReport.severity}
                    </span>
                  </div>
                  <p className="font-semibold text-white text-xs">
                    {selectedProject.details.sampleBugReport.title}
                  </p>
                  <div>
                    <p className="text-[11px] text-slate-400 uppercase font-bold">Steps to reproduce:</p>
                    <ol className="list-decimal pl-4 text-xs text-slate-300 space-y-0.5">
                      {selectedProject.details.sampleBugReport.steps.map((st, i) => (
                        <li key={i}>{st}</li>
                      ))}
                    </ol>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1">
                    <div className="p-2 rounded bg-black/40 border border-white/5">
                      <span className="text-[10px] text-slate-400 block font-bold">Expected:</span>
                      <span className="text-slate-300">{selectedProject.details.sampleBugReport.expected}</span>
                    </div>
                    <div className="p-2 rounded bg-black/40 border border-white/5">
                      <span className="text-[10px] text-red-400 block font-bold">Actual:</span>
                      <span className="text-slate-300">{selectedProject.details.sampleBugReport.actual}</span>
                    </div>
                  </div>
                </div>
              )}

              {selectedProject.details.sampleTestcase && (
                <div className="p-3.5 rounded-xl bg-[#080D12] border border-white/10">
                  <span className="text-[11px] text-[#16B8A6] font-bold block mb-1">Postman Test Assertion:</span>
                  <pre className="text-[11px] font-mono text-[#91B8A7] bg-slate-900/80 p-2.5 rounded-lg overflow-x-auto">
                    {selectedProject.details.sampleTestcase}
                  </pre>
                </div>
              )}

              {selectedProject.deliverables && (
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-wider mb-1.5 text-[#16B8A6]">
                    Deliverables
                  </h4>
                  <ul className="list-disc pl-4 space-y-1 text-[#B8C4D2] text-xs">
                    {selectedProject.deliverables.map((del, idx) => (
                      <li key={idx}>{del}</li>
                    ))}
                  </ul>
                </div>
              )}

              {(selectedProject.liveUrl || selectedProject.githubUrl) && (
                <div className="pt-3 border-t border-white/10 flex flex-wrap gap-2.5">
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl btn-gradient-primary text-xs font-bold flex items-center gap-1.5 shadow"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Website</span>
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-[#080D12] border border-[#16B8A6]/40 hover:border-[#16B8A6] text-xs font-semibold text-white flex items-center gap-1.5 transition-colors"
                    >
                      <Github className="w-3.5 h-3.5 text-[#16B8A6]" />
                      <span>GitHub Repository</span>
                    </a>
                  )}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-4 bg-[#080D12] border-t border-white/10 flex justify-end">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 rounded-xl btn-gradient-primary text-xs font-bold cursor-pointer"
              >
                Close Project Details
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
