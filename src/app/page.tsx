"use client"

import Image from 'next/image'
import Link from "next/link";

export default function Home() {
 
  return (
    <main className="bg-black">
      <div className='rainbg'>
        <div className='rain'>
          <Image
            className="absolute"
            src="/fence.png"
            alt="Next.js Logo"
            fill={true}
          />
          <div className='flex min-h-screen flex-col items-center justify-between px-15'>
            <div className="flex place-items-center m-auto">  
              <div
              className='z-10 w-full max-w-xs bg-black flex flex-col py-1 px-10 rounded-lg shadow-lg'> 
                     <Link href="/mint" className='mx-auto my-4'>
                        <h1 className="relative font-extrabold text-white">
                          Enter
                        </h1>
                     </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
