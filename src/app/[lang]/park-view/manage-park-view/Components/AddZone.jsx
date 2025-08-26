'use client'
import { Button } from '@mui/material'
import { useState } from 'react'
import IconBtn from '@/@core/components/mui/IconBtn'
import AddZoneDrawer from './AddZoneDrawer'

const AddZone = () => {
  const [addZoneOpen, setAddZoneOpen] = useState(false)
  const [data, setData] = useState([])
  return (
    <div className='flex justify-end mb-5'>
      <IconBtn onClick={() => setAddZoneOpen(!addZoneOpen)} icon={<i className='tabler-plus' />}>
        Add Zone
      </IconBtn>
      <AddZoneDrawer open={addZoneOpen} setData={setData} handleClose={() => setAddZoneOpen(!addZoneOpen)} />
    </div>
  )
}

export default AddZone
