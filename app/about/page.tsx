import HeadingPages from "@/components/heading-pages"
import JobCard, { JobCardProps } from "@/components/job-card"

const heading = {
  title: "About Me",
  subtitle: "Get to know a little more about my career and my life",
}

const About = () => {
  return (
    <section className="container grid w-full items-center gap-6 pb-8 pt-6 md:py-10">
      <HeadingPages {...heading} />
      <div className="flex flex-col items-start gap-2">
        <p className="prose slide-left text-lg text-gray-600 dark:text-gray-400">
          I am a software developer with 5 years of experience in the area. I
          have worked with several technologies, but I have focused on the
          Javascript ecosystem, especially with React and Node.js.
        </p>
      </div>
      <div className="flex w-full flex-col">
        {jobList.map((j) => (
          <JobCard key={j.id} {...j} />
        ))}
      </div>
    </section>
  )
}

export default About

const jobList: JobCardProps[] = [
  {
    id: 1,
    title: "Software Developer",
    subtitle: "",
    initialDate: new Date("2019-10-01"),
    isCurrent: true,
    techonologies: ["React", "Node.js", "Typescript", "AWS"],
    companyName: "CredPago",
    companyLogo: "emive.png",
    jobDescription:
      "✅ - Played a key role in developing Salesboom, a React and NextJS-based application that revolutionized sales and contract management for Emive, the biggest Electronic Security Company in Latin America. Using expertise in TypeScript, Chakra UI, MUI Material, and Styled-Components. Created a user-friendly interface that enables team leaders, managers, and the company board to manage sales and contracts from every part of the world with ease. Salesboom also provides valuable insights that help these stakeholders make informed decisions, ultimately resulting in increased profits for the company. ✅ - As a crucial and key member of the Frontend development team, I utilized Scrum and contributed to a DevOps culture with Microsoft Azure to ensure that Salesboom was delivered on time and to the highest standard. My work helped to streamline the sales and contract process, improve efficiency, and increase revenue for the company.✅ - Crucial and key member of the Frontend development team, utilized Scrum and contributed to a DevOps culture with Azure to ensure that Salesboom was delivered on time and to the highest standard.✅ - Helped streamline the sales and contract process, improve efficiency, and increase revenue for the company.",
  },
  {
    id: 2,
    title: "Software Developer",
    subtitle: "",
    initialDate: new Date("2019-10-01"),
    isCurrent: false,
    endDate: new Date("2021-01-01"),
    techonologies: ["React", "Node.js", "Typescript", "AWS"],
    companyName: "Fic Company",
    companyLogo: "emive.png",
    jobDescription:
      "Played a key role in developing Salesboom, a React and NextJS-based application that revolutionized sales and contract management for Emive, the biggest Electronic Security Company in Latin America. Using expertise in TypeScript, Chakra UI, MUI Material, and Styled-Components. Created a user-friendly interface that enables team leaders, managers, and the company board to manage sales and contracts from every part of the world with ease. Salesboom also provides valuable insights that help these stakeholders make informed decisions, ultimately resulting in increased profits for the company.",
  },
]
