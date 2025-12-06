export enum SkillCategory {
	Cloud = "Cloud & Infrastructure",
	DevOps = "DevOps & Automation",
	Frontend = "Frontend Development",
	Backend = "Backend Development",
	Database = "Databases",
}

export interface Skill {
	name: string;
	image: string;
	description: string | null;
	category: SkillCategory;
}

const skills: Skill[] = [
	{
		name: "AWS",
		image: "aws.png",
		description: "Expert in managing and deploying AWS infrastructure.",
		category: SkillCategory.Cloud,
	},
	{
		name: "Ansible",
		image: "ansible.png",
		description: "Expert in managing and deploying AWS infrastructure.",
		category: SkillCategory.DevOps,
	},
	{
		name: "Docker",
		image: "docker.png",
		description: "Skilled in containerization and orchestration.",
		category: SkillCategory.DevOps,
	},
	{
		name: "Terraform",
		image: "terraform.png",
		description: "Proficient in Infrastructure as Code (IaC) with Terraform.",
		category: SkillCategory.DevOps,
	},
	{
		name: "React",
		image: "react.png",
		description: "Experienced in building dynamic frontends with React.",
		category: SkillCategory.Frontend,
	},
	{
		name: "TypeScript",
		image: "typescript.png",
		description: "Experienced in the industry leading compiled Typescript.",
		category: SkillCategory.Frontend,
	},
	{
		name: "Node.js",
		image: "node.png",
		description: null,
		category: SkillCategory.Backend,
	},
	{
		name: "MongoDB",
		image: "mongo.png",
		description: null,
		category: SkillCategory.Database,
	},
	// Add more skills as needed
];

export { skills };
