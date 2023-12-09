import { AiOutlineArrowLeft } from 'react-icons/ai'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { slideData } from './slideData'
import { useState, useEffect } from 'react'

export const Heor = () => {
    const [currentSlide, setCurrentSlide] = useState(0)


    return (
        <div className="relative">
            <button
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-500 px-2 py-1 rounded"
                
            >
                Previous
            </button>
            <button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-500 px-2 py-1 rounded"
                
            >
                Next
            </button>
            <div className="flex space-x-4">
                {slideData.map((slide, index) => (
                    <div
                        key={index}
                        className={`transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <img
                            className="block w-full bg-center bg-cover"
                            src={slide.img}
                            alt=""
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}