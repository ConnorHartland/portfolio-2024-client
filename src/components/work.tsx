import { workExperience } from "../constants/work"; // Adjust the path based on your structure

const ExperienceTimeline = () => {
	return (
		<div className=" text-white py-16">
			<h2 className="text-4xl text-center mb-12">Work Experience</h2>

			<div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-start space-y-12 lg:space-y-0 lg:space-x-12 px-8 ">
				{/* Horizontal Line */}

				{workExperience.map((experience, index) => (
					<div
						key={index}
						className={`relative group ${
							experience.current ? "border-white border-4" : ""
						} bg-gray-800 hover:bg-gray-700 transition duration-300 ease-in-out p-8 rounded-lg w-full lg:w-1/3 shadow-lg z-10 flex flex-col items-center`} // Center the card contents
					>
						{/* Content */}
						<img
							src={experience.image}
							alt={experience.companyName}
							className="w-24 h-24 object-contain mb-4"
						/>
						<h3 className="text-2lg font-semibold text-center mb-2">
							{experience.companyName}
						</h3>
						<h4 className="text-lg font-semibold text-blue-500 text-center mb-2">
							{experience.role}
						</h4>
						<p className="text-center text-gray-400 mb-4">{experience.dates}</p>

						{/* Scrollable Description Area */}
						<div className="max-h-0 overflow-y-scroll custom-scrollbar transition-all duration-500 ease-in-out group-hover:max-h-96">
							<ul className="text-white text-lg list-disc list-inside space-y-2">
								{experience.description.map((point, idx) => (
									<li key={idx}>{point}</li>
								))}
							</ul>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ExperienceTimeline;
