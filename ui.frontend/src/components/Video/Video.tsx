import type React from "react"
import { useState } from "react"
import { VideoModal } from "./VideoModal"

export interface VideoProps {
    videoUrl?: string
    thumbnailUrl?: string
    videoTitle?: string
    videoChannel?: string
}

export const Video: React.FC<VideoProps> = ({
    videoUrl = "",
    thumbnailUrl = "",
    videoTitle = "",
    videoChannel = ""
}) => {
    const [isModalOpen, setModalOpen] = useState(false);
    return (
        <div>
            <div className="mx-2 my-2">
                <a href="#" onClick={() => setModalOpen(true)} className="block cursor-pointer">
                    <img
                        alt="Video thumbnail"
                        src={thumbnailUrl}
                        className="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72"
                    />
                </a>
                <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
                    <strong className="font-medium">{videoTitle}</strong>
                </div>
            </div>
            <div className="h-screen flex items-center
                        justify-center">
                <VideoModal videoUrl={videoUrl} videoChannel={videoChannel} isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
            </div>
        </div>
    )
}
