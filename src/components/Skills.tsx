import { skills } from '@/lib/data';
import React, { useState } from 'react';

type SkillsProps = {};

const Skills: React.FC<SkillsProps> = props => {
	const categories = [
		'All',
		...Array.from(
			new Set(skills.map(skill => skill.category))
		),
	];

	const [activeCategory, setActiveCategory] =
		useState('All');

	const filteredSkills =
		activeCategory === 'All'
			? skills
			: skills.filter(
					skill => skill.category === activeCategory
			  );

	return (
		<section
			id='skills'
			className='py-24 px-4 relative'
		>
			<div className='container mx-auto max-w-5xl'>
				<h2 className='text-4xl md:text-5xl font-bold mb-12 text-center'>
					My <span className='text-primary'>Skills</span>
				</h2>

				<div className='flex flex-wrap justify-center items-center gap-5 mb-6'>
					{categories.map((category, index) => {
						const isOdd =
							categories.length % 2 === 1 &&
							index === categories.length - 1;
						return (
							<button
								key={category}
								onClick={() => setActiveCategory(category)}
								className={`cursor-pointer rounded-lg px-4 py-2 capitalize transition-colors duration-300 ${
									activeCategory === category
										? 'bg-primary font-semibold'
										: 'border border-primary card-hover'
								} ${
									isOdd
										? 'col-span-2 px-6 min-[468px]:col-span-1 justify-self-center min-[468px]:justify-self-auto'
										: ''
								}`}
							>
								{category}
							</button>
						);
					})}
				</div>

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
					{filteredSkills.map((skill, index) => {
						return (
							<div
								key={index}
								className='glass p-6 rounded-lg shadow-sm card-hover'
							>
								<div className='text-left mb-4'>
									<h3 className='font-semibold text-lg'>
										{skill.name}
									</h3>
								</div>
								<div className='w-full bg-background/50 h-2 rounded-full overflow-hidden'>
									<div
										className='bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]'
										style={{ width: `${skill.level}%` }}
									/>
								</div>
								<div className='text-right mt-2'>
									<span className='text-sm text-muted-foreground'>
										{skill.level}
									</span>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Skills;
