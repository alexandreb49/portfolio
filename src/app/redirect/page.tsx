import React from 'react'
import Link from 'next/link'
import { LinkedinButton } from '../components/redirectButtons'
import { MainPageButton } from '../components/mainpageButton'




function RedirectPage() {
  return (
    <div className='grid grid-cols-1 items-center justify-center w-screen h-screen'>

        <div className=''>
        <h1 className='text-2xl text-justify font-medium mt-[10%] w-[60%] mx-auto'>
            <span className='text-3xl text-blue-800 italic'>Hello ! </span> You have successfuly scanned the qr code on my cv. I invite you to check both my linkedin and my portfolio, where i showcase my engineering projects.
            For any inquiries, please use the contact informations available on the website. Thank you for taking the time to learn about my work and for your interest in 
            my projects. 
        </h1>
        <span className='text-2xl mx-auto ml-[30%] italic'>Alexandre Bernard</span>
        </div>

        <div className='w-full h-full flex gap-x-15 px-15 items-center'>
            
            <LinkedinButton/>
            <MainPageButton/>
        </div>
    </div>
  )
}

export default RedirectPage