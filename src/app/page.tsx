"use client"

import LottiePlayer from "react-lottie-player"

export default function Home() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="space-y-8 text-center">
        <h1 className="text-2xl">Work in progress</h1>
        <LottiePlayer
          loop
          path="/work-in-progress.json"
          play
          className="h-72 w-96"
        />
      </div>
    </div>
  )
}
