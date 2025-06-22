import {
	Code,
	Home,
	Layout,
	MessageCircle,
	User2,
} from 'lucide-react';

const navLinks: navLink[] = [
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

export { navLinks };
