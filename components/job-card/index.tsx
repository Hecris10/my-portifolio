import Image from "next/image"

import JobCardDescription from "@/components/job-card/job-card-description"

export type JobCardProps = {
  id: number
  title: string
  subtitle: string
  initialDate: Date
  techonologies?: string[]
  jobDescription: string
  companyName: string
  companyLogo: string
  companyLink?: string
} & (
  | {
      isCurrent: false
      endDate: Date
    }
  | {
      isCurrent: true
    }
)
const JobCard = (props: JobCardProps) => {
  const {
    title,
    subtitle,
    initialDate,
    techonologies,
    isCurrent,
    companyName,
    companyLogo,
    jobDescription,
  } = props

  return (
    <div className="flex flex-col  p-3">
      <div className="flex flex-col justify-start align-middle">
        {/* title and subtitle */}
        <div className="flex w-full justify-between align-top">
          <div className="flex w-full flex-col">
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
              {title}
            </h3>
            {subtitle && (
              <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                {subtitle}
              </h4>
            )}
          </div>

          <span className="w-full max-w-[170px] text-center text-sm text-gray-600 dark:text-gray-400">
            {initialDate.toLocaleDateString()}
            {isCurrent
              ? " - Present"
              : ` - ${initialDate.toLocaleDateString()}`}
          </span>
        </div>

        {/* job description and pic */}
        <div className="flex w-full justify-start  gap-4 bg-transparent align-top">
          {/* Company Logo  */}
          <Image
            placeholder="blur"
            className="h-48 w-48 rounded-full bg-transparent "
            src={require("@/public/companies/" + companyLogo)}
            alt={companyName}
          />

          <div className="flex flex-col justify-start gap-2 align-middle">
            {/* Company Name*/}
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
              {companyName}
            </h3>
            {/* job description */}
            <JobCardDescription description={jobDescription} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobCard
