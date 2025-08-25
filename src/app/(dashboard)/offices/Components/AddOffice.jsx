'use client'
import { Button } from '@mui/material'
import { useState } from 'react'
import AddOfficeDrawer from './AddOfficeDrawer'
import IconBtn from '@/@core/components/mui/IconBtn'

const AddOffice = () => {
  const [addOfficeOpen, setAddOfficeOpen] = useState(false)
  const [data, setData] = useState([])
  return (
    <div className='flex justify-end mb-5'>
      <IconBtn onClick={() => setAddOfficeOpen(!addOfficeOpen)} icon={<i className='tabler-plus' />}>
        Add Office
      </IconBtn>
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
