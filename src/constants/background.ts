export interface EducationEntry {
	institution: string;
	degree: string;
	field: string;
	graduationYear: number;
	location: string;
	achievements?: string[];
}

export interface BackgroundData {
	introduction: string;
	careerJourney: {
		start: string;
		transitions: string[];
		currentFocus: string;
	};
	education: EducationEntry[];
	certifications: string[];
	personalStatement: string;
}

export const backgroundData: BackgroundData = {
	introduction:
		"I'm a DevOps Engineer and Software Developer with over 4 years of experience building scalable infrastructure and full-stack applications. My journey in technology has been driven by a passion for automation, cloud architecture, and creating efficient solutions that bridge the gap between development and operations.",
	careerJourney: {
		start: "My career began in technical support at Lam Research, where I discovered my passion for automation through Python and PowerShell scripting. This experience laid the foundation for my transition into software engineering.",
		transitions: [
			"Moved into software engineering at Celltrio, developing robotics dashboards and real-time monitoring systems using React and .NET Core.",
			"Expanded my full-stack capabilities at RentCheck, working with AWS, Firebase, and React Native for cross-platform development.",
			"Joined Foundation Finance Company as a Full Stack Developer, leading MERN stack projects and implementing comprehensive testing strategies.",
			"Transitioned to DevOps Engineer role, focusing on infrastructure as code with Terraform and Ansible, while optimizing CI/CD pipelines.",
		],
		currentFocus:
			"Currently, I'm focused on cloud infrastructure automation, containerization strategies, and building robust CI/CD pipelines that enable teams to deploy with confidence. I'm particularly interested in the intersection of infrastructure automation and developer experience.",
	},
	education: [
		{
			institution: "California State University, East Bay",
			degree: "Bachelor of Science",
			field: "Computer Science",
			graduationYear: 2020,
			location: "Hayward, California",
			achievements: [
				"Focused on software engineering and systems architecture",
				"Completed coursework in cloud computing and distributed systems",
			],
		},
	],
	certifications: [
		"AWS Certified Solutions Architect (In Progress)",
		"HashiCorp Terraform Associate (Planned)",
	],
	personalStatement:
		"Beyond the technical skills, I believe in the power of clear communication and collaboration. Whether I'm acting as a Product Owner managing sprints in Jira or working with hardware engineers to integrate software systems, I strive to bridge technical and business perspectives. I'm always eager to learn new technologies and share knowledge with my team.",
};
