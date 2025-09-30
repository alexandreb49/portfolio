import React from 'react'
import { LinkedinButton } from '../components/redirectButtons'
import { MainPageButton } from '../components/mainpageButton'




function RedirectPage() {
  return (
    <div className='grid grid-cols-1 items-center justify-center w-screen h-screen'>

        <div className=''>
        <h1 className='text-2xl text-justify font-medium mt-[5%] w-[60%] sm:w-[80%] mx-auto'>
            <span className='text-3xl text-blue-800 italic'>Hello ! </span> You have successfuly scanned the qr code on my cv. You're welcome to check both my linkedin and my portfolio, where i showcase my engineering projects.
            For any inquiries, please use the contact informations available on the website. Thank you for taking the time to learn about my work and for your interest in 
            my projects. 
        </h1>
        <span className='text-2xl mx-auto ml-[30%] italic'>Alexandre Bernard</span>
        </div>

        <div className='w-full h-full flex gap-x-8 items-center px-8 md:mb-40 sm:mb-15 mb-20'>
            
            <LinkedinButton/>
            <MainPageButton/>
        </div>
    </div>
  )
}

export default RedirectPage