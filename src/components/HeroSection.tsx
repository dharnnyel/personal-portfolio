import { ArrowDown } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

type HeroSectionProps = {};

const HeroSection: React.FC<HeroSectionProps> = props => {
	return (
		<section
			id='hero'
			className='relative min-h-screen flex flex-col items-center justify-center px-4'
		>
			<div className='container max-w-4xl mx-auto text-center z-10 pt-3'>
				<div className='space-y-4 sm:space-y-6'>
					<h1 className='text-4xl md:text-6xl font-bold md:tracking-tight'>
						<span className='opacity-0 animate-fade-in'>
							Hi, I'm
						</span>
						<span className='text-primary opacity-0 animate-fade-in-delay-1'>
							{' '}
							Chukwuemeka
						</span>
						<span className='text-gradient ml-2 opacity-0 animate-fade-in-delay-2'>
							{' '}
							Ubah
						</span>
					</h1>
					<p className='text-[15px] md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3'>
						I create beautiful user experiences with modern
						web technologies. Specializing in front-end
						development, I build pixel-perfect interfaces
						that are very functional.
					</p>

					<div className='pt-4 opacity-0 animate-fade-in-delay-4'>
						<Link to='#projects' className='cosmic-button'>View My Work</Link>
					</div>
				</div>
			</div>

			<div className='absolute bottom-1 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center animate-bounce'>
				<span className='text-xs text-muted-foreground mb-1'>Scroll</span>
				<ArrowDown className='h-5 w-5 text-primary' />
			</div>
		</section>
	);
};

export default HeroSection;
