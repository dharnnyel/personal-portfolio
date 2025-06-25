import { navLinks } from '@/lib/data';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type NavProps = {};

const Navbar: React.FC<NavProps> = props => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isActive, setIsActive] =
		useState<SectionId>('hero');

	const navigate = useNavigate();

	const handleClick = (id: SectionId) => {
		setIsActive(id);
		if (id === 'hero') {
			navigate('/');
			document
				.getElementById('hero')
				?.scrollIntoView({ behavior: 'smooth' });
		} else {
			document
				.getElementById(id)
				?.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<nav
			className={`fixed right-0 z-40 flex flex-col py-2 gap-12 md:justify-center h-full items-center`}
		>
			<button
				onClick={() => setIsMenuOpen(prev => !prev)}
				className='md:hidden p-2 text-foreground z-50'
				aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
			>
				{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
			</button>
			<div
				className={cn(
					'backdrop-filter backdrop-blur-xs bg-gray-800 dark:bg-white/10 shadow-lg/50 rounded-full h-fit transform transition-transform duration-300 md:translate-x-0 md:mr-2',
					isMenuOpen
						? 'translate-x-0 mr-1'
						: 'translate-x-full'
				)}
			>
				<div className='space-y-5 py-7 px-2 rounded-full'>
					{navLinks.map((link, index) => (
						<a
							href={`${
								link.href === 'hero' ? '/' : `#${link.href}`
							}`}
							key={index}
							className={cn(
								'cursor-pointer flex flex-col gap-2 justify-center items-center rounded-full h-10 w-10',
								isActive === link.href
									? 'bg-border'
									: 'bg-transparent'
							)}
							onClick={e => {
								if (link.href === 'hero') {
									e.preventDefault();
								}
								handleClick(link.href);
								setIsMenuOpen(false);
							}}
						>
							<link.icon size={17} />
						</a>
					))}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
