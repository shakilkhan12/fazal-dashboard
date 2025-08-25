'use client'
import { Button } from '@mui/material'
import { useState } from 'react'
import AddCameraDrawer from './AddCameraDrawer'
import IconBtn from '@/@core/components/mui/IconBtn'

const AddCamera = () => {
  const [addCameraOpen, setAddCameraOpen] = useState(false)
  const [data, setData] = useState([])
  return (
    <div className='flex justify-end mb-5'>
      <IconBtn onClick={() => setAddCameraOpen(!addCameraOpen)} icon={<i className='tabler-plus' />}>
        Add Camera
      </IconBtn>
      <AddCameraDrawer
        open={addCameraOpen}
        officeData={data}
        setData={setData}
        handleClose={() => setAddCameraOpen(!addCameraOpen)}
      />
    </div>
  )
}

export default AddCamera
