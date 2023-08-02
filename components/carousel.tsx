"use client"

import { get } from "http"
import { useEffect, useState } from "react"
import Image from "next/image"

import { GetIcon, Icons } from "./icons"

export interface itemsInterface {
  id: number
  isOpen: boolean
  icon: string
  img: string
  title: string
  text: string
}
const TechonolodiesCarousel = () => {
  const [items, setItems] = useState<itemsInterface[]>([
    {
      id: 1,
      isOpen: true,
      icon: "react",
      img: "react.jpg",
      title: "React 18",
      text: "React is a JavaScript library for building modern user interfaces.",
    },
    {
      id: 2,
      isOpen: false,
      icon: "next",
      img: "next.jpg",
      title: "Next 13",
      text: "This entire webpage is built with Next.js using the latest features as Server Components and Actions.",
    },
    {
      id: 3,
      isOpen: false,
      icon: "tailwind",
      img: "tailwind.jpg",
      title: "Tailwind",
      text: "All styles fro this appliaction is preendered in server side and they were built with Tailwind.",
    },
    {
      id: 4,
      isOpen: false,
      icon: "typescript",
      img: "typescript.jpg",
      title: "TypeScript",
      text: "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. ",
    },
  ])

  const handleOpenClose = (id: number) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isOpen: !item.isOpen ? true : item.isOpen,
        }
      } else {
        return {
          ...item,
          isOpen: false,
        }
      }
    })
    setItems(newItems)
  }

  return (
    <div className="m-auto flex h-auto w-screen max-w-[1400px] justify-center gap-10 overflow-hidden">
      {items.map((item) => (
        <CarouselItem
          key={item.id}
          item={item}
          onClick={() => handleOpenClose(item.id)}
        />
      ))}
    </div>
  )
}

export interface CarouselItemProps {
  item: itemsInterface
  onClick: () => void
}
const CarouselItem = ({ item, onClick }: CarouselItemProps) => {
  const { isOpen, icon, img, title, text } = item
  return (
    <div
      onClick={onClick}
      className="relative flex cursor-pointer  flex-col items-center justify-center"
    >
      <Image
        alt="fancy-menu"
        className={`easy-in m-0 my-auto inline-block h-[400px]  max-h-[400px]  rounded-3xl transition-all  duration-700 ${
          isOpen ? "w-full max-w-[700px]" : "w-full max-w-[150px] delay-150"
        } object-cover p-0`}
        src={require("../public/technologies/" + img)}
      />
      <div
        className={`easy-in absolute bottom-4  m-auto flex w-full translate-x-6 gap-3 align-bottom  transition-all delay-150 duration-700`}
      >
        <div className="mb-0  justify-end rounded-full bg-zinc-200  p-3 dark:bg-zinc-800">
          {GetIcon(icon, "m-auto h-[80px] w-[80px]  p-0 text-react ")}
        </div>
        <div
          className={`${
            isOpen ? "duration-700" : "overflow- h-0 w-0 duration-0"
          } easy-out  my-auto max-h-[100px] max-w-[500px] transition-all`}
        >
          <p
            className={`${
              isOpen
                ? "opacity-100 delay-1000 duration-[700ms]"
                : "opacity-0 delay-0 duration-0"
            } m-auto text-left text-xl font-semibold text-white transition-opacity ease-linear`}
          >
            {title}
          </p>
          <p
            className={`${
              isOpen
                ? "opacity-100 delay-1000 duration-[700ms]"
                : "opacity-0 delay-0 duration-0"
            } easy-linear m-auto text-left text-lg text-white`}
          >
            {text}
          </p>
        </div>
      </div>
    </div>
  )
}

export default TechonolodiesCarousel
