'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function FindAPlaceToGo() {
  return (
    <main className="min-h-screen p-4">
      <div className="mainmenuContainer flex flex-col items-center justify-start min-h-[80vh] mt-14 space-y-8">
        <div className="bg-white/80 rounded-xl p-6 w-full max-w-2xl">
          <h1 className="text-3xl font-bold mb-4">Find a place to go!</h1>
          <p className="text-lg mb-8">
            This mode allows you to have a conversation with our app and get recommendations based on what you're in the mood for!
          </p>
          <div className="flex justify-end">
            <Link
              href="/findaplacetogo/chat"
              className="bg-[#FEDC70] px-8 py-3 rounded-full text-lg hover:bg-[#FFE36E] transition-colors"
            >
              Start a conversation now
            </Link>
          </div>
        </div>
      </div>

      <div className="fixed bottom-4 left-0 w-full px-4">
        <div className="flex justify-between items-center max-w-2xl mx-auto">
          <Link href="/menu" className="flex items-center space-x-2">
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
    </main>
  )
}