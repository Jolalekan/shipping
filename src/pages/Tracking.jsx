import React from 'react'
import { useState } from 'react'
import axios from "axios"
import { useNavigate, useParams } from 'react-router-dom'
import { useQueryClient } from "@tanstack/react-query"
import { Company } from '../components/Company'
import { Partner } from '../components/Partner'

const Tracking = () => {

    // const { trackingNumber } = useParams()
    // console.log("Params", useParams())
    const queryClient = useQueryClient()
    const navigate = useNavigate()

    const [trackingNumber, setTrackingNumber] = useState("")
    const [shipment, setShipmet] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {

            setLoading(true)
            console.log(trackingNumber)

            const response = await axios.get(`api/tracking/${trackingNumber}`)


            queryClient.invalidateQueries("shipmentDetails")
            navigate(`/shipment/${trackingNumber}`)

            setShipmet(response.data)


            setError("")

        } catch (error) {
            console.error("Error fetching tracking information", error.message)
            setError("Error fetching tracking information")
        }
        finally {
            setLoading(false)
        }

    }

    return (

        <div >
            <Company />

            <div className='max-w-2xl mx-auto p-6'>
                <h2 className='text-gray-600 text-center text-xl font-bold underline lg:text-2xl'>Track Your Parcel</h2>
                <form className='flex flex-col gap-5 m-20' onSubmit={handleSubmit}>
                    <h2 className='text-center text-x md:text-2xl font-medium'>Tracking Number</h2>
                    <input type="text"
                        placeholder='Enter Tracking Number'
                        value={trackingNumber}
                        onChange={(e) => setTrackingNumber(e.target.value)}
                        className="w-48 lg:w-96 self-center"
                    />
                    <button className='self-center rounded-xl w-32 md:w-48 bg-gray-900 p-4 text-gray-200 font-medium '>Track</button>
                    {error && <p className='text-red-900 text-sm font-medium'>{error}</p>}
                </form>
            </div>
            <Partner/>
        </div>
    )
}

export default Tracking