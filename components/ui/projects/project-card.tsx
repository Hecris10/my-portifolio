import Image from "next/image"
import Link from "next/link"

import { GetIcon } from "@/components/icons"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../card"
import { Skeleton } from "../skeleton"
import { ProjectProps } from "./project-cointaier"

const ProjectCard = ({
  title,
  description,
  url,
  image,
  stacks,
}: ProjectProps) => {
  return (
    <Card className="mx-0">
      <CardHeader>
        <CardTitle>
          <Link
            className="underline-offset-4 hover:underline"
            target="_blank"
            href={url}
          >
            {title}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="card-element relative mb-4">
          <Link
            target="_blank"
            className="card-icons z-30 flex flex-col opacity-0 hover:opacity-100"
            href={url}
          >
            <div className="icon-single m-auto flex items-center">
              {stacks.map((stack, index) => (
                <div key={index} className="items-center justify-center">
                  <>{GetIcon(stack)}</>
                </div>
              ))}
            </div>
          </Link>

          <Image
            src={require("@/public/projects/" + image)}
            alt={title}
            placeholder="blur"
            className="card-image max-w-200 z-0 h-full w-full rounded-lg border-2 hover:blur-sm"
          />
        </div>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  )
}

export const ProjectCardSkeleton = () => (
  <Card>
    <CardHeader>
      <div className="underline-offset-4 hover:underline">
        <Skeleton className="h-4 w-[150px]" />
      </div>
    </CardHeader>
    <CardContent>
      <div className="mb-4">
        <div className="flex flex-col">
          <Skeleton className="h-275 w-80" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Skeleton className="h-4 w-[270px]" />
        <Skeleton className="h-4 w-[180px]" />
      </div>
    </CardContent>
  </Card>
)

export default ProjectCard
