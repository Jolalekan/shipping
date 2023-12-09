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



// <div className='grid grid-cols-4 border-b-2'>
//                 {/* Render the common date */}
//                 {/* Render shipment history entries for activities */}
//                 {shipment.dateHistory.map((dateEntry, index) => (
//                     <div key={index}>
//                         <div>
//                             <p className='text-sm lg:text-lg font-medium'>{new Date(dateEntry.value).toLocaleDateString()}</p>
//                         </div>
//                     </div>
//                 ))}

//                 {/* Render shipment history entries for activities */}
//                 {shipment.activitiesHistory.map((activityEntry, index) => (
//                     <div key={index}>
//                         <div>
//                             <p className='text-sm lg:text-lg font-medium'>{activityEntry.value}</p>
//                         </div>
//                     </div>
//                 ))}

//                 {/* Render shipment history entries for location */}
//                 {shipment.locationHistory.map((locationEntry, index) => (
//                     <div key={index}>
//                         {/* <div>
//                 <p className='text-sm lg:text-lg font-medium'>{new Date(locationEntry.updatedAt).toLocaleDateString()}</p>
//             </div> */}
//                         <div>
//                             <p className='text-sm lg:text-lg font-medium'>{locationEntry.value}</p>
//                         </div>
//                     </div>
//                 ))}

//                 {/* Render shipment history entries for details */}
//                 {shipment.detailsHistory.map((detailsEntry, index) => (
//                     <div key={index}>
//                         {/* <div>
//                 <p className='text-sm lg:text-lg font-medium'>{new Date(detailsEntry.updatedAt).toLocaleDateString()}</p>
//             </div> */}
//                         <div>
//                             <p className='text-sm lg:text-lg font-medium'>{detailsEntry.value}</p>
//                         </div>
//                         <div>
//                             {/* You may need to adjust the logic based on how detailsHistory is structured */}
//                         </div>
//                     </div>
//                 ))}
//             </div>