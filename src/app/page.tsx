import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  Mail, Phone, MapPin, Linkedin, Github, ArrowRight,
} from 'lucide-react'
import SocialsLink, {ContactLink} from './components/links'
import Skills from './components/main/skills'
import Background, { Extracurricular, Professional } from './components/main/background'
import MyProjects from './projects/page'

export default function HomePage() {


  return (
    <main className="min-h-screen w-full text-black bg-white scroll-smooth">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-indigo-50" />
        <div className="relative max-w-6xl mx-auto px-6 pt-2 pb-6 md:pt-10 md:pb-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-10 items-center">
            <div className="md:col-span-2 flex justify-center md:justify-start">
              <div className="relative">
                <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-sky-300 to-indigo-200 blur-3xl opacity-50 " />
                <Image
                  src="/me.jpg" 
                  alt="Alexandre Bernard"
                  width={320}
                  height={320}
                  priority
                  className="relative rounded-full object-cover"
                />
              </div>
            </div>

            <div className="md:col-span-3">
              <h1
                className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight"
                style={{ fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif' }}
              >
                Alexandre Bernard
              </h1>

              <p className="text-gray-700 mt-2 md:mt-3 text-lg text-justify">
                Hi ! My name is Alexandre Bernard and i am pursuing a Master of Science in aerospace engineering at Arts et Métiers.
                I have always been passionate about space and engineering. It led me to participate in space-themed hackatons where i worked on both mechanical and software engineering.
                Having skills in both fields makes me a versatile engineer able to contribute in complex project from design to production.
                As a team leader for various projects, i developed team building skills and project methodology for aeronautical projects. 
                I gained hands on experience working as a consultant for Arts et Metier Junior Entreprise (AMJE) where i contributed to real-world projects. I am now looking for a six month internship to 
                complete my degree.
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
                <ContactLink link="mailto:alexandre.bernard@ensam.eu" imageLink = {<Mail className="w-4 h-4 text-blue-700" />} text='alexandre.bernard@ensam.eu'/>
                <span className="text-gray-300">•</span>
                 <ContactLink link="tel:+33781995763" imageLink = {<Phone className="w-4 h-4 text-blue-700" />} text=' +33 7 81 99 57 63'/>
                <span className="text-gray-300">•</span>
                <ContactLink link="tel:+33781995763" imageLink = { <MapPin className="w-4 h-4 text-blue-700" />} text='Angers, France'/>
              </div>

              <div className="mt-4 flex flex-wrap gap-3">
                  < SocialsLink text="Linkedin" link="https://www.linkedin.com/in/alexandre-bernard-chaillou/" imageLink={< Linkedin className='h-4 w-4'/>}/>
                  < SocialsLink text="Github" link="https://github.com/alexandreb49" imageLink={< Github className='h-4 w-4'/>}/>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
                >
                  View Projects <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-700 to-sky-600 text-white">
        <div className="max-w-6xl mx-auto px-6 py-5 md:py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center">
            <div className="md:col-span-2">
              <h2 className="text-xl md:text-2xl font-semibold">
                Looking for a 6-month internship (Feb → Sept 2026)
              </h2>
              <p className="mt-1 text-blue-50">
                Aerospace engineering 
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <a
                href="mailto:alexandre.bernard@ensam.eu"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-white text-blue-800 hover:bg-blue-50 transition"
              >
                <Mail className="w-4 h-4" /> Contact me
              </a>
              <a
                href="/documents/recommendation/recommendation_Alexandre_Bernard.pdf"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-xl border border-white/70 hover:bg-white/10 transition"
              >
                Recommendations <ArrowRight className="w-4 h-4" />
              </a>
                <a
                href="/documents/cv/CV_EN_ALEXANDRE_BERNARD.pdf"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-xl border border-white/70 hover:bg-white/10 transition"
              >
                Download CV <ArrowRight className="w-4 h-4" />
              </a>
              

            </div>
          </div>
        </div>
      </section>
      <Background />
      <Professional/>
      <Extracurricular/>
      <Skills/>


      <section id="projects" className="bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
           <MyProjects /> 
        </div>
      </section>
    </main>
  )
}
