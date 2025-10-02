"use client"
import React, { useEffect, useState } from 'react'
import projectMap from "../projectMap.json"
import { useRouter } from 'next/navigation'
import { use } from "react"

//remember to useRouter for client component
// use keyof typeof for json files 
// use dynamic import also

type ProjectMapProps = { [key: string]: string }
const projectMapTyped = projectMap satisfies ProjectMapProps

function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const [Blog, setBlog] = useState<React.ComponentType<{}> | null>(null)
  const { id } = use(params)
  const router = useRouter()

  useEffect(() => {
    if (!id) {
      router.replace('/')
      return
    }
    
    const path = projectMapTyped[id as keyof typeof projectMapTyped]
    if (!path) {
      router.replace('/')
      return
    }

    const loadBlog = async () => {
      try {
        const Imported = (await import(`../files/${path}.tsx`)).default
        setBlog(() => Imported)
      } catch (error) {
        console.error("The project does not exist", error)
        router.replace('/')
      }
    }

    loadBlog()
  }, [id, router])

  if (!Blog) return <div>Loading...</div>

  return <div><Blog /></div>
}

export default ProjectPage