import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const EditTracking = () => {
    const { trackingNumber } = useParams()

    const [formData, setFormData] = useState({
        // date: '', // or initialize with a default date
        activities: '',
        location: '',
        details: ''

    })


    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [successMessage, setSuccessMessage] = useState(false)
    const navigate = useNavigate()


    useEffect(() => {
        const fetchData = async () => {
            try {

                const response = await axios.get(`/api/tracking/${trackingNumber}`)
                const userData = response.data

                setFormData({
                    //  date: userData.date || "",
                    activities: userData.activities || "",
                    location: userData.location || "",
                    details: userData.details || "",

                })
            } catch (error) {
                console.error("Error when fetching data", error)
                setError("Error fetching user data")
            }
        }

        fetchData()
    }, [trackingNumber])



    const handleChange = (e) => {

        let value = e.target.value;

    //    // Check if the input is of type date
    //     if (e.target.type === 'date') {
    //         // Extract the date portion without the time
    //         const dateOnly = new Date(value).toISOString().split('T')[0];
    //         value = dateOnly;
    //     }

        setFormData({
            ...formData,
            [e.target.id]: value,
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            setLoading(true)

            await axios.put(`/api/tracking/${trackingNumber}`, formData)

            setSuccessMessage("Data updated succesfully")
            navigate(`/shipment/${trackingNumber}`)
        } catch (error) {
            console.error("Error submiting data", error)
            setError("Error submitting data")
        }
        finally {
            setLoading(false)
        }
    }


    return (
        <div className="max-w-7xl mx-auto my-12 p-5">
            <h2 className="lg:text-2xl font-medium uppercase mb-5">Edit Tracking </h2>
            <form className=" flex flex-col gap-5" onSubmit={handleSubmit}>
                <div>
                <h2 className="font-medium">Activities</h2>
                    <input type="text"
                        id="activities"
                        value={formData.activities}
                        onChange={handleChange}
                        className="w-full lg:w-2/3 mt-2"
                    />
                </div>
                <div>
                <h2 className="font-medium">Location</h2>
                    <input type="text"
                        id="location"
                        placeholder='location'
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full lg:w-2/3 mt-2"
                    />
                </div>
                <div>
                <h2 className="font-medium">Details</h2>
                    <input type="text"
                        id="details"
                        placeholder='details'
                        value={formData.details}
                        onChange={handleChange}
                        className="w-full lg:w-2/3 mt-2"
                    />
                </div>
                <button className="self-center lg:w-96 bg-gray-800 text-white p-4 hover:opacity-90 rounded-xl disabled:opacity-90" disabled={loading}>{loading ? "Submitting" : "Submit"}</button>
                {error && <p className='text-red-700'>{error}</p>}
                {successMessage && <p className='text-green-600'>{successMessage}</p>}
            </form>
        </div>
    )
}

export default EditTracking