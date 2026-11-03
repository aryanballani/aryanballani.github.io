export const site = {
  name: 'Aryan Ballani',
  title: 'Aryan Ballani: ML & Software Engineer',
  description:
    'Machine Learning Engineer at Railtown AI. Computer Science + Statistics at UBC. Projects, experience and everything I have built.',
  email: 'aryanballani@gmail.com',
  resume: '/resume/resume.pdf',
  // Drives the live age ticker easter egg
  birthDate: '2003-06-07T00:00:00',
};

export const socials = [
  { label: 'GitHub', href: 'https://github.com/aryanballani', icon: 'simple-icons:github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/aryanballani/', icon: 'simple-icons:linkedin' },
  { label: 'Instagram', href: 'https://www.instagram.com/ayee_bee_jr/', icon: 'simple-icons:instagram' },
  { label: 'Email', href: `mailto:${site.email}`, icon: 'lucide:mail' },
] as const;

export const nav = [
  { href: '/', label: 'About' },
  { href: '/#experience', label: 'XP++', keywords: 'experience work jobs' },
  { href: '/projects/', label: 'Projects' },
  { href: '/#skills', label: 'Skills' },
] as const;

export const skills = [
  { group: 'Languages', items: ['Python', 'TypeScript', 'Java', 'C', 'C++', 'SQL', 'R', 'Kotlin'] },
  { group: 'ML & Data', items: ['PyTorch', 'scikit-learn', 'NumPy', 'Pandas', 'NLTK', 'XGBoost', 'LiteLLM'] },
  { group: 'Frameworks', items: ['FastAPI', 'Flask', 'React', 'Next.js', 'Vue.js', 'GraphQL'] },
  { group: 'Infra & Data', items: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'PostgreSQL', 'MongoDB', 'Redis', 'Spark'] },
  { group: 'Tooling', items: ['Git', 'GitHub Actions', 'Azure Pipelines', 'Jenkins', 'Pytest', 'Selenium'] },
] as const;

export const isExternal = (href: string) => /^https?:\/\//.test(href);
