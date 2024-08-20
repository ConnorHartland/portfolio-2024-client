import LandingPage from "./components/landing-page";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import ExperienceTimeline from "./components/work";

function App() {
	return (
		<div className="bg-gradient-to-r from-slate-800 via-slate-900 to-black gradient-shift min-h-screen">
			<Navbar />
			<div className="">
				<section id="home" className="">
					<LandingPage />
				</section>

				<section id="experience" className="  text-white">
					<ExperienceTimeline />
				</section>

				<section id="projects" className=" text-white">
					<div className="flex justify-center items-center h-full">
						<Projects />
					</div>
				</section>
			</div>
		</div>
	);
}

export default App;
