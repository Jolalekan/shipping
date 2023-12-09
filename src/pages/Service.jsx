import React from 'react'
import { Company } from '../components/Company'
import { Counting } from '../components/Counting'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruck, faWarehouse,faTruckPlane, faPlane, faShip } from '@fortawesome/free-solid-svg-icons';
const Service = () => {
    return (
        <div>
            <Company />

            <div className='md:flex md:gap-3  mx-auto '>
                <article className='max-w-2xl'>
                    <div className=' flex flex-col gap-4 m-10'>
                        <div><img src="/image3.jpg" alt="" />
                        </div>
                        <div>
                        
                        <div className='flex gap-3 mb-3'>
                            <FontAwesomeIcon icon={faPlane} size="2x"/>
                            <h2 className='text-2xl text-center font-medium'>Air Freight</h2>
                            </div>
                        
                            <p className='text-justify text-gray-500 font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, commodi magni aliquam atque voluptates neque illum illo nulla beatae quas odit pariatur, laudantium quisquam officia, assumenda velit nostrum quis? Aspernatur.
                                Ad, excepturi incidunt eius quibusdam nemo expedita ipsum veniam asperiores, iusto aliquam, in perspiciatis inventore magni. Repellendus velit labore pariatur accusamus fugiat ipsa necessitatibus suscipit modi quidem. Quo, praesentium veritatis!</p>
                        </div>
                    </div>
                </article>
                <article className='max-w-2xl'>
                    <div className=' flex flex-col gap-4 m-10'>
                        <div><img src="/image3.jpg" alt="" />
                        </div>
                        
                        <div>
                        <div className='flex gap-3 mb-3'>
                            <FontAwesomeIcon icon={faShip} size="2x"/>
                            <h2 className='text-2xl text-center font-medium'>Freight Shipping</h2>
                            </div>
                                                                             
                            <p className='text-justify text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, commodi magni aliquam atque voluptates neque illum illo nulla beatae quas odit pariatur, laudantium quisquam officia, assumenda velit nostrum quis? Aspernatur.
                                Ad, excepturi incidunt eius quibusdam nemo expedita ipsum veniam asperiores, iusto aliquam, in perspiciatis inventore magni. Repellendus velit labore pariatur accusamus fugiat ipsa necessitatibus suscipit modi quidem. Quo, praesentium veritatis!</p>
                        </div>
                    </div>
                </article>
                <article className='max-w-2xl'>
                    <div className=' flex flex-col gap-4 m-10'>
                        <div><img src="/image3.jpg" alt="" />
                        </div>
                        <div>
                        <div className='flex gap-3 mb-3'>
                            <FontAwesomeIcon icon={faTruckPlane} size="2x"/>
                            <h2 className='text-2xl text-center font-medium'>Cargo Express</h2>
                            </div>
                            
                            <p className='text-justify text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, commodi magni aliquam atque voluptates neque illum illo nulla beatae quas odit pariatur, laudantium quisquam officia, assumenda velit nostrum quis? Aspernatur.
                                Ad, excepturi incidunt eius quibusdam nemo expedita ipsum veniam asperiores, iusto aliquam, in perspiciatis inventore magni. Repellendus velit labore pariatur accusamus fugiat ipsa necessitatibus suscipit modi quidem. Quo, praesentium veritatis!</p>
                        </div>
                    </div>
                </article>

            </div>
            <div className='md:flex gap- max-w-7xl mx-auto '>
                <article className='max-w-2xl'>
                    <div className=' flex flex-col gap-4 m-10'>
                        <div><img src="/image3.jpg" alt="" />
                        </div>
                        <div>
                            <div className='flex gap-3 mb-3'>
                            <FontAwesomeIcon icon={faWarehouse} size="2x"/>
                            <h2 className='text-2xl text-center font-medium'>Warehousing</h2>
                            </div>
                            <p className='text-justify to-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, commodi magni aliquam atque voluptates neque illum illo nulla beatae quas odit pariatur, laudantium quisquam officia, assumenda velit nostrum quis? Aspernatur.
                                Ad, excepturi incidunt eius quibusdam nemo expedita ipsum veniam asperiores, iusto aliquam, in perspiciatis inventore magni. Repellendus velit labore pariatur accusamus fugiat ipsa necessitatibus suscipit modi quidem. Quo, praesentium veritatis!</p>
                        </div>
                    </div>
                </article>
                <article className='max-w-2xl'>
                    <div className=' flex flex-col gap-4 m-10'>
                        <div><img src="/image3.jpg" alt="" />
                        </div>
                        <div>
                            <h2 className='text-2xl text-center font-medium'>Contract Logistics</h2>
                            <p className='text-justify to-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, commodi magni aliquam atque voluptates neque illum illo nulla beatae quas odit pariatur, laudantium quisquam officia, assumenda velit nostrum quis? Aspernatur.
                                Ad, excepturi incidunt eius quibusdam nemo expedita ipsum veniam asperiores, iusto aliquam, in perspiciatis inventore magni. Repellendus velit labore pariatur accusamus fugiat ipsa necessitatibus suscipit modi quidem. Quo, praesentium veritatis!</p>
                        </div>
                    </div>
                </article>
                <article className='max-w-2xl'>
                    <div className=' flex flex-col gap-4 m-10'>
                        <div><img src="/image3.jpg" alt="" />
                        </div>
                        <div >
                            <div >
                                <div className='flex gap-2 mb-3'>
                                    <FontAwesomeIcon icon={faTruck} size="2x"/>
                                    <h2 className='text-2xl text-center font-medium'>Ground Transport</h2>
                                </div>
                                <p className='text-justify to-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, commodi magni aliquam atque voluptates neque illum illo nulla beatae quas odit pariatur, laudantium quisquam officia, assumenda velit nostrum quis? Aspernatur.
                                    Ad, excepturi incidunt eius quibusdam nemo expedita ipsum veniam asperiores, iusto aliquam, in perspiciatis inventore magni. Repellendus velit labore pariatur accusamus fugiat ipsa necessitatibus suscipit modi quidem. Quo, praesentium veritatis!</p>
                            </div>
                        </div>
                    </div>
                </article>
            </div>

        <Counting/>
        </div>
    )
}
export default Service