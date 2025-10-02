'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Github, Linkedin, Download } from 'lucide-react'
import SocialsLink from './links'

function NavLink({
  href,
  children,
  onClick,
}: {
  href: string
  children: React.ReactNode
  onClick?: () => void
}) {
  const pathname = usePathname()
  const isActive =
    href === '/'
      ? pathname === '/'
      : pathname === href || (pathname.startsWith(href) && href !== '/')

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`relative px-2 py-1 rounded-md transition-colors group
        ${isActive ? 'text-blue-200' : 'text-white hover:text-blue-100'}`}
    >
      {children}
      <span
        className={`absolute left-0 -bottom-0.5 h-0.5 rounded-full bg-blue-200 transition-all
        ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}
      />
    </Link>
  )
}

export default function Navbar() {
  const [open, setOpen] = React.useState(false)

  return (
    <header>
      <nav className="w-full h-16 bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg flex items-center justify-between px-8">
        <Link href="/" className="text-lg sm:text-xl font-bold tracking-tight text-white hover:text-blue-100">
           Alexandre Bernard
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <NavLink href="/">About Me</NavLink>
          <NavLink href="/projects">Projects</NavLink>

          <span className="h-6 w-px bg-white/30 mx-1" />

          < SocialsLink text="Linkedin" link="https://www.linkedin.com/in/alexandre-bernard-chaillou/" imageLink={< Linkedin className='h-4 w-4'/>} type='dark'/>
          < SocialsLink text="Github" link="https://github.com/alexandreb49" imageLink={< Github className='h-4 w-4'/>}  type='dark'/>


          <a
            href="/documents/CV_EN_ALEXANDRE_BERNARD.pdf"
            className="inline-flex items-center gap-2 rounded-xl bg-white/20 text-white px-3 py-1.5 text-sm hover:bg-white/30 transition"
          >
            <Download className="w-4 h-4" /> CV
          </a>
        </div>

        {/* Mobile part */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10 transition"
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      <div
        className={`md:hidden origin-top transition-all ${
          open ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'
        } bg-blue-700/95 backdrop-blur`}
      >
        <div className="px-4 py-3 flex flex-col gap-3">
          <NavLink href="/" onClick={() => setOpen(false)}>About Me</NavLink>
          <NavLink href="/projects" onClick={() => setOpen(false)}>Projects</NavLink>
          <NavLink href="/contact" onClick={() => setOpen(false)}>Contact</NavLink>

          <div className="h-px bg-white/30 my-2" />

          <a
            href="https://github.com/alexandreb49"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-white hover:text-blue-100"
            onClick={() => setOpen(false)}
          >
            <Github className="w-4 h-4" /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/alexandre-bernard-chaillou"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-white hover:text-blue-100"
            onClick={() => setOpen(false)}
          >
            <Linkedin className="w-4 h-4" /> LinkedIn
          </a>
          <a
            href="/documents/CV_EN_ALEXANDRE_BERNARD.pdf"
            className="inline-flex items-center gap-2 rounded-lg bg-white/20 text-white px-3 py-1.5 text-sm hover:bg-white/30 transition"
            onClick={() => setOpen(false)}
          >
            <Download className="w-4 h-4" /> CV
          </a>
        </div>
      </div>
    </header>
  )
}
