'use client'
import React from 'react'
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

function Videogrid() {

  const work = {
    "videos": [
        {
            "id": 1,
            "title": "",
            "video": "https://ik.imagekit.io/lsbtymxgs/FrameFluence/Draft-V1.mp4?updatedAt=1755691907480",
            "isFeatured": "true" 
        },
        {
            "id": 2,
            "title": "",
            "video": "https://ik.imagekit.io/lsbtymxgs/FrameFluence/Final.mp4?updatedAt=1755691759588",
            "isFeatured": "true" 
        },
        {
          "id": 3,
          "title": "",
          "video": "https://ik.imagekit.io/lsbtymxgs/FrameFluence/Draft-V1.mp4?updatedAt=1755691907480",
          "isFeatured": "true" 
      },
      {
          "id": 4,
          "title": "",
          "video": "https://ik.imagekit.io/lsbtymxgs/FrameFluence/Final.mp4?updatedAt=1755691759588",
          "isFeatured": "true" 
      },
    ]
}

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
    <>
    <div className=" w-full mx-auto px-4 py-16 bg-neutral-900 relative pt-40 overflow-clip">
    {/* This is now an absolute overlay pushed to the background */}   
    <div className="text-center mb-16 space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
          Creative Video Works
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Showcasing a collection of video editing projects spanning commercials, music videos, documentaries, and
          motion graphics. Each piece demonstrates unique storytelling techniques and visual aesthetics.
        </p>
      </div>
      <div className="flex flex-wrap justify-center">
        {work.videos.map((project) => (
                <CardContainer key={project.id} className="inter-var m-4">
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:primary dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                  >
                    {project.title}
                  </CardItem>
                  <CardItem >
                  <div className="w-full mt-4">
                    <video height="1000"
                      width="1000" controls>
                      <source src={project.video} type="video/mp4" />
                       Your browser does not support the video tag.
                     </video>
                  </div>
                  </CardItem>
                </CardBody>
              </CardContainer>
            ))}
        </div>  
        <ShootingStars />
        <StarsBackground />
        </div>
       
    </>
  )
}

export default Videogrid
