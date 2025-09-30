import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type LinkProps = {
  text: string
  imageLink: string | React.ReactNode
  link: string
  type?: "dark" | "light"
}

function SocialsLink({ text, imageLink, link, type = "light" }: LinkProps) {
  const baseClasses =
    "inline-flex items-center gap-2 px-4 py-2 rounded-xl transition"
  const darkClasses = "text-white bg-transparent border border-transparent"
  const lightClasses =
    "border border-gray-300 hover:bg-gray-50 text-black"

  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer"
      className={`${baseClasses} ${
        type === "dark" ? darkClasses : lightClasses
      }`}
    >
      {typeof imageLink === "string" ? (
        <Image
          src={imageLink}
          alt=""
          height={64}
          width={64}
          className="w-4 h-4"
        />
      ) : (
        imageLink
      )}{" "}
      {text}
    </Link>
  )
}

function ContactLink({ text, imageLink, link, type = "light" }: LinkProps) {
  const baseClasses = "inline-flex items-center gap-2 transition"
  const darkClasses = "text-white bg-transparent"
  const lightClasses = "text-black"

  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer"
      className={`${baseClasses} ${
        type === "dark" ? darkClasses : lightClasses
      }`}
    >
      {typeof imageLink === "string" ? (
        <Image
          src={imageLink}
          alt=""
          height={64}
          width={64}
          className="w-4 h-4"
        />
      ) : (
        imageLink
      )}{" "}
      {text}
    </Link>
  )
}

export { ContactLink }
export default SocialsLink
