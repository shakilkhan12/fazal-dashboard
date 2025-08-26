'use client'
import { Button } from '@mui/material'
import { useState } from 'react'
import AddParkDrawer from './AddParkDrawer'
import IconBtn from '@/@core/components/mui/IconBtn'

const AddPark = () => {
  const [AddParkOpen, setAddParkOpen] = useState(false)
  const [data, setData] = useState([])
  return (
    <div className='flex justify-end mb-5'>
      <IconBtn onClick={() => setAddParkOpen(!AddParkOpen)} icon={<i className='tabler-plus' />}>
        Add Park
      </IconBtn>
      <AddParkDrawer
        open={AddParkOpen}
        officeData={data}
        setData={setData}
        handleClose={() => setAddParkOpen(!AddParkOpen)}
      />
    </div>
  )
}

export default AddPark
