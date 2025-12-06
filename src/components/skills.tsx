import { skills, SkillCategory } from "../constants/skills";
import SafeImage from "./safe-image";

const Skills = () => {
	// Group skills by category
	const skillsByCategory = skills.reduce((acc, skill) => {
		if (!acc[skill.category]) {
			acc[skill.category] = [];
		}
		acc[skill.category].push(skill);
		return acc;
	}, {} as Record<SkillCategory, typeof skills>);

	// Get all categories in a consistent order
	const categories = Object.values(SkillCategory);

	return (
		<article className="py-16 lg:py-24">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Section Heading */}
				<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-8 sm:mb-12 text-center tracking-tight">
					Technical Skills
				</h2>

				{/* Skills grouped by category */}
				<div className="space-y-8 sm:space-y-10 lg:space-y-12" role="list" aria-label="Skills by category">
					{categories.map((category) => {
						const categorySkills = skillsByCategory[category];
						
						// Skip categories with no skills
						if (!categorySkills || categorySkills.length === 0) {
							return null;
						}

						const categoryId = category.toLowerCase().replace(/[^a-z0-9]/g, '-');

						return (
							<section 
								key={category} 
								data-category={category}
								aria-labelledby={`category-${categoryId}`}
								role="listitem"
							>
								{/* Category Heading */}
								<h3 
									id={`category-${categoryId}`}
									className="text-xl sm:text-2xl font-semibold text-slate-800 mb-4 sm:mb-6"
								>
									{category}
								</h3>

								{/* Skill Grid - responsive columns */}
								<ul 
									className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
									aria-label={`${category} skills`}
								>
									{categorySkills.map((skill) => (
										<li
											key={skill.name}
											className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-3 sm:px-4 py-2 sm:py-3 min-h-[44px] hover:shadow-md transition-shadow duration-300"
										>
											{/* Skill Icon */}
											<SafeImage
												src={`/${skill.image}`}
												alt={`${skill.name} logo`}
												className="w-6 h-6 sm:w-8 sm:h-8 object-contain flex-shrink-0"
											/>
											
											{/* Skill Name */}
											<span className="text-sm sm:text-base text-slate-900 font-medium truncate">
												{skill.name}
											</span>
										</li>
									))}
								</ul>
							</section>
						);
					})}
				</div>
			</div>
		</article>
	);
};

export default Skills;
