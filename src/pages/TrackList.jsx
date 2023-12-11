import React from 'react'
import { useQuery } from '@tanstack/react-query'
import TrackTable from '../components/TrackTable'
import axios from 'axios'
const TrackList = () => {

  const { isLoading, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: async () => {
      const response = await axios.get("http://localhost:4000/api/trackinglist")
      return response

    }
  })

  if (isLoading) return "loading"
  

  return (
    <div>
      <TrackTable shippingList={data} />
    </div>
  )
}

export default TrackList