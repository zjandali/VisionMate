'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function LiveRecommendationChat() {
  const [messages, setMessages] = useState([{
    type: 'assistant',
    content: "Hi! welcome to live recommendation mode, feel free to speak and let me know if you want to hear less about certain kinds of places, or lessen the frequency of my messages!"
  }])
  const [isRecording, setIsRecording] = useState(false)
  const [status, setStatus] = useState('Press "Record" to start recording...')

  useEffect(() => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)()
    recognition.continuous = true
    recognition.lang = 'en-US'

    recognition.onresult = async (event) => {
      const last = event.results.length - 1
      const transcription = event.results[last][0].transcript

      setMessages(prev => [...prev, {
        type: 'user',
        content: transcription
      }])

      setStatus('Understood. Conversation updating...')

      // Get user's location and process the request
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const { latitude, longitude } = position.coords
          // Here you would call your API to get live recommendations
          setMessages(prev => [...prev, {
            type: 'assistant',
            content: `I'll keep an eye out for places near ${latitude}, ${longitude} that match your preferences!`
          }])
          setStatus('Press "Record" to start recording...')
        })
      }
    }

    recognition.onerror = (event) => {
      console.error('Speech recognition error:', event.error)
      setStatus('Error occurred. Please try again.')
    }

    if (isRecording) {
      recognition.start()
      setStatus('Listening...')
    }

    return () => recognition.stop()
  }, [isRecording])

  return (
    <main className="min-h-screen p-4">
      <div className="max-w-2xl mx-auto pt-8">
        <div className="bg-white/80 rounded-xl p-6 min-h-[60vh]">
          <h1 className="text-2xl font-bold mb-6">Live Recommendation</h1>
          
          <div className="space-y-4 mb-8">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg ${
                  message.type === 'assistant' 
                    ? 'bg-[#FFFBCF]' 
                    : 'bg-[#FEDC70] ml-auto'
                }`}
                aria-live="polite"
              >
                <p>{message.content}</p>
              </div>
            ))}
          </div>

          <button
            onClick={() => setIsRecording(!isRecording)}
            className="w-full py-4 bg-[#FEDC70] rounded-full hover:bg-[#FFE36E] transition-colors"
            aria-live="polite"
          >
            {isRecording ? 'Listening...' : 'Tap to speak to our app!'}
          </button>

          <p className="text-center mt-4 text-gray-600">{status}</p>
        </div>

        <div className="fixed bottom-4 left-0 w-full px-4">
          <div className="flex justify-between items-center max-w-2xl mx-auto">
            <Link href="/liverecommendation" className="flex items-center space-x-2">
              <Image
                src="/leftarrow.png"
                alt="Back to previous page"
                width={24}
                height={24}
              />
              <span>Back</span>
            </Link>
            <Link
              href="/menu"
              className="bg-[#FEDC70] px-6 py-2 rounded-full hover:bg-[#FFE36E] transition-colors"
            >
              Return to Home Page
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}