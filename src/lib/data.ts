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

const projects: Projects[] = [
	{
		id: 1,
		title: 'Video Calling/Streaming Platform',
		description:
			'An easy to use web app for scheduling, making, and receiving calls',
		image: 'projects/xoom.png',
		tags: [
			'React',
			'Next.js',
			'TypeScript',
			'TailwindCSS',
			'Clerk',
			'Stream API',
		],
		demoUrl: 'https://xoom-clone.vercel.app/',
		githubUrl: 'https://github.com/dharnnyel/xoom',
	},
	{
		id: 2,
		title: 'Personal Portfolio',
		description:
			'A personal portfolio website showcasing my projects and skills',
		image: 'projects/portfolio.png',
		tags: [
			'React',
			'TypeScript',
			'TailwindCSS',
			'React Router',
		],
		demoUrl: 'https://xoom-clone.vercel.app/',
		githubUrl:
			'https://github.com/dharnnyel/personal-portfolio',
	},
];

export { navLinks, skills, projects };
