'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  const [showLearnBubble, setShowLearnBubble] = useState(false)

  useEffect(() => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)()
    recognition.continuous = true
    recognition.lang = 'en-US'
    
    recognition.onresult = (event) => {
      const last = event.results.length - 1
      const command = event.results[last][0].transcript.toLowerCase().trim()
      
      if (command.includes('get started')) {
        window.location.href = '/menu'
      } else if (command.includes('learn more')) {
        setShowLearnBubble(true)
      }
    }

    recognition.start()

    return () => recognition.stop()
  }, [])

  return (
    <main className="min-h-screen p-4">
      <div className="flex flex-col items-center justify-center min-h-[65vh] mt-14 space-y-5">
        <h1 className="text-3xl font-bold">Welcome to VisionMate!</h1>
        
        <Image
          src="/images/visionmatelogo.png"
          alt="Vision Mate logo"
          width={200}
          height={200}
          className="mb-8"
          priority
        />

        <Link 
          href="/menu"
          className="bg-[#FEDC70] px-12 py-4 rounded-full text-2xl font-medium hover:bg-[#FFE36E] transition-colors"
        >
          Get Started
        </Link>

        <button 
          onClick={() => setShowLearnBubble(!showLearnBubble)}
          className="text-black/70 hover:text-black transition-colors"
        >
          Learn More
        </button>

        {showLearnBubble && (
          <div className="fixed top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 bg-[#FFFBCF] rounded-xl p-6 z-50 shadow-lg">
            <p className="mb-4">
              VisionMate is a program made to help individuals with blindness explore new places. Through a conversation with VisionMate, you learn more about the things surrounding you, whether before you leave the home, or while on the go.
            </p>
            <p className="mb-6">
              We also offer a future voice memo feature, which allows you to note any hazards you find on your own.
            </p>
            <Link 
              href="/menu"
              className="bg-[#FEDC70] px-8 py-2 rounded-full inline-block hover:bg-[#FFE36E] transition-colors"
            >
              Begin Now
            </Link>
          </div>
        )}
      </div>
    </main>
  )
}