import { LucideIcon } from 'lucide-react';

declare global {
	type StarProps = {
		id: number;
		size: number;
		x: number;
		y: number;
		opacity: number;
		animationDuration: number;
	};

	type MeteorProps = {
		id: number;
		size: number;
		x: number;
		y: number;
		delay: number;
		animationDuration: number;
	};

	type NavLink = {
		name: string;
		href: sectionId;
		icon: LucideIcon;
	};

	type SectionId =
		| 'hero'
		| 'about'
		| 'skills'
		| 'projects'
		| 'contact';

	type Category = 'frontend' | 'backend' | 'tools';

	type Skills = {
		name: string;
		level: number;
		category: Category;
	};
}

export {};
