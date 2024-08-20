import { Project } from "../types"; // Adjust the path as necessary

export const projects: Project[] = [
	{
		title: "AirBNB Clone",
		description:
			"A clone of AirBNB using Next.JS and Tailwind CSS to example a complex layout. This project has a backend implementation with Firebase making it a fullstack project.",
		imageUrl:
			"https://i.ibb.co/2qhtw3H/Screen-Shot-2022-02-14-at-11-10-00-AM.png",
		liveLink: "https://air-bnb-clone-three.vercel.app/",
		githubLink: "https://github.com/ConnorHartland/AirBNB-Clone",
		technologies: ["Next.JS", "Tailwind CSS", "Firebase"],
		// blogPost: "blogs/airbnb-clone.md",
	},
	{
		title: "Instagram Clone",
		description:
			"A clone of Instagram using Next.JS and Tailwind CSS. FAKER.JS no longer is supported hence the broken circles at the top. Currently looking for a replacement.",
		imageUrl:
			"https://i.ibb.co/54QvbC3/Screen-Shot-2022-02-14-at-11-39-45-AM.png",
		liveLink: "https://hartinstagram.vercel.app/",
		githubLink: "https://github.com/ConnorHartland/instagram-clone",
		technologies: ["Next.JS", "Tailwind CSS"],
	},
	{
		title: "Spotify 2",
		description:
			"A clone of Spotify using React.JS and Tailwind CSS. In order to use the app, you must have Spotify running on your current setup. Mobile does not currently work. This uses the Spotify API.",
		imageUrl:
			"https://i.ibb.co/QpN9dpW/Screen-Shot-2022-02-14-at-11-49-34-AM.png",
		liveLink: "https://hartspotify.vercel.app/",
		githubLink: "https://github.com/ConnorHartland/instagram-clone",
		technologies: ["React.JS", "Tailwind CSS", "Spotify API"],
	},
	{
		title: "Amazon Clone",
		description:
			"A clone of Amazon using React and Tailwind and a Firebase backend. The backend is built with Firebase provided by Google. If it does not work, it most likely has expired.",
		imageUrl:
			"https://i.ibb.co/CQJCVpk/Screen-Shot-2022-02-14-at-12-03-16-PM.png",
		liveLink: "https://amazon-clone-seven-peach.vercel.app",
		githubLink: "https://github.com/ConnorHartland/Amazon-Clone",
		technologies: ["React.JS", "Tailwind CSS", "Firebase"],
	},
];
