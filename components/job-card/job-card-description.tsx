"use client"

import { useState } from "react"

const JobCardDescription = ({ description }: { description: string }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="flex w-full flex-col gap-2">
      <div
        className={`${
          isExpanded ? "h-auto" : "h-[150px]"
        } easy-out h-full w-full gap-2 overflow-hidden py-1 transition-all delay-300 duration-300 active:text-black active:dark:text-white`}
      >
        <p className="prose text-justify text-lg text-gray-600 dark:text-gray-400">
          {description}
        </p>
      </div>
      <div
        onClick={() => setIsExpanded((isExpanded) => !isExpanded)}
        className="mx-auto w-full cursor-pointer justify-center rounded-lg py-1 align-middle delay-300 hover:bg-gray-400/10"
      >
        <div
          className={`${
            isExpanded ? "rotate-180" : "rotate-0 animate-bounce"
          } mx-auto flex w-10 justify-center align-middle  transition-transform duration-300 ease-in-out`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`m-auto h-6 w-6 ${
              !isExpanded && "text-gray-600 dark:text-gray-400"
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default JobCardDescription
