'use client'
import React from 'react'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import styles from './project.module.css'

type Project = {
  title: string
  link: string
  image_class : string 
}

function ProjectCase({ link, title, image_class }: Project) {
  return (
    <div
      className={`${styles[`project_card_${image_class}`]} relative h-110 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex flex-col items-center justify-between p-4 text-white`}
    >
      <h2
        className="text-lg font-bold uppercase tracking-wide leading-tight drop-shadow-lg text-center"
        style={{ fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif' }}
      >
        {title || 'Untitled'}
      </h2>

      {link ? (
        <Link href={link}>
          <button
            className="mt-4 flex items-center space-x-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 backdrop-blur-sm bg-white/20 border border-white/30 hover:bg-white/30 hover:border-white/40 hover:shadow-lg text-white"
            style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
          >
            <span>Open Project</span>
            <ExternalLink className="w-4 h-4" />
          </button>
        </Link>
      ) : (
        <button
          disabled
          className="mt-4 px-5 py-2.5 rounded-xl opacity-50 cursor-not-allowed font-medium text-sm backdrop-blur-sm bg-gray-500/20 border border-gray-400/30 text-gray-200"
          style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
        >
          Coming Soon
        </button>
      )}
    </div>
  )
}

function MyProjects() {
  const projects: Project[] = [
    { title: 'BMG machining Study', link: '/projects/bmg',image_class :'bmg' },
    { title: 'Finite element analysis software', link: '/projects/repas', image_class :'software'},
    { title: 'Inductive sensor', link: '/projects/inductive_sensor', image_class: 'parking' },
    { title: 'NASA space app challenge 2023', link: '/projects/space_app_challenge', image_class : 'space' },
  ]

  return (
    <div className="min-h-screen w-full font-sans text-black">
      <div className="pt-6 pb-4 px-6">
        <div className="backdrop-blur-sm bg-white/10 rounded-2xl p-4 border border-white/20">
          <h1
            className="text-3xl font-bold mb-1 drop-shadow-lg text-center"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            My Projects
          </h1>
          <p
            className="text-base drop-shadow-sm"
            style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
          >
          </p>
        </div>
      </div>

      <div className="px-6 pb-6">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {projects.map((project, key) => (
            <ProjectCase title={project.title} link={project.link} image_class = {project.image_class} key={key} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MyProjects
