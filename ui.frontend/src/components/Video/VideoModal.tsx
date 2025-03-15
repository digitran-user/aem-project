import React from 'react'
import ReactPlayer from 'react-player/lazy'
import { Modal } from "./Modal";

export interface VideoModalProps {
    isOpen?: any
    onClose?: any
    videoUrl?: string
}

export const VideoModal: React.FC<VideoModalProps> = ({
    isOpen,
    onClose,
    videoUrl
}) => {
    if (!isOpen) return null;
    return (
        <div>
            <Modal isOpen={isOpen} onClose={onClose}>
                <div className="block overflow-hidden p-2 sm:p-2 lg:p-4"
                >
                    <span
                        className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
                    ></span>

                    <div>
                        <ReactPlayer url={videoUrl} 
                        controls={true}
                        playing
                        width='100%'
                        height='380px'/>
                    </div>
                </div>
            </Modal>
        </div>
    )
}
