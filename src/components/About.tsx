import { Download } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

type AboutProps = {};

const About: React.FC<AboutProps> = props => {
	return (
		<section
			id='about'
			className='py-20 px-4 relative'
		>
			<div className='container mx-auto max-w-5xl'>
				<h2 className='text-4xl md:text-5xl font-bold mb-12 text-center'>
					About <span className='text-primary'> Me</span>
				</h2>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
					<div className='space-y-6'>
						<h3 className='text-2xl font-semibold'>
							Passionate Web Developer
						</h3>

						<p className='text-muted-foreground text-[15px] sm:text-base'>
							I specialize in creating responsive,
							accessible, and performant web applications
							using modern web technologies
						</p>

						<p className='text-muted-foreground text-[15px] sm:text-base'>
							I'm passionate about creating elegant
							solutions to complex problems, and I'm
							currently learning new technologies and
							techniques to stay at the forefront of the
							ever-evolving web landscape
						</p>

						<div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>
							<Link
								to='#contact'
								className='cosmic-button'
							>
								Get In Touch
							</Link>
							<a
								href='/cv.pdf'
								download='Ubah_Chukwuemeka_Daniel-CV.pdf'
								className='cosmic-button flex gap-3'
							>
								Download CV
								<Download size={18} />
							</a>
						</div>
					</div>
					<div></div>
				</div>
			</div>
		</section>
	);
};

export default About;
