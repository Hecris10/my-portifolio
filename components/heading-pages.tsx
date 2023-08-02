const HeadingPages = ({
  title,
  subtitle,
}: {
  title: string
  subtitle: string
}) => (
  <div className="flex flex-col items-start gap-2">
    <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl md:text-6xl">
      {title}
    </h1>
    <h2 className="prose text-lg text-gray-600 dark:text-gray-400">
      {subtitle}
    </h2>
  </div>
)

export default HeadingPages
