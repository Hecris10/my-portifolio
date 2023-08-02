import ProjectCard, { ProjectCardSkeleton } from "./project-card"

const ProjectsContainerSkeleton = () => {
  return (
    <div className="m-auto flex  flex-wrap justify-evenly gap-8">
      <div className="max-w-sm">
        <ProjectCardSkeleton />
      </div>
      <div className="max-w-sm">
        <ProjectCardSkeleton />
      </div>
      <div className="max-w-sm">
        <ProjectCardSkeleton />
      </div>

      <div className="max-w-sm">
        <ProjectCardSkeleton />
      </div>
      <div className="max-w-sm">
        <ProjectCardSkeleton />
      </div>
      <div className="max-w-sm">
        <ProjectCardSkeleton />
      </div>
    </div>
  )
}

export default ProjectsContainerSkeleton
