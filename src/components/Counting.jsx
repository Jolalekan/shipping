import CountUp from "react-countUp"
import { Parallax } from "react-parallax"


export const Counting = () => {
    return (
        <Parallax blur={{ min: -20, max: 15 }}
            bgImage='./image4.jpg'
            bgImageAlt="the ship"
            strength={-300}
            className="mt-8 mb-8 absolute object-cover"
        >
            <div className="bg-black opacity-70 text-white md:px-9 py-48 relative z-0 " >

                <div className="mx-20 flex flex-cols-4 flex-wrap justify-around items-center gap-10">
                    <div className="flex gap-2 ">
                        <div>
                            <img src="fact1.png" className="mt-5 " alt="" />
                        </div>
                        <div >
                            <span className="text-6xl font-medium">
                                <CountUp start={2} end={20} duration={6} />
                                <span className="text-xl text-teal-300"> Years </span></span>
                            <span> <p className="text-gray-100 font-medium"> Experience in <br />
                                in Transportation</p>
                            </span>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <div>
                            <img src="fact2.png" className="mt-5" alt="" />
                        </div>
                        <div>
                            <span className="text-6xl font-bold text-gray-100">
                                <CountUp start={45} end={78} duration={6} />
                                <span className="text-xl text-teal-300"> Plus </span></span>
                            <span> <p className="text-gray-100 font-medium"> Countries <br /> Servicing
                                <br />  Worldwide
                            </p>
                            </span>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <div>
                            <img src="fact3.png" className="mt-5" alt="" />
                        </div>
                        <div>
                            <span className="text-6xl font-medium">
                                <CountUp start={538} end={587} duration={6} />
                                <span className="text-xl text-teal-300"> Plus </span></span>
                            <span> <p className="text-gray-100 font-medium"> Skilled Drivers <br />
                                In Our Fleet
                            </p>
                            </span>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div>
                            <img src="fact4.png" className="mt-5" alt="" />
                        </div>
                        <div >
                            <span className="text-6xl font-medium ">
                                <CountUp start={1} end={12} duration={6} />
                                <span className="text-xl text-teal-300 font-medium ml-6"> Millions </span></span>
                            <span> <p className="text-gray-100 font-medium"> Miles Driven <br />
                                Per Year
                            </p>
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </Parallax>
    )
}