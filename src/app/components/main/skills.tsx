// import React from 'react'
// import {Wrench, Layers, Database, Code2, Cpu, Globe,  Users} from 'lucide-react'

// function Skills() {
//   return (
//           <section className="bg-slate-50">
//         <div className="max-w-6xl mx-auto px-6 py-10 md:py-14">
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
//             <div className="lg:col-span-2">
//               <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-2">
//                 <Wrench className="w-6 h-6 text-blue-700" /> Skills & Expertise
//               </h3>

//               <div className="space-y-8">
//                 <div>
//                   <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
//                     <Cpu className="w-5 h-5 text-blue-700" /> Core Strengths
//                   </h4>
//                   <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-gray-800">
//                     <li className="flex items-center gap-2">
//                       <span className="w-2 h-2 bg-blue-600 rounded-full" />
//                       Project management & delivery
//                     </li>
//                     <li className="flex items-center gap-2">
//                       <span className="w-2 h-2 bg-blue-600 rounded-full" />
//                       Mechanical design & prototypes
//                     </li>
//                     <li className="flex items-center gap-2">
//                       <span className="w-2 h-2 bg-blue-600 rounded-full" />
//                       Fluid mechanics & testing
//                     </li>
//                     <li className="flex items-center gap-2">
//                       <span className="w-2 h-2 bg-blue-600 rounded-full" />
//                       Programming & automation
//                     </li>
//                   </ul>
//                 </div>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
//                   <div>
//                     <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
//                       <Layers className="w-4 h-4 text-blue-700" /> CAD & CAM
//                     </h4>
//                     <ul className="list-disc ml-5 text-gray-800 space-y-1">
//                       <li>CATIA</li>
//                       <li>SolidWorks</li>
//                       <li>3DExperience</li>
//                     </ul>
//                   </div>

//                   <div>
//                     <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
//                       <Database className="w-4 h-4 text-blue-700" /> Simulation
//                     </h4>
//                     <ul className="list-disc ml-5 text-gray-800 space-y-1">
//                       <li>Abaqus</li>
//                       <li>StarCCM+</li>
//                       <li>ForgeNXT</li>
//                     </ul>
//                   </div>
//                 </div>

//                 <div>
//                   <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
//                     <Code2 className="w-4 h-4 text-blue-700" /> Software Development
//                   </h4>
//                   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-1 text-gray-800">
//                     <span>Python, FastAPI, data pipelines</span>
//                     <span>Embedded & IoT (ESP8266, sensors)</span>
//                     <span>Numerical methods & optimization</span>
//                     <span>ML for physical systems</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="lg:col-span-1">
//               <h3 className="text-2xl font-bold text-blue-900 mb-6">Languages & Soft Skills</h3>

//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                 <div>
//                   <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
//                     <Globe className="w-4 h-4 text-blue-700" /> Languages
//                   </h4>
//                   <ul className="space-y-3">
//                     <li className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
//                       <span className="font-medium">French</span>
//                       <span className="text-xs px-2.5 py-1 rounded-full bg-blue-100 text-blue-800">Native</span>
//                     </li>
//                     <li className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
//                       <span className="font-medium">English</span>
//                       <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800">Professional (TOEIC 985)</span>
//                     </li>
//                     <li className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
//                       <span className="font-medium">Spanish</span>
//                       <span className="text-xs px-2.5 py-1 rounded-full bg-amber-100 text-amber-800">Intermediate (B1)</span>
//                     </li>
//                     <li className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
//                       <span className="font-medium">German</span>
//                       <span className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-800">Beginner (A2)</span>
//                     </li>
//                   </ul>
//                 </div>

//                 <div>
//                   <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
//                     <Users className="w-4 h-4 text-blue-700" /> Soft Skills
//                   </h4>
//                   <ul className="space-y-3">
//                     <li className="p-3 bg-white rounded-lg border border-gray-200">
//                       <div className="font-medium text-sm">Leadership & Teamwork</div>
//                       <div className="text-xs text-gray-600">Team lead experience, cross-functional collaboration</div>
//                     </li>
//                     <li className="p-3 bg-white rounded-lg border border-gray-200">
//                       <div className="font-medium text-sm">Problem Solving</div>
//                       <div className="text-xs text-gray-600">Analytical thinking, rapid prototyping approach</div>
//                     </li>
//                     <li className="p-3 bg-white rounded-lg border border-gray-200">
//                       <div className="font-medium text-sm">Communication</div>
//                       <div className="text-xs text-gray-600">Technical documentation, stakeholder presentations</div>
//                     </li>
//                     <li className="p-3 bg-white rounded-lg border border-gray-200">
//                       <div className="font-medium text-sm">Adaptability</div>
//                       <div className="text-xs text-gray-600">Fast learning, multidisciplinary projects</div>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//   )
// }

// export default Skills

import React from 'react'


type SoftSkillProps = {
name : string 
desc : string 
}


function Softskills() {

  const skillsList : SoftSkillProps[] = [
    
    { name : "project managment",
      desc : "led engineering project and hackaton teams..."},
          { name : "project managment",
      desc : "led engineering project and hackaton teams..."},
          { name : "project managment",
      desc : "led engineering project and hackaton teams..."},
          { name : "project managment",
      desc : "led engineering project and hackaton teams..."},

]
  
  return <>
  {skillsList.map( (element, id ) => { 
    <div key={id} className='bg-blue-400'>
    <p>{element.name}</p> 
    </div>
    })}
  
  
  </>}

function TechnicalSkills() {

  const skillsList : SoftSkillProps[] = [
    
    { name : "project managment",
      desc : "led engineering project and hackaton teams..."},
          { name : "project managment",
      desc : "led engineering project and hackaton teams..."},
          { name : "project managment",
      desc : "led engineering project and hackaton teams..."},
          { name : "project managment",
      desc : "led engineering project and hackaton teams..."},

]
  
  return <>
  {skillsList.map( (element, id ) => { 
    <div key={id} className='bg-blue-400'>
    <p>{element.name}</p> 
    </div>
    })}
  
  
  </>

}

function Languages() {  const skillsList : SoftSkillProps[] = [
    
    { name : "project managment",
      desc : "led engineering project and hackaton teams..."},
          { name : "project managment",
      desc : "led engineering project and hackaton teams..."},
          { name : "project managment",
      desc : "led engineering project and hackaton teams..."},
          { name : "project managment",
      desc : "led engineering project and hackaton teams..."},

]
  
  return <>
  {skillsList.map( (element, id ) => { 
    <div key={id} className='bg-blue-400'>
    <p>{element.name}</p> 
    </div>
    })}
  
  
  </>}

function Skills() {
  return (
    <div className='text-black w-screen h-full'>
        <Softskills/>
        <div className='h-20 w-20'></div>
        <TechnicalSkills/>
        <Languages/>
    </div>
  )
}

export default Skills