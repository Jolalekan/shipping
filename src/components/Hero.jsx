import { useState, useEffect } from "react"
import { slideData } from "./slideData"
import { AiOutlineArrowLeft } from "react-icons/ai"
import { AiOutlineArrowRight } from "react-icons/ai"
import "./Hero.scss"

export const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const slideLength = slideData.length
    const autoScroll = true;
    let interval = 5000;
    let slideInterval;

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1)
    }

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1)
    }

    function auto() {
        slideInterval = setInterval(nextSlide, interval)
    }

    useEffect(() => {
        if (autoScroll) {
            auto()
        }
        return () => clearInterval(slideInterval)
    }, [currentSlide])

    useEffect(() => {
        setCurrentSlide(currentSlide)
    }, [])

    return (
        <div className="slider">
            <AiOutlineArrowLeft onClick={prevSlide} />
            <AiOutlineArrowRight onClick={nextSlide} />
            {slideData.map((slide, index) => {
                return (
                    <div className={index === currentSlide ? "current slide" : "slide"} key={index}>
                        <img src={slide.img} alt="" />
                        <div className=" content leading" >
                            <h2 className="text-6xl uppercase font-bold text-white  shadow-xl border-teal-800">{slide.title}</h2>
                            <p className="text-5xl text-white font-bold ">{slide.desc}</p>
                            <hr />

                            {index === 0 && (
                                <>
                                    <button className="bg-teal-800 cursor-pointer py-4 px-6 lg:py-6 lg:px-8 font-medium text-white text-2xl rounded hover:opacity-90 transition duration-150 ease-in-out focus:text-teal-200 m-3 ">SLIDE ONE</button>
                                    <button className="bg-teal-800 cursor-pointer  py-4 px-6 lg:py-6 lg:px-8 font-medium text-white text-2xl rounded hover:opacity-90 transition duration-150 ease-in-out focus:text-teal-200 m-3 ">SLIDE TWO</button>
                                </>
                            )}

                            {index === 1 && (
                                <>
                                    <button className="border-2 py-4 px-6 lg:py-6 lg:px-8  font-medium text-white text-2xl rounded hover:opacity-40 cursor-pointer">SLIDE TWO</button>
                                    <button className="bg-gray-900 py-4 px-6 lg:py-6 lg:px-8  font-medium text-white text-2xl rounded hover:opacity-40 cursor-pointer">SLIDE TWO</button>
                                </>
                            )}

                            {index === 2 && (
                                <>
                                    <button className="bg-green-700 py-4 px-6 lg:py-6 lg:px-8  font-medium text-white text-2xl rounded">SLIDE THREE</button>
                                    <button className="border-4 py-4 px-6 lg:py-6 lg:px-8  font-medium text-white text-2xl rounded">SLIDE THREE</button>
                                </>
                            )}

                        </div>
                    </div>
                )
            })}
        </div>
    )
}