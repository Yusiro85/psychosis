"use client"
import { useState, useEffect  } from 'react';
import ConnectWalletButton from './connectWallet';
import Image from 'next/image'
import Link from "next/link";
import { motion } from "framer-motion"


export default function Page() {
  const [provider, setProvider] = useState(null);
  const handleConnect = (connectedProvider) => {
    setProvider(connectedProvider);
  };

  return (
    <main className="bg-black ">
      <header className="text-white body-font border-b border-gray-200">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0" href="#" target="_blank">

            <span className="ml-3 text-xl">PSYCHOSIS</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          </nav>
        </div>
      </header>
      <section className="fog text-white body-font layoutbg">
        <div className="container mx-auto flex px-5 py-24 flex-col md:flex-row items-center">
          <div className="flex flex-col mb-16 items-center text-center md:w-1/2 md:pr-16 md:items-start md:text-left md:mb-0 lg:flex-grow">
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0,
                duration: 0.35,
                ease: [0.165, 0.84, 0.44, 1],
              }}
              className="title-font mb-4 font-small text-cyan-300">
              It is just a beginning...
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0,
                duration: 0.35,
                ease: [0.165, 0.84, 0.44, 1],
              }}
              className="title-font text-3xl mb-4 font-medium text-white sm:text-4xl">
              Welcome To sisohcysP
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.15,
                duration: 0.75,
                ease: [0.165, 0.84, 0.44, 1],
              }}
              className="mb-8 leading-relaxed">
              Unlocking Hope and Healing: The Journey to Recovery at Our Psychosis Treatment Center. Feel free to mint.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.30,
                duration: 0.95,
                ease: [0.165, 0.84, 0.44, 1],
              }}
              className="flex justify-center">
                {!provider && (
                  <ConnectWalletButton onConnect={handleConnect} />
                )}
                {provider && (
                      <button className="inline-flex text-gray-700 bg-cyan-300 border-0 py-2 px-6 rounded text-lg focus:outline-none hover:bg-cyan-700">
                      Mint Now
                  </button >
                )}
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.15,
              duration: 0.75,
              ease: [0.165, 0.84, 0.44, 1],
            }}
            className="w-5/6 md:w-1/2 lg:w-full lg:max-w-lg">
            <Image
              src="/about.png"
              alt="Next.js Logo"
              width={500}
              height={500}
            />
          </motion.div>
        </div>
        <div className="flex justify-center pt-20">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.55,
                duration: 1.35,
                ease: [0.165, 0.84, 0.44, 1],
              }}>
              <Link href="https://discord.gg/syWEHyc7">
                <Image
                  src="/discord.png"
                  alt="discord"
                  width={50}
                  height={50}
                  className='mx-3' />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.55,
                duration: 1.35,
                ease: [0.165, 0.84, 0.44, 1],
              }}>
              <Link href="https://twitter.com/ThePsychosisNFT">
                <Image
                  src="/twitter.png"
                  alt="twitter"
                  width={45}
                  height={45}
                  className='mx-3' />
              </Link>
            </motion.div>
          </div>

          <div className="flex justify-center pt-10 py-10">
            <div className=' text-white text-center'>
              <p>Copyright@ Psychosis 2023</p>
            </div>
          </div>
      </section>
    </main>
  )
}
