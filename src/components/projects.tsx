import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Project } from "../types"; // Import the Project type
import { projects } from "../constants/projects"; // Your project data
import Modal from "./modal"; // Modal component

const Projects = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [currentMarkdownFile, setCurrentMarkdownFile] = useState<string | null>(
		null
	);

	const openModal = (markdownFile: string) => {
		console.log(markdownFile);
		setCurrentMarkdownFile(markdownFile);
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
		setCurrentMarkdownFile(null);
	};

	return (
		<div className="text-white py-16">
			<h2 className="text-4xl text-center mb-12">My Projects</h2>
			<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{projects.map((project: Project, index: number) => (
					<div
						key={index}
						className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300 ease-in-out"
					>
						<h3 className="text-2xl font-bold mb-4">{project.title}</h3>
						{project.imageUrl && (
							<img
								src={project.imageUrl}
								alt={project.title}
								className="w-full h-48 object-cover rounded-lg mb-4"
							/>
						)}
						<p className="text-gray-300 mb-4">{project.description}</p>
						<div className="flex flex-wrap mb-4">
							{project.technologies.map((tech, techIndex) => (
								<span
									key={techIndex}
									className="bg-purple-600 text-xs text-white py-1 px-2 rounded-full mr-2 mb-2"
								>
									{tech}
								</span>
							))}
						</div>
						<div className="flex items-center space-x-4">
							<a
								href={project.githubLink}
								target="_blank"
								rel="noopener noreferrer"
								className="text-white hover:text-gray-400"
							>
								<FaGithub className="text-2xl" />
							</a>
							{project.liveLink && (
								<a
									href={project.liveLink}
									target="_blank"
									rel="noopener noreferrer"
									className="text-white hover:text-gray-400"
								>
									<FaExternalLinkAlt className="text-2xl" />
								</a>
							)}
							{project.blogPost && (
								<button
									onClick={() => openModal(project.blogPost!)}
									className="text-purple-500 hover:text-purple-300"
								>
									Read More
								</button>
							)}
						</div>
					</div>
				))}
			</div>

			{/* Modal for rendering the markdown blog post */}
			{isModalOpen && currentMarkdownFile && (
				<Modal
					isOpen={isModalOpen}
					onClose={closeModal}
					markdownFile={currentMarkdownFile}
				/>
			)}
		</div>
	);
};

export default Projects;
