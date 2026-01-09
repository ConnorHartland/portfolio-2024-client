import LandingPage from "./components/landing-page";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import ExperienceTimeline from "./components/work";
import Skills from "./components/skills";
import Background from "./components/background";
import ErrorBoundary from "./components/error-boundary";

function App() {
	return (
		<div className="bg-white min-h-screen overflow-x-hidden">
			{/* Skip link for keyboard users */}
			<a href="#home" className="skip-link">
				Skip to main content
			</a>
			<Navbar />
			<main role="main" id="main-content">
				<section id="home" aria-label="Introduction">
					<ErrorBoundary sectionName="Introduction">
						<LandingPage />
					</ErrorBoundary>
				</section>

				<section id="background" className="bg-gray-50" aria-label="Background and Education">
					<ErrorBoundary sectionName="Background">
						<Background />
					</ErrorBoundary>
				</section>

				<section id="experience" className="bg-white" aria-label="Work Experience">
					<ErrorBoundary sectionName="Work Experience">
						<ExperienceTimeline />
					</ErrorBoundary>
				</section>

				<section id="projects" className="bg-gray-50" aria-label="Projects Portfolio">
					<ErrorBoundary sectionName="Projects">
						<Projects />
					</ErrorBoundary>
				</section>

				<section id="skills" className="bg-white" aria-label="Technical Skills">
					<ErrorBoundary sectionName="Skills">
						<Skills />
					</ErrorBoundary>
				</section>
			</main>
		</div>
	);
}

export default App;
