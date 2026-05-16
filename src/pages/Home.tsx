import {
	About,
	Contact,
	HeroSection,
	Navbar,
	Projects,
	Skills,
	StarBackground,
} from '@/components';

const Home = () => {
	return (
		<div className='min-h-screen bg-background text-foreground overflow-x-hidden'>

			{/* Background Effect */}
			<StarBackground />

			{/* Navbar */}
			<Navbar />

			{/* Main Content */}
			<main>
				<HeroSection />
				<About />
				<Skills />
				<Projects />
				<Contact />
			</main>
			{/* Footer */}
		</div>
	);
};

export default Home;
