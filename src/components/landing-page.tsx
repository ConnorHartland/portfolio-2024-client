import { skills } from "../constants/skills"; // Importing the skills from the constants file
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"; // Icons for social links

const LandingPage = () => {
	return (
		<div className="min-h-screen flex flex-col lg:flex-row items-center justify-center text-white">
			{/* Left Side: Image Card */}
			<div className="lg:w-1/2 w-full flex justify-center items-center p-8">
				<div className="bg-gray-800 rounded-lg shadow-lg flex flex-col lg:flex-row overflow-hidden w-full max-w-3xl">
					{/* Left 1/3: Image and Name */}
					<div className="bg-purple-600 flex flex-col justify-center items-center lg:w-1/3 w-full p-4">
						<img
							src="https://media.licdn.com/dms/image/v2/D5603AQHqYCOJJlFo2g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1704826106246?e=1729728000&v=beta&t=sOqxiEDZI9WwR8A6FZ13Tcgbxn652r7WcveJ2yUEvGM"
							className="rounded-full h-36 w-36 object-cover mb-4"
							alt="Me"
						/>
						<h3 className="text-xl font-semibold text-white">
							Connor Hartland
						</h3>
						<h3 className="text-sm font-semibold text-slate-300">
							DevOps Engineer
						</h3>
						<h3 className="text-sm font-semibold text-slate-300">
							San Jose, CA
						</h3>
						<h3 className="text-sm font-semibold text-white">
							(4+ years of experience)
						</h3>
					</div>
					{/* Right 2/3: Social Links */}
					<div className="bg-gray-700 flex flex-col justify-center items-center w-full lg:w-2/3 p-6">
						<h4 className="text-lg font-semibold mb-4">Find Me Online</h4>
						<div className="flex space-x-6">
							<a
								href="https://github.com/ConnorHartland"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaGithub className="text-white hover:text-gray-400 text-3xl" />
							</a>
							<a
								href="https://www.linkedin.com/in/connor-hartland-88a34b114/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaLinkedin className="text-blue-500 hover:text-blue-300 text-3xl" />
							</a>
							<a href="mailto:connorhartland@gmail.com">
								<FaEnvelope className="text-red-500 hover:text-red-300 text-3xl" />
							</a>
						</div>
					</div>
				</div>
			</div>

			{/* Right Side: Headline and Skills */}
			<div className="lg:w-1/2 w-full flex justify-center items-center text-center p-8">
				<div className="max-w-2xl">
					<h1 className="text-4xl lg:text-6xl font-bold mb-4">
						Hello, I'm Connor
					</h1>
					<p className="text-lg lg:text-2xl mb-6">
						A passionate{" "}
						<span className="text-purple-600">DevOps Engineer</span> |{" "}
						<span className="text-blue-500">Software Developer</span> |{" "}
						<span className="text-green-800">Tech Enthusiast</span>
					</p>
					<h2 className="text-2xl font-semibold mb-4">Skills</h2>

					<div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-center items-center">
						{skills.map((skill, index) => (
							<div
								key={index}
								className="relative bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300 ease-in-out flex flex-col items-center"
							>
								<img
									src={skill.image}
									alt={skill.name}
									className="w-20 h-20 object-scale-down mb-4"
								/>
								{skill.name ? (
									<h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
								) : null}

								{/* Hover overlay */}
								<div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-90 transition duration-300 ease-in-out flex justify-center items-center opacity-0 hover:opacity-100 rounded-lg p-4">
									<p className="text-white text-center">{skill.description}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
