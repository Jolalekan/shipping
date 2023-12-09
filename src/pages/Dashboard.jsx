import React from "react"
import { useState } from "react"
import useAuth from "../UseAuth"
import axios from 'axios'
import TrackList from "./TrackList"
import CreateShipping from "./CreateShipping"
import { Link } from "react-router-dom"
const Dashboard = () => {

    
    return (

        <div className="  p-5">
            <div className="mb-5">
                <h2 className="text-lg">Click below to create Shipping information</h2>
            <Link to="/create" className="text-3xl text-bold text-gray-900 underline">Create</Link>
            </div>
            
            <div><TrackList/></div>

        </div>

    )
}

export default Dashboard