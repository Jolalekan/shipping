import React from "react"
import { useState } from "react"
import axios from 'axios'
const CreateShipping = () => {

    const token = localStorage.getItem("token")
    console.log("submit token", token)


    const [formData, setFormData] = useState({})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [successMessage, setSuccessMessage] = useState("")
    const [trackingNumber, setTrackingNumber] = useState(null)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })

    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            setLoading(true);
            const response = await axios.post("/api/tracking", {
                formData
            }, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                withCredentials: true
            });

            const { trackingNumber } = response.data
            setTrackingNumber(trackingNumber)

            setSuccessMessage(`Successfully created a tracking number. Tracking Number: ${trackingNumber}`)
            setError("")
            setFormData({
                dateOfShipping: "",
                dateOfDelivery: "",
                country: "",
                sender: "",
                receiver: "",
                sendAddress: "",
                receiveAddress: "",
                no: "",
                qty: "",
                content: "",
                service: "",
                weight: "",
                date: "",
                location: "",
                details: "",
                activities: "",
            })

        } catch (error) {
            console.error("Error creating tracking information", error.message);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (

        <div className="max-w-7xl mx-auto my-12 p-5">

            <h2 className="lg:text-2xl font-medium uppercase mb-5">Create a tracking information</h2>
            <form className=" flex flex-col gap-5" onSubmit={handleSubmit}>
                <div className=" gap-4">
                    <h2 className="font-medium">Shipping Date</h2>
                    <input
                        type="date"
                        placeholder="Shipping Date"
                        id="dateOfShipping"
                        onChange={handleChange}
                        value={formData.dateOfShipping}
                        // onChange={(e) => setSenders(e.target.value)}
                        className="w-64 p-3 mt-2 border rounded"
                        required
                    />
                </div>
                <div className=" gap-4">
                    <h2 className="font-medium">Delivery Date</h2>
                    <input type="date"
                        placeholder="Delivery Date"
                        id="dateOfDelivery"
                        onChange={handleChange}
                        value={formData.dateOfDelivery}
                        // onChange={(e) => setDelivery(e.target.value)}
                        className="w-64 mt-2 border p-3 rounded"
                        required
                    />
                </div>

                <div className=" gap-4">
                    <h2 className="font-medium">Country</h2>
                    <input type="text"
                        placeholder="Country"
                        id="country"
                        onChange={handleChange}
                        value={formData.country}
                        // onChange={(e) => setSenders(e.target.value)}
                        className="w-full lg:w-2/3 mt-2"
                        required
                    />
                </div>
                <div className=" gap-4">
                    <h2 className="font-medium">Sender's Name</h2>
                    <input type="text"
                        placeholder="Sender's Name"
                        id="sender"
                        onChange={handleChange}
                        value={formData.sender}
                        // onChange={(e) => setSenders(e.target.value)}
                        className="w-full lg:w-2/3 mt-2"
                        required
                    />
                </div>
                <div className=" gap-4">
                    <h2 className="font-medium">Receiver"s Name</h2>
                    <input type="text"
                        placeholder="Receiver's Name "
                        id="receiver"
                        onChange={handleChange}
                        value={formData.receiver}
                        // onChange={(e) => setReceivers(e.target.value)}
                        className="w-full lg:w-2/3 mt-2"
                        required
                    />
                </div>
                <div className=" gap-4">
                    <h2 className="font-medium">Sender's Address</h2>
                    <input type="text"
                        placeholder="Sender's Address"
                        id="sendAddress"
                        onChange={handleChange}
                        value={formData.sendAddress}
                        // onChange={(e) => setSenderAddress(e.target.value)}
                        className="w-full lg:w-2/3 mt-2"
                        required
                    />
                </div>
                <div className=" gap-4">
                    <h2 className="font-medium">Receiver's Address</h2>
                    <input type="text"
                        placeholder="Address"
                        id="receiveAddress"
                        onChange={handleChange}
                        value={formData.receiveAddress}
                        // onChange={(e) => setReceiverAddress(e.target.value)}
                        className="w-full lg:w-2/3 mt-2"
                        required
                    />
                </div>
                <div className=" gap-4">
                    <h2 className="font-medium">No</h2>
                    <input type="text"
                        placeholder="No"
                        id="no"
                        onChange={handleChange}
                        value={formData.no}
                        // onChange={(e) => setNo(e.target.value)}
                        className="w-full lg:w-2/3 mt-2"
                        required
                    />
                </div>
                <div className=" gap-4">
                    <h2 className="font-medium">Qty</h2>
                    <input type="text"
                        placeholder="Quantity"
                        id="qty"
                        onChange={handleChange}
                        value={formData.qty}
                        // onChange={(e) => setQty(e.target.value)}
                        className="w-full lg:w-2/3 mt-2"
                        required
                    />
                </div>
                <div className=" gap-4">
                    <h2 className="font-medium">Content</h2>
                    <input type="text"
                        placeholder="Content"
                        id="content"
                        onChange={handleChange}
                        value={formData.content}
                        // onChange={(e) => setContent(e.target.value)}
                        className="w-full lg:w-2/3 mt-2"
                        required
                    />
                </div>


                <div className=" gap-4">
                    <h2 className="font-medium">Service Type</h2>
                    <input type="text"
                        placeholder="Service Type "
                        id="service"
                        onChange={handleChange}
                        value={formData.service}
                        // onChange={(e) => setService(e.target.value)}
                        className="w-full lg:w-2/3 mt-2"
                        required
                    />
                </div>

                <div className=" gap-4">
                    <h2 className="font-medium">Weight</h2>
                    <input type="text"
                        placeholder="Weight "
                        id="weight"
                        onChange={handleChange}
                        value={formData.weight}
                        // onChange={(e) => setService(e.target.value)}
                        className="w-full lg:w-2/3 mt-2"
                        required
                    />
                </div>

                <div className=" gap-4">
                    <input type="date"
                        placeholder="Weight"
                        id="date"
                        onChange={handleChange}
                        value={formData.date}
                        // onChange={(e) => setweight(e.target.value)}
                        className="w-64 mt-2 border p-3 rounded"
                        required
                    />
                </div>
                <div className=" gap-4">

                    <input type="text"
                        placeholder="Activities"
                        id="activities"
                        onChange={handleChange}
                        value={formData.activities}
                        // onChange={(e) => setweight(e.target.value)}
                        className="w-full lg:w-2/3 mt-2"
                        required
                    />
                </div>
                <div className=" gap-4">
                    <h2 className="font-medium">Location</h2>
                    <input type="text"
                        placeholder="Location"
                        id="location"
                        onChange={handleChange}
                        value={formData.location}
                        // onChange={(e) => setweight(e.target.value)}
                        className="w-full lg:w-2/3 mt-2"
                        required
                    />
                </div>
                <div className=" gap-4">
                    <h2 className="font-medium">Details</h2>
                    <input type="text"
                        id="details"
                        onChange={handleChange}
                        value={formData.details}
                        // onChange={(e) => setweight(e.target.value)}
                        className="w-full lg:w-2/3 mt-2"
                        required
                    />
                </div>

                <button className="lg:w-96 bg-gray-800 text-white p-4 hover:opacity-90 rounded-xl disabled:opacity-90" disabled={loading}>{loading ? "Submitting" : "Submit"}</button>
                {error && <p className="text-red-900">{error}</p>}
                {successMessage && <p className="text-green-900">{successMessage}</p>}

            </form>
        </div>

    )
}

export default CreateShipping