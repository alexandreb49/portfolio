import Link from "next/link"

export function MainPageButton() {
    return <>
        <button className='w-[80%] h-[60%] rounded-2xl bg-gradient-to-t shadow-2xl from-blue-700 to-blue-500 items-center justify-center'>
            <Link href="/" className='text-4xl font-bold text-white'>Go to Portfolio</Link>
        </button>    
    </>

}