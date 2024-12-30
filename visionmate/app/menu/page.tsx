'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function MenuPage() {
  useEffect(() => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)()
    recognition.continuous = true
    recognition.lang = 'en-US'

    recognition.onresult = (event) => {
      const last = event.results.length - 1
      const command = event.results[last][0].transcript.toLowerCase().trim()

      if (command.includes('find a place to go')) {
        window.location.href = '/findaplacetogo'
      } else if (command.includes('live recommendation')) {
        window.location.href = '/liverecommendation'
      }
    }

    recognition.onerror = (event) => {
      console.error('Speech recognition error:', event.error)
    }

    recognition.start()

    return () => recognition.stop()
  }, [])

  return (
    <main className="min-h-screen p-4">
      <div className="mainmenuContainer flex flex-col items-center justify-start min-h-[80vh] mt-14 space-y-8" role="main">
        <h1 className="text-3xl font-bold" role="heading" aria-level={1}>Choose Mode!</h1>
        
        <div className="w-full max-w-2xl space-y-8" role="region" aria-label="Available Modes">
          <div className="bg-white/80 rounded-xl p-6 space-y-4">
            <h2 className="text-2xl font-bold" role="heading" aria-level={2}>Find a place to go!</h2>
            <p className="text-lg">Find a new place by talking to our app about what you're looking for! This will also open GPS to help you get there!</p>
            <div className="flex justify-end">
              <Link 
                href="/findaplacetogo"
                className="bg-[#FEDC70] px-8 py-3 rounded-full text-lg hover:bg-[#FFE36E] transition-colors"
                role="button"
                aria-label="Open find a place to go"
              >
                Open Find a Place to Go
              </Link>
            </div>
          </div>

          <div className="bg-white/80 rounded-xl p-6 space-y-4">
            <h2 className="text-2xl font-bold" role="heading" aria-level={2}>Live Recommendation</h2>
            <p className="text-lg">As you are walking, you will be given a short description of notable places as you walk by!</p>
            <div className="flex justify-end">
              <Link 
                href="/liverecommendation"
                className="bg-[#FEDC70] px-8 py-3 rounded-full text-lg hover:bg-[#FFE36E] transition-colors"
                role="button"
                aria-label="Start live recommendation"
              >
                Start Live Recommendation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 