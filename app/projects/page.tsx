import { Suspense } from "react"

import ProjectsContainer from "@/components/ui/projects/project-cointaier"
import ProjectsContainerSkeleton from "@/components/ui/projects/projects-container-skeleton"
import HeadingPages from "@/components/heading-pages"

const heading = {
  title: "My Projects",
  subtitle: "Some of the projects I've beeen building",
}

const Projects = () => {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <HeadingPages {...heading} />
      <div className="flex flex-col items-start gap-2">
        <Suspense fallback={<ProjectsContainerSkeleton />}>

          <ProjectsContainer />
        </Suspense>
      </div>
    </section>
  )
}

export default Projects
