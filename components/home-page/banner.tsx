import Image from "next/image"

import { siteConfig } from "@/config/site"
import TechonolodiesCarousel from "@/components/carousel"

const Banner = (): React.ReactElement => (
  <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
    <div className="flex max-w-[980px] flex-col items-start gap-2">
      <Image
        className="mb-4 h-20 w-20 rounded-full bg-zinc-100 object-cover dark:bg-zinc-800"
        alt="profile"
        placeholder="blur"
        src={require("@/public/" + siteConfig.profilePic)}
      />
      <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
        Hi, My name is Helaman <br className="hidden sm:inline" />I am a
        Software Engineer who loves technology
      </h1>

      <p className="max-w-[700px] text-lg text-muted-foreground">
        {` Welcome to discover what I've been building.`}
      </p>
    </div>
    <div className="flex gap-4">
      {/* <Link
          href={siteConfig.links.docs}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants()}
        >
          Documentation
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline" })}
        >
          GitHub
        </Link> */}

      <div className="flex flex-col gap-3 text-xl">
        <h2 className="mb-4 text-3xl font-semibold tracking-tight transition-colors">
          {`My favorite technologies`}
        </h2>
        <TechonolodiesCarousel />
      </div>
    </div>
  </section>
)

export default Banner
