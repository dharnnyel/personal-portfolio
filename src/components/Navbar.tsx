import { navLinks } from '@/lib/data';
import { cn } from '@/lib/utils';
import { Tooltip } from '@base-ui-components/react';
import { Menu, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ArrowSvg from './ArrowSvg';

type NavProps = {};

const Navbar: React.FC<NavProps> = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isActive, setIsActive] = useState<
		SectionId | undefined
	>(undefined);

	const navigate = useNavigate();

	const location = useLocation();

	// Sync isActive with the current URL
	useEffect(() => {
		// If using hash routing (e.g. #about)
		if (location.hash) {
			setIsActive(
				location.hash.replace('#', '') as SectionId
			);
		} else if (
			location.pathname === '/' ||
			location.pathname === ''
		) {
			setIsActive('hero');
		} else {
			// If using path-based routing for sections (e.g. /about)
			setIsActive(
				location.pathname.replace('/', '') as SectionId
			);
		}
	}, [location]);

	const handleClick = (id: SectionId) => {
		setIsActive(id);
		if (id === 'hero') {
			navigate('/');
			document
				.getElementById('hero')
				?.scrollIntoView({ behavior: 'smooth' });
		} else {
			navigate(`#${id}`);
			document
				.getElementById(id)
				?.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<Tooltip.Provider>
			<nav
				className={`fixed right-0 z-40 flex flex-col py-2 gap-12 md:justify-center h-full items-center overflow-visible`}
			>
				<button
					onClick={() => setIsMenuOpen(prev => !prev)}
					className='md:hidden p-2 text-foreground z-50'
					aria-label={
						isMenuOpen ? 'Close Menu' : 'Open Menu'
					}
				>
					{isMenuOpen ? (
						<X size={24} />
					) : (
						<Menu size={24} />
					)}
				</button>
				<div
					className={cn(
						'glass rounded-full h-fit transform transition-transform duration-300 md:translate-x-0 md:mr-2',
						isMenuOpen
							? 'translate-x-0 mr-1'
							: 'translate-x-full'
					)}
				>
					<div className='space-y-5 py-7 px-2 rounded-full flex flex-col'>
						{navLinks.map((link, index) => (
							<Tooltip.Root key={index}>
								<Tooltip.Trigger>
									<a
										href={`${
											link.href === 'hero'
												? '/'
												: `#${link.href}`
										}`}
										key={index}
										className={cn(
											'cursor-pointer flex flex-col gap-2 justify-center items-center rounded-full h-10 w-10',
											isActive === link.href
												? 'bg-primary/40'
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
								</Tooltip.Trigger>
								<Tooltip.Portal>
									<Tooltip.Positioner
										sideOffset={10}
										side='left'
										className={'glass rounded-lg'}
									>
										<Tooltip.Popup className='flex origin-[var(--transform-origin)] flex-col rounded-md px-3 py-2 text-sm transition-[transform,scale,opacity] data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[instant]:duration-0 data-[starting-style]:scale-90 data-[starting-style]:opacity-90 '>
											<Tooltip.Arrow className='data-[side=bottom]:top-[-8px] data-[side=left]:right-[-15.5px] data-[side=left]:rotate-90 data-[side=right]:left-[-13px]'>
												{/*  className='data-[side=bottom]:top-[-8px] data-[side=left]:right-[-13px] data-[side=left]:rotate-90 data-[side=right]:left-[-13px] data-[side=right]:-rotate-90 data-[side=top]:bottom-[-8px] data-[side=top]:rotate-180' */}
												<ArrowSvg />
											</Tooltip.Arrow>
											{link.name}
										</Tooltip.Popup>
									</Tooltip.Positioner>
								</Tooltip.Portal>
							</Tooltip.Root>
						))}
					</div>
				</div>
			</nav>
		</Tooltip.Provider>
	);
};

export default Navbar;
