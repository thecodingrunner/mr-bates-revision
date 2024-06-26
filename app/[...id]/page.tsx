"use client"

import { videos } from '@/data/videos'
import { video } from '@/types'
import { useParams } from 'next/navigation'
import React, { useDebugValue, useEffect, useState } from 'react'

const Page = () => {
  const params = useParams()
  const videoId = params.id
  const [video, setVideo] = useState<video | null>(null)

  useEffect(() => {
    console.log(videoId)
    const tempVideo = videos.filter(({id}) => id === Number(videoId))
    setVideo(tempVideo[0])
    console.log(tempVideo[0])
  },[videoId])

  return (
    <div>
        {video ? (
          <div className='w-3/4 mx-auto flex flex-col gap-6 items-center pt-10'>
            <h1 className='text-6xl'>{video.title}</h1>
            <iframe width={420*2} height={315*1.5} className=''
                src={video?.url}>
            </iframe>
            <p>{video.description}</p>
          </div>
        ) : (
          <div>currently no video</div>
        )}
    </div>
  )
}

export default Page