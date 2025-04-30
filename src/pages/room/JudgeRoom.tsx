import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { RoomDetails } from '../../types/roomdetails'
import { getRoomDetailsById } from '../../api/roomApi'
import { DatasetLinked } from '@mui/icons-material'
import withDashboardLayout from '../../components/withDashboardLayout'

function JudgeRoom() {
  const { id } = useParams<{ id: string }>()
  const [loading, setLoading] = useState(true)
  const [room, setRoom] = useState<RoomDetails>()

  useEffect(() => {
    const fetchRoom = async () => {
      let data = null
      if (id) {
         data = await getRoomDetailsById(id)
      }
      if (data) {
        setRoom(data)
        setLoading(false)
      }
    }
    fetchRoom()
  }, [])


  return (
    <>
      {room && !loading ? (
        <>

        </>
      ) : (
        <div>Loading...</div>)}
    </>
  )
}

export default withDashboardLayout(JudgeRoom)
