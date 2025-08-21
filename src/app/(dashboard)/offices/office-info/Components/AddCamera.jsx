'use client'
import { Button } from '@mui/material'
import { useState } from 'react'
import AddCameraDrawer from './AddCameraDrawer'

const AddCamera = () => {
  const [addCameraOpen, setAddCameraOpen] = useState(false)
  const [data, setData] = useState([])
  return (
    <div className='flex justify-end mb-5'>
      <Button
        variant='contained'
        className='max-sm:is-full text-white'
        onClick={() => setAddCameraOpen(!addCameraOpen)}
        startIcon={<i className='tabler-plus' />}
      >
        Add Camera
      </Button>
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
