import React from 'react'
import { GraduationCap, Briefcase, Users} from 'lucide-react'
import Image from 'next/image'
import background from '@/app/data/background.json'
import extracurricular from '@/app/data/extracurricular.json'
import professional from '@/app/data/professional.json'

function Background() {
  return (
          <section id="background" className="max-w-6xl mx-auto px-6 py-2 md:py-10">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-6">Background</h2>

        <div className="grid grid-cols-1 gap-4">
          {background.map((item, i) => (
            <div
              key={i}
              className="grid grid-cols-[48px,1fr,auto] items-center gap-3 p-3 bg-white rounded-lg border border-gray-200"
            >
              <div className="flex items-center justify-center">
                {item.logo ? (
                  <Image
                    src={item.logo}
                    alt={item.alt || 'Logo'}
                    width={60}
                    height={60}
                    className="object-contain bg-white"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-gray-100" />
                )}
              </div>

              <div className="min-w-0">
                <div className="flex flex-wrap items-baseline gap-x-2">
                  <h3 className="font-semibold text-gray-900 leading-snug truncate">{item.title}</h3>
                </div>
                <p className="text-gray-700 text-xs mt-0.5 line-clamp-2">{item.info}</p>
              </div>

              <div className="text-right">
                <span className="text-[11px] text-gray-500 font-medium">{item.time}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
  )
}


function Professional() {
  return (
          <section id="background" className="max-w-6xl mx-auto px-6 py-2 md:py-10">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-6">Experience</h2>

        <div className="grid grid-cols-1 gap-4">
          {professional.map((item, i) => (
            <div
              key={i}
              className="grid grid-cols-[48px,1fr,auto] items-center gap-3 p-3 bg-white rounded-lg border border-gray-200"
            >
              <div className="flex items-center justify-center">
                {item.logo ? (
                  <Image
                    src={item.logo}
                    alt={item.alt || 'Logo'}
                    width={40}
                    height={40}
                    className="rounded-full object-contain bg-white"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-gray-100" />
                )}
              </div>

              <div className="min-w-0">
                <div className="flex flex-wrap items-baseline gap-x-2">
                  <h3 className="font-semibold text-gray-900 leading-snug truncate">{item.title}</h3>
                </div>
                <p className="text-gray-700 text-xs mt-0.5 line-clamp-2">{item.info}</p>
              </div>

              <div className="text-right">
                <span className="text-[11px] text-gray-500 font-medium">{item.time}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
  )
}

function Extracurricular() {
  return (
          <section id="background" className="max-w-6xl mx-auto px-6 py-2 md:py-10">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-6">Extracurricular</h2>

        <div className="grid grid-cols-1 gap-4">
          {extracurricular.map((item, i) => (
            <div
              key={i}
              className="grid grid-cols-[48px,1fr,auto] items-center gap-3 p-3 bg-white rounded-lg border border-gray-200"
            >
              <div className="flex items-center justify-center">
                {item.logo ? (
                  <Image
                    src={item.logo}
                    alt={item.alt || 'Logo'}
                    width={40}
                    height={40}
                    className="rounded-full object-contain bg-white"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-gray-100" />
                )}
              </div>

              <div className="min-w-0">
                <div className="flex flex-wrap items-baseline gap-x-2">
                  <h3 className="font-semibold text-gray-900 leading-snug truncate">{item.title}</h3>
                </div>
                <p className="text-gray-700 text-xs mt-0.5 line-clamp-2">{item.info}</p>
              </div>

              <div className="text-right">
                <span className="text-[11px] text-gray-500 font-medium">{item.time}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
  )
}


export {Professional, Extracurricular}

export default Background

