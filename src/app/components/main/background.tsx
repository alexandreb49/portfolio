import React from 'react'
import { GraduationCap, Briefcase, Users} from 'lucide-react'
import Image from 'next/image'
import background from '@/app/data/background.json'

function Background() {
  return (
          <section id="background" className="max-w-6xl mx-auto px-6 py-8 md:py-10">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-6">Background</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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


// function Background() {



//   return <><Image alt="sssssss" src="/background/rocket.gif" height={128} width={128} className=''/>
//   <Image alt="sssssss" src="/background/planet.png" height={128} width={128} className=''/></>
// }



export default Background


// import { Calendar, BookOpen} from 'lucide-react';
// import { useState, useEffect } from 'react';

// // Mock data - replace with your actual import
// const backgroundData = [
//   {
//     "title": "Arts et Métiers ParisTech — Master's in Mechanical Engineering",
//     "time": "2023–2026",
//     "info": "Specialization in Advanced Manufacturing & Design • Expected graduation 2026",
//     "logo": "/logos/ensam.png",
//     "alt": "Arts et Métiers",
//     "type": "education"
//   },
//   {
//     "title": "IT Manager — Arts et Métiers Student Association",
//     "time": "2024–2025",
//     "info": "Managing websites & databases • Network infrastructure for 300+ students • Process automation",
//     "logo": "/logos/ensam.png",
//     "alt": "Arts et Métiers",
//     "type": "association"
//   },
//   {
//     "title": "Workshop Operator Intern — APMA",
//     "time": "2024",
//     "info": "Machining, turning, deburring, sandblasting • Quality control processes",
//     "logo": "/logos/apma.png",
//     "alt": "APMA",
//     "type": "internship"
//   },
//   {
//     "title": "ESEO Engineering School — Foundation Years",
//     "time": "2021–2023",
//     "info": "Preparatory program in Mathematics, Physics, and Engineering fundamentals",
//     "logo": "/logos/eseo.png",
//     "alt": "ESEO",
//     "type": "education"
//   }
// ];

// function Background() {
//   const [hoveredPlanet, setHoveredPlanet] = useState(null);

//   const getTypeIcon = (type) => {
//     switch (type) {
//       case 'education':
//         return <GraduationCap className="w-4 h-4" />;
//       case 'association':
//         return <Users className="w-4 h-4" />;
//       case 'internship':
//         return <Briefcase className="w-4 h-4" />;
//       default:
//         return <BookOpen className="w-4 h-4" />;
//     }
//   };

//   const planetPositions = [
//     { left: '20%', top: '25%' },
//     { left: '45%', top: '45%' },
//     { left: '25%', top: '70%' },
//     { left: '70%', top: '80%' }
//   ];

//   return (
//     <div className="min-h-screen bg-black relative overflow-hidden">
//       {/* Stars */}
//       {[...Array(150)].map((_, i) => (
//         <div
//           key={i}
//           className="absolute bg-white rounded-full"
//           style={{
//             left: `${Math.random() * 100}%`,
//             top: `${Math.random() * 100}%`,
//             width: `${Math.random() * 2 + 0.5}px`,
//             height: `${Math.random() * 2 + 0.5}px`,
//             opacity: Math.random() * 0.8 + 0.2
//           }}
//         />
//       ))}

//       {/* Dotted path SVG */}
//       <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
//         <line 
//           x1="50" y1="15" 
//           x2="20" y2="25" 
//           stroke="rgba(255, 255, 255, 0.4)" 
//           strokeWidth="0.2" 
//           strokeDasharray="0.5,1.5" 
//           strokeLinecap="round"
//         />
//         <path 
//           d="M 20 25 Q 30 35, 45 45" 
//           stroke="rgba(255, 255, 255, 0.4)" 
//           strokeWidth="0.2" 
//           strokeDasharray="0.5,1.5"
//           strokeLinecap="round"
//           fill="none"
//         />
//         <path 
//           d="M 45 45 Q 35 60, 25 70" 
//           stroke="rgba(255, 255, 255, 0.4)" 
//           strokeWidth="0.2" 
//           strokeDasharray="0.5,1.5"
//           strokeLinecap="round"
//           fill="none"
//         />
//         <path 
//           d="M 25 70 Q 50 75, 70 80" 
//           stroke="rgba(255, 255, 255, 0.4)" 
//           strokeWidth="0.2" 
//           strokeDasharray="0.5,1.5"
//           strokeLinecap="round"
//           fill="none"
//         />
//       </svg>

//       {/* Rocket */}
//       <div className="absolute left-1/2 top-[10%] transform -translate-x-1/2 z-20">
//         <div className="relative">
//           <Image 
//             src="/background/rocket.gif" 
//             alt="Rocket"
//             width={64}
//             height={64}
//             className="animate-bounce"
//             style={{ animationDuration: '2s' }}
//           />
//           <div className="absolute top-full left-1/2 transform -translate-x-1/2">
//             <div className="w-4 h-8 bg-gradient-to-b from-orange-400 to-transparent rounded-full animate-pulse opacity-80" />
//           </div>
//         </div>
//       </div>

//       {/* Planets */}
//       {backgroundData.map((item, index) => {
//         const position = planetPositions[index];
        
//         return (
//           <div 
//             key={index} 
//             className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10"
//             style={{ left: position.left, top: position.top }}
//           >
//             <div
//               className="relative cursor-pointer transition-all duration-300 hover:scale-110 group"
//               onMouseEnter={() => setHoveredPlanet(index)}
//               onMouseLeave={() => setHoveredPlanet(null)}
//             >
//               <Image 
//                 src="/background/planet.png"
//                 alt="Planet"
//                 width={80}
//                 height={80}
//                 className="animate-pulse group-hover:animate-none transition-all duration-300"
//                 style={{ animationDuration: '4s', animationDelay: `${index * 0.5}s` }}
//               />
//               <div className="absolute inset-0 rounded-full bg-blue-400/20 scale-110 opacity-0 group-hover:opacity-100 transition-all duration-300 blur-md" />
//               <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-white font-mono whitespace-nowrap">
//                 {item.time}
//               </div>
//             </div>

//             {hoveredPlanet === index && (
//               <div className="absolute left-full top-1/2 transform -translate-y-1/2 ml-8 w-80 bg-gray-900/95 backdrop-blur-sm 
//                              border border-blue-400/30 rounded-lg p-4 shadow-2xl z-30 animate-in fade-in slide-in-from-left-2">
//                 <div className="flex items-start gap-3">
//                   <div className="w-8 h-8 rounded-full bg-blue-500/20 border border-blue-400/40 
//                                  flex items-center justify-center flex-shrink-0 text-blue-300">
//                     {getTypeIcon(item.type)}
//                   </div>
//                   <div className="flex-1">
//                     <h3 className="text-white font-semibold text-sm leading-tight mb-2">
//                       {item.title}
//                     </h3>
//                     <div className="flex items-center gap-1 text-blue-300 text-xs mb-2">
//                       <Calendar className="w-3 h-3" />
//                       {item.time}
//                     </div>
//                     <p className="text-gray-300 text-xs leading-relaxed">
//                       {item.info}
//                     </p>
//                   </div>
//                 </div>
//                 <div className="absolute right-full top-1/2 transform -translate-y-1/2 
//                                border-l-8 border-l-gray-900/95 border-t-4 border-t-transparent 
//                                border-b-4 border-b-transparent" />
//               </div>
//             )}
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default Background;
