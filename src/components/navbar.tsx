import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

interface NavLink {
	label: string;
	target: string;
}

const navLinks: NavLink[] = [
	{ label: "Home", target: "home" },
	{ label: "Background", target: "background" },
	{ label: "Experience", target: "experience" },
	{ label: "Projects", target: "projects" },
	{ label: "Skills", target: "skills" },
];

const Navbar = () => {
	const [activeSection, setActiveSection] = useState<string>("home");
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

	// Scroll listener to detect current section
	useEffect(() => {
		const handleScroll = () => {
			const sections = navLinks.map((link) => link.target);
			const scrollPosition = window.scrollY + 100; // Offset for navbar height

			for (let i = sections.length - 1; i >= 0; i--) {
				const section = document.getElementById(sections[i]);
				if (section && section.offsetTop <= scrollPosition) {
					setActiveSection(sections[i]);
					break;
				}
			}
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll(); // Initial check

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	const closeMobileMenu = () => {
		setIsMobileMenuOpen(false);
	};

	return (
		<nav 
			className="bg-white/90 backdrop-blur-md fixed w-full z-50 top-0 left-0 border-b border-slate-200 shadow-sm"
			role="navigation"
			aria-label="Main navigation"
		>
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-16">
					{/* Logo */}
					<div className="flex items-center">
						<Link
							to="home"
							smooth={true}
							duration={500}
							className="text-slate-900 font-bold text-xl cursor-pointer hover:text-blue-600 transition-colors duration-200"
							onClick={closeMobileMenu}
							tabIndex={0}
							aria-label="Go to home section"
						>
							Connor
						</Link>
					</div>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-1" role="menubar">
						{navLinks.map((link) => (
							<Link
								key={link.target}
								to={link.target}
								smooth={true}
								duration={500}
								spy={true}
								offset={-64}
								className={`cursor-pointer px-4 py-2 text-sm font-medium transition-all duration-200 relative rounded-md
									${
										activeSection === link.target
											? "text-blue-600"
											: "text-slate-600 hover:text-blue-600 hover:bg-slate-50"
									}
								`}
								tabIndex={0}
								role="menuitem"
								aria-label={`Navigate to ${link.label} section`}
								aria-current={activeSection === link.target ? "page" : undefined}
							>
								{link.label}
								{/* Active indicator underline */}
								<span
									className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-blue-600 rounded-full transition-all duration-200
										${activeSection === link.target ? "w-4/5 opacity-100" : "w-0 opacity-0"}
									`}
									aria-hidden="true"
								/>
							</Link>
						))}
					</div>

					{/* Mobile Menu Button - min 44x44px touch target */}
					<div className="md:hidden flex items-center">
						<button
							onClick={toggleMobileMenu}
							className="text-slate-600 hover:text-blue-600 hover:bg-slate-50 p-3 min-w-[44px] min-h-[44px] rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 flex items-center justify-center"
							aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
							aria-expanded={isMobileMenuOpen}
							aria-controls="mobile-menu"
						>
							{isMobileMenuOpen ? (
								<FaTimes className="w-6 h-6" aria-hidden="true" />
							) : (
								<FaBars className="w-6 h-6" aria-hidden="true" />
							)}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Navigation Menu - Full screen overlay */}
			{isMobileMenuOpen && (
				<div
					id="mobile-menu"
					className="md:hidden fixed top-16 left-0 right-0 bottom-0 z-[60] bg-white"
					style={{ backgroundColor: '#ffffff' }}
					role="menu"
					aria-label="Mobile navigation menu"
				>
					<div className="flex flex-col p-4 space-y-2">
						{navLinks.map((link) => (
							<Link
								key={link.target}
								to={link.target}
								smooth={true}
								duration={500}
								spy={true}
								offset={-64}
								className={`cursor-pointer px-4 py-4 min-h-[48px] text-lg font-medium rounded-lg transition-all duration-200 flex items-center bg-white
									${
										activeSection === link.target
											? "text-blue-600 bg-blue-50"
											: "text-slate-700 hover:text-blue-600 hover:bg-slate-100"
									}
								`}
								style={{ backgroundColor: activeSection === link.target ? '#eff6ff' : '#ffffff' }}
								onClick={closeMobileMenu}
								tabIndex={0}
								role="menuitem"
								aria-label={`Navigate to ${link.label} section`}
								aria-current={activeSection === link.target ? "page" : undefined}
							>
								{link.label}
							</Link>
						))}
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
