import { socialLinks } from "../constants/social";
import { Link } from "react-scroll";
import SafeImage from "./safe-image";

const LandingPage = () => {
	return (
		<header className="min-h-screen flex items-center justify-center bg-white">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
				{/* Profile Image */}
				<figure className="flex justify-center mb-8">
					<SafeImage
						src="https://media.licdn.com/dms/image/v2/D5603AQHqYCOJJlFo2g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1704826106246?e=1766620800&v=beta&t=DGp5imss3o_Fu0c4bYRwMcu0qkJi723RzGSt7iCSGfs"
						alt="Connor Hartland - DevOps Engineer and Software Developer"
						className="w-32 h-32 rounded-full object-cover shadow-md"
					/>
				</figure>

				{/* Name */}
				<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 tracking-tight">
					Connor Hartland
				</h1>

				{/* Title */}
				<p className="text-xl sm:text-2xl lg:text-3xl text-slate-600 mb-4" role="doc-subtitle">
					DevOps Engineer | Software Developer
				</p>

				{/* Tagline */}
				<p className="text-base sm:text-lg lg:text-xl text-slate-500 mb-8 max-w-2xl mx-auto px-2">
					Building scalable cloud infrastructure and full-stack applications with 4+ years of experience
				</p>

				{/* Social Links - min 44x44px touch targets for mobile */}
				<nav aria-label="Social media links" className="flex justify-center space-x-4 sm:space-x-6 mb-10">
					{socialLinks.map((link) => {
						const Icon = link.icon;
						return (
							<a
								key={link.platform}
								href={link.url}
								target={link.platform !== "Email" ? "_blank" : undefined}
								rel={link.platform !== "Email" ? "noopener noreferrer" : undefined}
								className={`${link.color} transition-colors duration-300 min-w-[44px] min-h-[44px] flex items-center justify-center`}
								aria-label={`Visit ${link.platform} profile`}
							>
								<Icon className="text-3xl" aria-hidden="true" />
							</a>
						);
					})}
				</nav>

				{/* Call-to-Action Button - min 44px height for touch targets */}
				<Link
					to="projects"
					smooth={true}
					duration={500}
					className="inline-block bg-blue-600 text-white px-8 py-3 min-h-[44px] rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-300 cursor-pointer"
					role="button"
					tabIndex={0}
					aria-label="View my projects"
				>
					View My Work
				</Link>
			</div>
		</header>
	);
};

export default LandingPage;
