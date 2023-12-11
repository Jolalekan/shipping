import React from 'react'

const ShipmentHistory = ({ shipment }) => {
    return (
        <div>
            <div className='grid grid-cols-4 '>
                <div >
                    <h2 className='text-sm lg:text-lg font-bold'>DATE & TIME</h2>
                </div>
                <div>
                    <h2 className='text-sm lg:text-lg font-bold'>ACTIVITIES</h2>
                </div>
                <div>
                    <h2 className='text-sm lg:text-lg font-bold'>LOCATION</h2>
                </div>
                <div>
                    <h2 className='text-sm lg:text-lg font-bold'>DESCRIPTION</h2>
                </div>
            </div>

            {/* Render current values */}
            <div className='grid grid-cols-4 bg-white border-b-2'>
                <div>
                    <p className='text-sm lg:text-lg font-medium'>{new Date(shipment.date).toLocaleDateString()}</p>
                </div>
                <div>
                    <p className='text-sm lg:text-lg font-medium'>{shipment.activities}</p>
                </div>
                <div>
                    {shipment.location && (
                        <p className='text-sm lg:text-lg font-medium'>{shipment.location}</p>
                    )}
                </div>

                <div>
                    {shipment.details && (
                        <p className='text-sm lg:text-lg font-medium'>{shipment.details}</p>
                    )}
                </div>
            </div>

        </div>
    )
}

export default ShipmentHistory
