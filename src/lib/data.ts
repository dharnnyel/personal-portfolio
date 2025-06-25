import {
	Code,
	Home,
	Layout,
	MessageCircle,
	User2,
} from 'lucide-react';

const navLinks: NavLink[] = [
	{ name: 'Home', href: 'hero', icon: Home },
	{ name: 'About', href: 'about', icon: User2 },
	{ name: 'Skills', href: 'skills', icon: Code },
	{ name: 'Projects', href: 'projects', icon: Layout },
	{
		name: 'Contact',
		href: 'contact',
		icon: MessageCircle,
	},
];

const skills: Skills[] = [
	{ name: 'HTML/CSS', level: 95, category: 'frontend' },
	{ name: 'TailwindCSS', level: 90, category: 'frontend' },
	{ name: 'JavaScript', level: 90, category: 'frontend' },
	{ name: 'TypeScript', level: 75, category: 'frontend' },
	{ name: 'React', level: 70, category: 'frontend' },
	{ name: 'Next.js', level: 70, category: 'frontend' },
	{ name: 'React Native', level: 50, category: 'frontend' },

	{ name: 'Node.js', level: 50, category: 'backend' },
	{ name: 'Express', level: 50, category: 'backend' },
	{ name: 'MongoDB', level: 40, category: 'backend' },

	{ name: 'Git/GitHub', level: 80, category: 'tools' },
	{ name: 'Figma', level: 85, category: 'tools' },
	{ name: 'VS Code', level: 90, category: 'tools' },
];

export { navLinks, skills };
