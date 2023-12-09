import React from 'react'
import { useState } from 'react'
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from 'react-icons/md'
import { workData } from '../utils/accordion'
export const Work = () => {
    const [expandedItem, setExpandedItem] = useState(null)

    const handleAccordionChange = (uuid) => {
        setExpandedItem((prevExpanded) => {
            if (prevExpanded === uuid) {
                return null
            } else {
                return uuid
            }
        })
    }

    return (
        <div className='md:mx-20  my-16'>

            {workData.map((item, i) => (
                <div key={i} className='mx-3 mb-4 md:w-2/6 border'>
                    <div className={`p-1 lg:p-3 flex gap-4 items-center border-2 cursor-pointer ${expandedItem === i ? "text-teal-900" : "bg-white text-gray-300"} `}>
                        <div
                            className='cursor-pointer bg-teal-800 p-1 md:p-3  text-white'
                            onClick={() => handleAccordionChange(i)}
                        >
                            {expandedItem === i ? (
                                <MdOutlineArrowDropUp size={20} />
                            ) : (
                                <MdOutlineArrowDropDown size={20} />
                            )}
                        </div>
                        <span
                            className={`p-2 text-gray-800 cursor-pointer  ml-2 gap-3 flex md:text-lg font-medium ${expandedItem === i ? 'text-inherit' : "text-teal-700"} `}
                            onClick={() => handleAccordionChange(i)}
                        >

                            {item.heading}
                        </span>
                    </div>
                    {expandedItem === i && (
                        <div className='text-gray-400 border-2 border-t-0 p-4 rounded-md text-justify '>

                            <div className='flex gap-5 text-sm '>
                                <div><img src={item.image} alt="ours" className='object-cover h-20 w-96' /></div>
                                {item.details}
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}
