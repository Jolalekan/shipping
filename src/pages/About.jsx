import React, { useState } from 'react';
import { Company } from '../components/Company';
import { data } from '../utils/accordion';
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from 'react-icons/md';

import 'react-accessible-accordion/dist/fancy-example.css';

const About = () => {
    const [expandedItem, setExpandedItem] = useState(null);

    const handleAccordionChange = (uuid) => {
        setExpandedItem((prevExpanded) => {
            if (prevExpanded === uuid) {
                
                return null;
            } else {
                return uuid;
            }
        });
    };

    return (
        <div>
            <Company />
            <div className='lg:mx-28 grid lg:grid-cols-2 justify-between gap-8 '>
                <article>
                    <h2 className='text-center mx-10 text-xl p-3 font-bold text-gray-800'>Company Overview</h2>
                    <p className='text-gray-500 text-justify mx-10'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor minima quia earum laboriosam recusandae, odit sint sit nemo hic deleniti itaque eius dolore, mollitia veniam aspernatur iusto debitis repellendus optio.
                        Illo quibusdam minima sed ipsam quod quam, necessitatibus dolore impedit blanditiis libero officiis, recusandae numquam velit adipisci accusamus. Architecto exercitationem ipsum possimus voluptatibus atque maiores rem beatae nesciunt dolorum aspernatur.
                    </p>
                </article>
                <div className='p-6'>
                    <h2 className='text-center text-2xl p-3 font-bold text-gray-800'>Our Core value</h2>
                    
                    {data.map((item, i) => (
                        <div key={i} className='p-2 mb-4 w-full lg:w-4/6 '>
                            <div className={`p-1 lg:p-3 flex gap-4 items-center border-2 cursor-pointer ${expandedItem === i ? "text-teal-900" : "bg-white text-gray-300"} `}>
                                <div
                                    className='cursor-pointer bg-teal-800 p-1 lg:p-3  text-white'
                                    onClick={() => handleAccordionChange(i)}
                                >
                                    {expandedItem === i ? (
                                        <MdOutlineArrowDropUp size={20} />
                                    ) : (
                                        <MdOutlineArrowDropDown size={20} />
                                    )}
                                </div>
                                <span
                                    className={` p-2 text-gray-800 cursor-pointer ml-2 gap-3 flex lg:text-lg font-medium ${expandedItem === i ? 'text-inherit' : "text-teal-700"} `}
                                    onClick={() => handleAccordionChange(i)}
                                >
                                    {item.heading}
                                </span>
                            </div>
                            {expandedItem === i && (
                                <div className='text-gray-400 text-sm lg:text-lg border-2 border-t-0 p-4 rounded-md'>{item.details}</div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;