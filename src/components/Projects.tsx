import { projects } from '@/lib/data';
import {
	ArrowRight,
	Code,
	ExternalLink,
	ExternalLinkIcon,
	Github,
} from 'lucide-react';
import React from 'react';

type ProjectProps = {};

const Projects: React.FC<ProjectProps> = props => {
	return (
		<section
			id='projects'
			className='py-24 px-4 relative'
		>
			<div className='container mx-auto max-w-5xl'>
				<h2 className='text-4xl md:text-5xl font-bold mb-4 text-center'>
					Featured{' '}
					<span className='text-primary'>Projects</span>
				</h2>

				<p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
					Here are some of my recent projects. Each project
					was carefully crafted with attention to detail and
					a focus on user experience.
				</p>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{projects.map((project, index) => (
						<div
							key={index}
							className='group rounded-lg overflow-hidden card-hover glass'
						>
							<div className='h-48 overflow-hidden'>
								<img
									src={project.image}
									alt={project.title}
									className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
								/>
							</div>

							<div className='p-6'>
								<div className='flex flex-wrap gap-2 mb-4'>
									{project.tags.map(tag => (
										<span className='px-2 py-1 text-[8px] font-medium rounded-full bg-primary/20 border border-primary/60' key={tag}>
											{tag}
										</span>
									))}
								</div>

								<h3 className='text-sm font-semibold mb-1'>
									{project.title}
								</h3>
								<p className='text-xs text-muted-foreground mb-4'>
									{project.description}
								</p>
								<div className='flex justify-between items-center'>
									<div className='flex space-x-3'>
										<a
											href={project.demoUrl}
											target='_blank'
											className='text-foreground/80 hover:text-primary transition-colors duration-300'
										>
											<ExternalLink size={20} />
										</a>
										<a
											href={project.githubUrl}
											target='_blank'
											className='text-foreground/80 hover:text-primary transition-colors duration-300'
										>
											<Github size={20} />
										</a>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

				<div className='text-center mt-12'>
					<a
						href='https://github.com/dharnnyel'
						target='_blank'
						className='flex items-center w-fit cosmic-button gap-2 mx-auto'
					>
						Check my Github <ArrowRight size={16} />
					</a>
				</div>
			</div>
		</section>
	);
};

export default Projects;
