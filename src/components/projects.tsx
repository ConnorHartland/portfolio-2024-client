import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Project } from "../types";
import { projects } from "../constants/projects";
import Modal from "./modal";
import SafeImage from "./safe-image";

const Projects = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [currentMarkdownFile, setCurrentMarkdownFile] = useState<string | null>(
		null
	);
	const [expandedProjects, setExpandedProjects] = useState<Set<number>>(
		new Set()
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

	const toggleExpanded = (index: number) => {
		setExpandedProjects((prev) => {
			const newSet = new Set(prev);
			if (newSet.has(index)) {
				newSet.delete(index);
			} else {
				newSet.add(index);
			}
			return newSet;
		});
	};

	const truncateDescription = (description: string, index: number) => {
		const isExpanded = expandedProjects.has(index);
		if (description.length <= 150 || isExpanded) {
			return description;
		}
		return description.substring(0, 150) + "...";
	};

	const shouldShowReadMore = (description: string) => {
		return description.length > 150;
	};

	return (
		<article className="py-16 lg:py-24">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-8 sm:mb-12">
					My Projects
				</h2>
				<div 
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
					role="list"
					aria-label="Project portfolio"
				>
					{projects.map((project: Project, index: number) => (
						<article
							key={index}
							className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col"
							role="listitem"
						>
							{project.imageUrl && (
								<figure className="aspect-video w-full overflow-hidden">
									<SafeImage
										src={project.imageUrl}
										alt={project.imageAlt || `Screenshot of ${project.title} project`}
										className="w-full h-full object-cover"
									/>
								</figure>
							)}
							<div className="p-4 sm:p-6 flex flex-col flex-grow">
								<h3 className="text-xl font-semibold text-slate-900 mb-3">
									{project.title}
								</h3>
								<p className="text-slate-600 mb-4 flex-grow">
									{truncateDescription(project.description, index)}
									{shouldShowReadMore(project.description) && (
										<button
											onClick={() => toggleExpanded(index)}
											className="text-blue-600 hover:text-blue-700 ml-1 font-medium"
											aria-expanded={expandedProjects.has(index)}
											aria-label={expandedProjects.has(index) ? `Show less about ${project.title}` : `Read more about ${project.title}`}
										>
											{expandedProjects.has(index) ? "Show less" : "Read more"}
										</button>
									)}
								</p>
								<ul className="flex flex-wrap gap-2 mb-4" aria-label="Technologies used">
									{project.technologies.map((tech, techIndex) => (
										<li
											key={techIndex}
											className="bg-slate-100 text-slate-700 text-sm rounded-full px-3 py-1"
										>
											{tech}
										</li>
									))}
								</ul>
								<nav className="flex items-center gap-3 sm:gap-4 mt-auto" aria-label={`Links for ${project.title}`}>
									<a
										href={project.githubLink}
										target="_blank"
										rel="noopener noreferrer"
										className="text-slate-900 hover:text-slate-700 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
										aria-label={`View ${project.title} source code on GitHub`}
									>
										<FaGithub className="text-2xl" aria-hidden="true" />
									</a>
									{project.liveLink && (
										<a
											href={project.liveLink}
											target="_blank"
											rel="noopener noreferrer"
											className="text-blue-600 hover:text-blue-700 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
											aria-label={`View ${project.title} live demo`}
										>
											<FaExternalLinkAlt className="text-xl" aria-hidden="true" />
										</a>
									)}
									{project.blogPost && (
										<button
											onClick={() => openModal(project.blogPost!)}
											className="text-blue-600 hover:text-blue-700 font-medium transition-colors min-h-[44px] px-2"
											aria-label={`Read blog post about ${project.title}`}
										>
											Read More
										</button>
									)}
								</nav>
							</div>
						</article>
					))}
				</div>
			</div>

			{isModalOpen && currentMarkdownFile && (
				<Modal
					isOpen={isModalOpen}
					onClose={closeModal}
					markdownFile={currentMarkdownFile}
				/>
			)}
		</article>
	);
};

export default Projects;
