import { ProjectProps } from "@/components/ui/projects/project-cointaier"

export const getProjects = () => {
  return new Promise<ProjectProps[]>((resolve, reject) => {
    setTimeout(async () => {
      try {
        const res = await fetch(
          "https://run.mocky.io/v3/7c155e66-b76a-4594-972d-2c4a960a975b",
          {
            cache: "no-store",
          }
        )
        if (res.ok) {
          const data = await res.json()
          console.log("Data :", data)
          resolve(data as ProjectProps[])
        } else {
          console.log("Error")
          reject(new Error("Error fetching projects"))
        }
      } catch (error) {
        console.log("Error")
        reject(error)
      }
    }, 500) // Delay
  })
}
