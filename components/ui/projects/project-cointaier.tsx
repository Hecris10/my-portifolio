import { getProjects } from "@/app/services/projects"

import ProjectCard from "./project-card"

export interface ProjectProps {
  title: string
  description: string
  url: string
  image: string
  stacks: string[]
}

const ProjectsContainer = async () => {
  const data: ProjectProps[] = await getProjects()

  return (
    <div className="m-auto flex flex-wrap gap-8 justify-center md:justify-evenly lg:justify-between">
      {data.map((project, index) => (
        <div className="max-w-sm" key={index}>
          <ProjectCard {...project} />
        </div>
      ))}
    </div>
  )
}

export default ProjectsContainer
