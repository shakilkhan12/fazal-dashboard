'use client'
import { Button } from '@mui/material'
import { useState } from 'react'
import AddOfficeDrawer from './AddOfficeDrawer'

const AddOffice = () => {
  const [addOfficeOpen, setAddOfficeOpen] = useState(false)
  const [data, setData] = useState([])
  return (
    <div className='flex justify-end mb-5'>
      <Button
        variant='contained'
        className='max-sm:is-full text-white'
        onClick={() => setAddOfficeOpen(!addOfficeOpen)}
        startIcon={<i className='tabler-plus' />}
      >
        Add Office
      </Button>
      <AddOfficeDrawer
        open={addOfficeOpen}
        officeData={data}
        setData={setData}
        handleClose={() => setAddOfficeOpen(!addOfficeOpen)}
      />
    </div>
  )
}

export default AddOffice
