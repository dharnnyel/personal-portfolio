import {
	About,
	HeroSection,
	Navbar,
	Skills,
	StarBackground,
	ThemeToggle,
} from '@/components';

const Home = () => {
	return (
		<div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
			{/* Theme Toggle */}
			<ThemeToggle />

			{/* Background Effect */}
			<StarBackground />

			{/* Navbar */}
			<Navbar />

			{/* Main Content */}
			<main>
				<HeroSection />
				<About />
				<Skills />
			</main>
			{/* Footer */}
		</div>
	);
};

export default Home;
