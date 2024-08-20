import { Link } from "react-scroll";

const Navbar = () => {
	return (
		<nav className="bg-gray-800 fixed w-full z-50 top-0 left-0 shadow-lg">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-16">
					<div className="flex items-center">
						<Link
							to="home"
							smooth={true}
							duration={500}
							className="text-white font-bold text-xl cursor-pointer"
						>
							Connor
						</Link>
					</div>
					<div className="flex items-center space-x-8">
						<Link
							to="home"
							smooth={true}
							duration={500}
							className="text-gray-300 hover:text-white cursor-pointer px-3 py-2 rounded-md text-sm font-medium"
						>
							Home
						</Link>

						<Link
							to="experience"
							smooth={true}
							duration={500}
							className="text-gray-300 hover:text-white cursor-pointer px-3 py-2 rounded-md text-sm font-medium"
						>
							Experience
						</Link>
						<Link
							to="projects"
							smooth={true}
							duration={500}
							className="text-gray-300 hover:text-white cursor-pointer px-3 py-2 rounded-md text-sm font-medium"
						>
							Projects
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
