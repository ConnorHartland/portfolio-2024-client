import { backgroundData, EducationEntry } from "../constants/background";

// Education Card Sub-component
interface EducationCardProps {
	education: EducationEntry;
}

const EducationCard = ({ education }: EducationCardProps) => {
	return (
		<article className="bg-white border border-slate-200 rounded-lg p-6 space-y-3">
			<header className="space-y-1">
				<h4 className="text-xl font-semibold text-slate-900">
					{education.institution}
				</h4>
				<p className="text-lg text-blue-600">
					{education.degree} in {education.field}
				</p>
				<p className="flex items-center gap-2 text-sm text-slate-600">
					<time dateTime={String(education.graduationYear)}>{education.graduationYear}</time>
					<span aria-hidden="true">•</span>
					<span>{education.location}</span>
				</p>
			</header>
			{education.achievements && education.achievements.length > 0 && (
				<ul className="space-y-1 text-sm text-slate-600" aria-label="Achievements">
					{education.achievements.map((achievement, index) => (
						<li key={index} className="flex items-start gap-2">
							<span className="text-blue-600 mt-1" aria-hidden="true">•</span>
							<span>{achievement}</span>
						</li>
					))}
				</ul>
			)}
		</article>
	);
};

// Main Background Component
const Background = () => {
	return (
		<article className="py-16 lg:py-24">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-8 sm:mb-12 tracking-tight">
					Background
				</h2>

				{/* Two-column responsive layout - stacks on mobile, two columns on tablet+ */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12">
					{/* Left column - Main content (60% on desktop, 50% on tablet) */}
					<div className="md:col-span-1 lg:col-span-3 space-y-6 sm:space-y-8">
						{/* Introduction */}
						<section aria-labelledby="intro-heading" className="space-y-4">
							<h3 id="intro-heading" className="text-2xl font-semibold text-slate-900">
								Introduction
							</h3>
							<p className="text-lg leading-relaxed text-slate-700">
								{backgroundData.introduction}
							</p>
						</section>

						{/* Career Journey */}
						<section aria-labelledby="career-heading" className="space-y-4">
							<h3 id="career-heading" className="text-2xl font-semibold text-slate-900">
								Career Journey
							</h3>
							<div className="space-y-4">
								<p className="text-lg leading-relaxed text-slate-700">
									{backgroundData.careerJourney.start}
								</p>
								<ul className="space-y-3" aria-label="Career transitions">
									{backgroundData.careerJourney.transitions.map(
										(transition, index) => (
											<li
												key={index}
												className="flex items-start gap-3 text-lg leading-relaxed text-slate-700"
											>
												<span className="text-blue-600 font-bold mt-1" aria-hidden="true">→</span>
												<span>{transition}</span>
											</li>
										)
									)}
								</ul>
								<p className="text-lg leading-relaxed text-slate-700">
									{backgroundData.careerJourney.currentFocus}
								</p>
							</div>
						</section>

						{/* Personal Statement */}
						<section aria-labelledby="statement-heading" className="space-y-4">
							<h3 id="statement-heading" className="text-2xl font-semibold text-slate-900">
								Personal Statement
							</h3>
							<p className="text-lg leading-relaxed text-slate-700">
								{backgroundData.personalStatement}
							</p>
						</section>
					</div>

					{/* Right column - Education & Certifications (40% on desktop, 50% on tablet) */}
					<aside className="md:col-span-1 lg:col-span-2 space-y-6 sm:space-y-8">
						{/* Education */}
						<section aria-labelledby="education-heading" className="space-y-4">
							<h3 id="education-heading" className="text-2xl font-semibold text-slate-900">
								Education
							</h3>
							<div className="space-y-4">
								{backgroundData.education.map((edu, index) => (
									<EducationCard key={index} education={edu} />
								))}
							</div>
						</section>

						{/* Certifications */}
						<section aria-labelledby="certs-heading" className="space-y-4">
							<h3 id="certs-heading" className="text-2xl font-semibold text-slate-900">
								Certifications
							</h3>
							<ul className="space-y-2" aria-label="Professional certifications">
								{backgroundData.certifications.map((cert, index) => (
									<li
										key={index}
										className="flex items-start gap-2 text-base text-slate-700"
									>
										<span className="text-blue-600 font-bold mt-1" aria-hidden="true">✓</span>
										<span>{cert}</span>
									</li>
								))}
							</ul>
						</section>
					</aside>
				</div>
			</div>
		</article>
	);
};

export default Background;
