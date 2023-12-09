import React, { useEffect } from 'react'


const SuccessPage = ({ trackingNumber }) => {
  console.log(trackingNumber)

  useEffect(() => {
    console.log("SuccessPage component mounted")

    return () => {
      console.log("SuccessPage component mounted")
    }
  }, [])

  console.log(trackingNumber)

  return (
    <div>
      <h2>Success</h2>
      <p>Your tracking number is : {trackingNumber}</p>
    </div>
  )
}

export default SuccessPage