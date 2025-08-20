'use client'
import React from 'react'
import { cn } from "@/lib/utils"
import { 
    VideoPlayer,
    VideoPlayerContent,
    VideoPlayerControlBar,
    VideoPlayerMuteButton,
    VideoPlayerPlayButton,
    VideoPlayerSeekBackwardButton,
    VideoPlayerSeekForwardButton,
    VideoPlayerTimeDisplay,
    VideoPlayerTimeRange,
    VideoPlayerVolumeRange,
} from './ui/video'

function Videogrid() {

    interface VideoProject {
        id: string    
        videoUrl: string
      }

    const videoProjects: VideoProject[] = [
        {
          id: "1",
          videoUrl: "https://ik.imagekit.io/lsbtymxgs/FrameFluence/Draft-V1.mp4?updatedAt=1755691907480",
        },
        {
            id: "2",
            videoUrl: "https://ik.imagekit.io/lsbtymxgs/FrameFluence/Final.mp4?updatedAt=1755691759588",
        },
        {
            id: "3",
            videoUrl: "https://ik.imagekit.io/lsbtymxgs/FrameFluence/Draft-V1.mp4?updatedAt=1755691907480",
          },
          {
              id: "4",
              videoUrl: "https://ik.imagekit.io/lsbtymxgs/FrameFluence/Final.mp4?updatedAt=1755691759588",
          },
      ]

  return (
    <div className=" w-full relative mx-auto px-4 py-16 border-2">
    {/* This is now an absolute overlay pushed to the background */}    
    <div className="absolute inset-0 -z-10 h-full w-full bg-neutral-900 
  bg-[linear-gradient(to_right,#2a2a2a_1px,transparent_1px),linear-gradient(to_bottom,#2a2a2a_1px,transparent_1px)] 
  bg-[size:6rem_4rem]">
  <div className="absolute bottom-0 left-0 right-0 top-0 
    bg-[radial-gradient(circle_800px_at_100%_200px,#f97316,rgba(249,115,22,0.3),transparent)]">
  </div>
</div>


    <div className="text-center mb-16 space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
          Creative Video Works
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Showcasing a collection of video editing projects spanning commercials, music videos, documentaries, and
          motion graphics. Each piece demonstrates unique storytelling techniques and visual aesthetics.
        </p>
      </div>
      <div className="grid md:grid-cols-1 xl:grid-cols-2 gap-6">
     {videoProjects.map((project) => (
       <div
       key={project.id}
       className={cn(
         "group overflow-hidden border-0 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl",
         "hover:bg-card/80",
       )}
       >
           <VideoPlayer className="overflow-hidden rounded-lg border">
               <VideoPlayerContent
               crossOrigin=""
               muted
               preload="auto"
               slot="media"
               src={project.videoUrl}
               suppressHydrationWarning
               />
               <VideoPlayerControlBar>
               <VideoPlayerPlayButton />
               <VideoPlayerSeekBackwardButton />
               <VideoPlayerSeekForwardButton />
               <VideoPlayerTimeRange />
               <VideoPlayerTimeDisplay showDuration />
               <VideoPlayerMuteButton />
               <VideoPlayerVolumeRange />
               </VideoPlayerControlBar>
           </VideoPlayer>
       </div>
     ))}
        </div>
     
    </div>
  )
}

export default Videogrid
