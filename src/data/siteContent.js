import {
  Briefcase,
  Building2,
  Code2,
  FileSearch,
  Globe2,
  GraduationCap,
  HeartPulse,
  Landmark,
  LineChart,
  UsersRound,
  UserPlus,
  Rocket,
  ShieldCheck,
} from 'lucide-react'

export const contactEmail = 'Info@ajasconsulting.com,Sales@ajasconsulting.com'

export const navigation = [
  { label: 'Home', href: '/', page: 'Home' },
  { label: 'About', href: '/about', page: 'About' },
  { label: 'Services', href: '/services', page: 'Services' },
  { label: 'Industries', href: '/industries', page: 'Industries' },
  { label: 'Careers', href: '/careers', page: 'Careers' },
  { label: 'Contact', href: '/contact', page: 'Contact' },
]

export const services = [
  { 
    slug: 'technology-consulting', 
    title: 'Technology Consulting', 
    icon: LineChart, 
    image: 'photo-1551288049-bebda4e38f71', 
    description: 'Strategic technology expertise to help organizations modernize, optimize, and navigate complex technology initiatives.',
    capabilities: ['Technology Strategy', 'Digital Transformation', 'Solution Architecture', 'Technical Advisory', 'IT Modernization', 'Program & Delivery Support']
  },
  { 
    slug: 'engineering-application-services', 
    title: 'Engineering & Application Services', 
    icon: Code2, 
    image: 'photo-1521737711867-e3b97375f902', 
    description: 'Engineering expertise to design, build, modernize, integrate, and support business-critical applications.',
    capabilities: ['Application Development', 'Full-Stack Engineering', 'API & Integration', 'Application Modernization', 'QA & Testing', 'Application Support']
  },
  { 
    slug: 'data-analytics', 
    title: 'Data & Analytics', 
    icon: FileSearch, 
    image: 'photo-1551288049-bebda4e38f71', // reusing image temporarily
    description: 'Transforming enterprise data into reliable platforms, actionable insights, and intelligent business capabilities.',
    capabilities: ['Data Engineering', 'Data Architecture', 'Data Warehousing', 'Business Intelligence', 'Analytics', 'AI / ML Enablement']
  },
  { 
    slug: 'cloud-infrastructure', 
    title: 'Cloud & Infrastructure', 
    icon: Globe2, 
    image: 'photo-1451187580459-43490279c0fa', 
    description: 'Scalable technology infrastructure designed to support modern enterprise environments.',
    capabilities: ['Cloud Engineering', 'Cloud Migration', 'DevOps', 'Platform Engineering', 'Infrastructure Engineering', 'Automation', 'Cloud Operations']
  },
  { 
    slug: 'strategic-talent-solutions', 
    title: 'Strategic Talent Solutions', 
    icon: UsersRound, 
    image: 'photo-1517048676732-d65bc937f952', 
    description: 'Specialized technology professionals aligned to the skills, timelines, and objectives of your organization.',
    capabilities: ['Contract', 'Contract-to-Hire', 'Direct Hire', 'Project-Based', 'Specialized Delivery Teams']
  },
  { 
    slug: 'enterprise-systems', 
    title: 'Enterprise Systems', 
    icon: Building2, 
    image: 'photo-1551836022-d5d88e9218df', 
    description: 'Technology expertise across enterprise platforms that power critical business operations.',
    capabilities: ['ERP', 'CRM', 'Enterprise Applications', 'Platform Modernization', 'Systems Integration', 'Enterprise Application Support']
  },
]

export const serviceOptions = [
  'Technology Consulting',
  'Engineering & Development',
  'Data & Analytics',
  'Cloud & Infrastructure',
  'Enterprise Systems',
  'Talent Solutions',
  'Project Delivery',
  'Other',
]

export const industries = [
  { title: 'Banking & Financial Services', icon: Landmark, image: 'photo-1486406146926-c627a92ad1ab', description: 'We help financial institutions modernize core banking systems, ensure regulatory compliance, and build secure, scalable fintech platforms that drive digital transformation.' },
  { title: 'Healthcare', icon: HeartPulse, image: 'photo-1576091160399-112ba8d25d1d', description: 'Accelerating patient care through digital health platforms, HIPAA-compliant data architectures, and interoperable systems that connect providers and patients seamlessly.' },
  { title: 'Insurance', icon: ShieldCheck, image: 'photo-1450101499163-c8848c66cb85', description: 'Driving the future of InsurTech by modernizing legacy claims systems, implementing AI-driven risk analytics, and creating seamless digital experiences for policyholders.' },
  { title: 'Telecommunications', icon: Globe2, image: 'photo-1519389950473-47ba0277781c', description: 'Empowering telcos to scale next-generation networks, optimize OSS/BSS platforms, and leverage cloud infrastructure for 5G and edge computing innovations.' },
  { title: 'Retail', icon: Rocket, image: 'photo-1441986300917-64674bd600d8', description: 'Architecting unified omnichannel experiences, resilient supply chain technologies, and advanced data analytics to thrive in a digital-first retail landscape.' },
  { title: 'Manufacturing', icon: Building2, image: 'photo-1581091226825-a6a2a5aee158', description: 'Bridging IT and OT by implementing Industry 4.0 solutions, IoT connectivity, and robust ERP systems to optimize production and predictive maintenance.' },
]