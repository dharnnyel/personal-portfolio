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
		href: string;
	};
}

export {};
