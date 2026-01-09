import { workExperience } from "../constants/work";
import SafeImage from "./safe-image";

const ExperienceTimeline = () => {
	// Sort experiences by start date in reverse chronological order (most recent first)
	const sortedExperiences = [...workExperience].sort((a, b) => {
		// Extract year from dates string (format: "Mon YYYY - Present" or "Mon YYYY - Mon YYYY")
		const getStartDate = (dateStr: string) => {
			const parts = dateStr.split(" - ")[0].split(" ");
			const month = parts[0];
			const year = parseInt(parts[1]);
			const monthMap: { [key: string]: number } = {
				Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
				Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11
			};
			return new Date(year, monthMap[month] || 0);
		};
		
		return getStartDate(b.dates).getTime() - getStartDate(a.dates).getTime();
	});

	return (
		<article className="py-16 lg:py-24">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-slate-900">
					Work Experience
				</h2>

				<div className="space-y-4 sm:space-y-6 lg:space-y-8" role="list" aria-label="Work experience entries">
					{sortedExperiences.map((experience, index) => (
						<article
							key={index}
							className="bg-white border border-slate-200 rounded-xl p-4 sm:p-6 lg:p-8 hover:shadow-md transition-shadow duration-300"
							role="listitem"
						>
							{/* Card Header - responsive layout for mobile */}
							<header className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 mb-4">
								<SafeImage
									src={experience.image}
									alt={`${experience.companyName} company logo`}
									className="w-12 h-12 sm:w-16 sm:h-16 object-contain flex-shrink-0"
								/>
								<div className="flex-grow">
									<div className="flex items-center gap-2 flex-wrap">
										<h3 className="text-xl font-semibold text-slate-900">
											{experience.companyName}
										</h3>
										{experience.current && (
											<span 
												className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full"
												aria-label="Current position"
											>
												Current
											</span>
										)}
									</div>
									<p className="text-lg text-blue-600 font-medium mt-1">
										{experience.role}
									</p>
									<p className="flex flex-wrap gap-3 mt-2 text-sm text-slate-600">
										<time>{experience.dates}</time>
										<span aria-hidden="true">•</span>
										<span>{experience.location}</span>
									</p>
								</div>
							</header>

							{/* Description */}
							<ul className="space-y-2 text-slate-700" aria-label="Key responsibilities and achievements">
								{experience.description.map((point, idx) => (
									<li key={idx} className="flex gap-2">
										<span className="text-blue-600 mt-1.5" aria-hidden="true">•</span>
										<span>{point}</span>
									</li>
								))}
							</ul>
						</article>
					))}
				</div>
			</div>
		</article>
	);
};

export default ExperienceTimeline;
