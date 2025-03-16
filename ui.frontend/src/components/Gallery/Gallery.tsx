import type React from "react"

export interface GalleryItemProps {
    imageList?: string[]
}

export const Gallery: React.FC<GalleryItemProps> = ({
    imageList = []
}) => {

    function getUniqueRandomArray(size: number, n: number) {
       
        const numbers = Array.from({ length: n + 1 }, (_, i) => i); // Create an array [0, 1, 2, ..., n]
        const result = [];
    
        while (result.length < size) {
            const randomIndex = Math.floor(Math.random() * numbers.length);
            result.push(numbers.splice(randomIndex, 1)[0]); // Remove and push unique number
        }
    
        return result;
    }
    let indexList: any[] = getUniqueRandomArray(imageList.length, imageList.length - 1);
    return (
        <div>
            <div className="max-w-screen-2xl mx-auto px-4 py-6 lg:py-12 relative bg-gray-50">
                <div className="flex flex-col md:flex-row gap-3">
                    <div className="flex flex-1 flex-col gap-3">
                        <div className="flex flex-1 flex-col">
                            <img className="transition-transform duration-300 hover:scale-105 object-cover h-full" src={imageList[indexList[0]]} />
                        </div>
                        <div className="hidden md:flex flex-1 flex-row gap-3">
                            <div className="flex flex-1 flex-col">
                                <img className="transition-transform duration-300 hover:scale-105 object-cover h-full" src={imageList[indexList[1]]} />
                            </div>
                            <div className="hidden md:flex flex-1 flex-col">
                                <img className="transition-transform duration-300 hover:scale-105 object-cover h-full" src={imageList[indexList[2]]} />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-3">
                        <div className="hidden md:flex flex-1 flex-row gap-3">
                            <div className="flex flex-1 flex-col">
                                <img className="transition-transform duration-300 hover:scale-105 object-cover h-full" src={imageList[indexList[3]]} />
                            </div>
                            <div className="hidden md:flex flex-1 flex-col">
                                <img className="transition-transform duration-300 hover:scale-105 object-cover h-full" src={imageList[indexList[4]]} />
                            </div>
                        </div>
                        <div className="flex flex-1 flex-col">
                            <img className="transition-transform duration-300 hover:scale-105 object-cover h-full" src={imageList[indexList[5]]} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
