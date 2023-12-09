import React from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom'
import { useQuery } from "@tanstack/react-query"
import ShipmentHistory from '../components/ShipmentHistory'


const ShippingDetails = () => {

    const { trackingNumber } = useParams()

    const { data:  shipment, isLoading, isError } = useQuery({
        queryKey: ['shipmentDetails', trackingNumber],
        queryFn: async () => {
            const response = await axios.get(`/api/tracking/${trackingNumber}`);
            console.log(response)
            return response.data;
        }
    });

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (isError) {
        return <p>Error fetching shipment details.</p>;
    }


    return (
        <div  className="p-3 container max-w-7xl mx-auto  bg-gray-50  mb-5 ">
            <h2 className='mb-5 pt-5 font-bold text-gray-800 lg:text-2xl uppercase text-center'>Shipment Details</h2>
            {shipment && (
                <div className='p-2'>

                    <div className=' grid grid-cols-3 '> 
                        
                        <div >
                            <h2 className=' md:text-2xl font-semibold text-gray-800'>Ship Date</h2>
                            <div class="mr-2 border-t-4 border-teal-700 lg:w-48 my-1"></div>
                            <p className='text-sm md:text-xl font-medium'>{new Date(shipment.dateOfShipping).toLocaleDateString()}</p>

                        </div>

                        <div className='text-center'>
                            <h2 className=' md:text-2xl font-semibold text-gray-800'>Delivery Date</h2>
                            <div className=' border-t-4 border-teal-700 my-1 '></div>
                            <p className=' text-sm md:text-xl font-medium text-gray-800'>{new Date(shipment.dateOfDelivery).toLocaleDateString()}</p>
                        </div>
                        <div >
                            <h2 className='md:text-2xl font-semibold text-center text-gray-800'>Destination</h2>
                            <div className='border-t-4 border-teal-700 my-1 ml-2 lg:ml-10'></div>
                            <p className='text-sm md:text-xl font-medium text-center text-gray-800'>{shipment.country}</p>
                        </div>
                        
                    </div>
                    <div className='my-3 flex justify-between bg-teal-50  rounded '>
                        
                    </div>

                    <h2 className=' text-lg lg:text-2xl font-semibold text-teal-700'>Sender's Information</h2>
                    <div className='border-t-4 border-teal-700 my-1 '></div>
                    <div className='grid grid-cols-2 my-1 lg:gap-x-64'>
                        <div>
                            <h2 className='text-gray-800 md:text-xl font-semibold my-2'>Sender's Name </h2>
                            <div className='border-t-4 border-teal-700 lg:w-80 mr-3'></div>
                            <p className='text-sm md:text-xl font-medium '> {shipment.sender}</p>
                            <p className='text-sm md:text-xl font-medium'>{shipment.sendAddress}</p>
                        </div>
                        <div>
                            <h2 className='text-gray-800 md:text-xl font-semibold my-2'>Receiver's Name</h2>
                            <div className='border-t-4 border-teal-700'></div>
                            <p className='text-sm md:text-xl font-medium '>{shipment.receiver}</p>
                            <p className='text-sm md:text-xl font-medium '>{shipment.receiveAddress}</p>
                        </div>
                    </div>
                    <h2 className='text-lg md:text-2xl font-semibold text-teal-700'>Shipment Descriptions</h2>
                    <div className='border-t-4 border-teal-700 my-2 w-full'></div>
                    <div className='grid grid-cols-3 my-5 gap-3'>

                        <div >
                            <h2 className='md:text-2xl font-semibold text-gray-800'>No. </h2>
                            <div className='border-t-4 border-teal-700 lg:w-48 my-1'></div>
                            <p className='text-sm md:text-xl font-medium text-gray-800'> {shipment.no}</p>
                        </div>
                        
                        <div className='text-center'>
                            <h2 className=' md:text-2xl font-semibold text-gray-900'>Quantity </h2>
                            <div className='border-t-4 border-teal-700 my-1'></div>
                            <p className='text-sm md:text-xl font-medium text-center text-gray-800'> {shipment.qty}</p>
                        </div>
                        <div className='text-center'>
                            <h2 className='md:text-2xl font-semibold text-gray-900'>Content</h2>
                            <div className='border-t-4 border-teal-700 lg:ml-10 my-1'></div>
                            <p className='text-sm md:text-xl font-medium'>{shipment.content}</p>
                        </div>
                    </div>

                    <h2 className='lg:text-2xl font-semibold text-teal-700'>Shipment Details</h2>
                    <div className='border-t-4 border-teal-700 my-2 w-full'></div>
                    <div className='grid grid-cols-3 my-5 w-full'>
                        <div >

                        <h2 className='md:text-2xl font-semibold text-gray-900'>Service Type </h2>
                            <div className='border-t-4 border-teal-700 lg:w-48 my-1 mr-2'></div>
                            <p className='text-sm md:text-xl font-medium'> {shipment.service}</p>

                        </div>

                        <div>
                            <h2 className='md:text-2xl font-semibold text-center text-gray-900'>Weight</h2>
                            <div className='border-t-4 border-teal-700 my-1'></div>
                            <p className='text-center text-sm md:text-xl font-medium '> {shipment.weight}</p>
                        </div>

                        <div>
                            <h2 className='md:text-2xl font-semibold text-center text-gray-900'>Reference</h2>
                            <div className='border-t-4 border-teal-700 lg:ml-10 ml-2 my-1'></div>
                            <p className=' text-sm md:text-xl font-medium text-center'>{shipment.trackingNumber}</p>
                        </div>
                    </div>

                    <h2 className='text-lg lg:text-2xl font-semibold text-teal-700'>Shipment History</h2>
                    <div className='border-t-4 border-teal-700 my-3'></div>
                    <h2 className=' lg:text-xl font-semibold text-teal-700'>Shipment activities is display here </h2>

                    <ShipmentHistory shipment={shipment} />

                </div>
            )}
        </div>
    )
}

export default ShippingDetails

{/* <div>
<h2 className='text-lg font-medium'>LOCATION</h2>
</div>
<div>
<h2 className='text-lg font-medium'>DESCRIPTION</h2>
</div>

<div>
                          
                          <p className='text-lg font-medium '>{shipment.location}</p>
                      </div>
                      <div>
                          
                          <p className='text-lg font-medium'>{shipment.details}</p>
                      </div> */}
