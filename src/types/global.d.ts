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

	type navLink = {
		name: string;
		href: sectionId;
		icon: LucideIcon;
	};

	type sectionId = 'hero' | 'about' | 'skills' | 'projects' | 'contact'
}

export {};
