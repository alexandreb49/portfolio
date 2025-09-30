

'use client'
import { RedirectType, redirect } from 'next/navigation'

export  function LinkedinButton() {

    function goToLinkedin() { redirect('https://www.linkedin.com/in/alexandre-bernard-chaillou/', RedirectType.replace) }

    return <>
    <button onClick={goToLinkedin} className='w-full h-[60%] rounded-2xl bg-gradient-to-t shadow-2xl from-blue-700 to-blue-500 items-center justify-center text-4xl font-bold text-white'>
            See Linkedin
    </button>
    
    </>

}


