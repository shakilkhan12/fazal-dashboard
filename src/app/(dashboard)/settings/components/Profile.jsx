'use client'
import CustomTextField from '@/@core/components/mui/TextField'
import { Card, Grid2, MenuItem, Typography } from '@mui/material'
import { useState } from 'react'

const Profile = () => {
  const [state, setState] = useState({
    gender: 'male'
  })
  return (
    <Card className='p-4'>
      <Typography className='text-lg font-medium mb-7'>Profile Details</Typography>
      <form>
        <Grid2 container spacing={4}>
          <Grid2 size={{ xs: 12, sm: 4 }}>
            <CustomTextField fullWidth label='Employee ID' type={'text'} placeholder='1234' disabled />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 4 }}>
            <CustomTextField
              disabled
              select
              fullWidth
              label='Gender'
              value={state.gender}
              onChange={e => setState({ ...state, gender: e.target.value })}
            >
              <MenuItem value='male'>Male</MenuItem>
              <MenuItem value='female'>Female</MenuItem>
            </CustomTextField>
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 4 }}>
            <CustomTextField fullWidth label='Role' type={'text'} placeholder='Admin' disabled />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6 }}>
            <CustomTextField fullWidth label='English Name' type={'text'} placeholder='Sheikh Abdullah' disabled />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6 }}>
            <CustomTextField fullWidth label='Arabic Name' type={'text'} placeholder='شیخ عبداللہ' disabled />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6 }}>
            <CustomTextField fullWidth label='Phone' type='text' placeholder='456876766' disabled />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6 }}>
            <CustomTextField fullWidth label='Email' type={'email'} placeholder='abdullah@gmail.com ' disabled />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6 }}>
            <CustomTextField fullWidth label='Department English' type={'text'} placeholder='Irrigation' disabled />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6 }}>
            <CustomTextField fullWidth label='Department Arabic' type={'text'} placeholder='الري' disabled />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6 }}>
            <CustomTextField fullWidth label='Designation English' type={'text'} placeholder='Admin' disabled />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6 }}>
            <CustomTextField fullWidth label='Designation Arabic' type={'text'} placeholder='مسؤل' disabled />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6 }}>
            <CustomTextField fullWidth label='Unit English' type={'text'} placeholder='Unit 1' disabled />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6 }}>
            <CustomTextField fullWidth label='Unit Arabic' type={'text'} placeholder=' الوحدة 1' disabled />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6 }}>
            <CustomTextField fullWidth label='Committee English' type={'text'} placeholder='Central' disabled />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6 }}>
            <CustomTextField fullWidth label='Committee Arabic' type={'text'} placeholder='المركزية' disabled />
          </Grid2>
        </Grid2>
      </form>
    </Card>
  )
}

export default Profile
