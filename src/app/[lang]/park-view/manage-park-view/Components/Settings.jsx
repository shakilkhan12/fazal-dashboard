'use client'
import CustomTextField from '@/@core/components/mui/TextField'
import { Button, Card, Grid2, Typography } from '@mui/material'
import ComponentTitle from './ComponentTitle'
import IconBtn from '@/@core/components/mui/IconBtn'

const Settings = () => {
  return (
    <Card className='p-4'>
      <ComponentTitle>Settings</ComponentTitle>
      <form className='mt-5'>
        <Grid2 container spacing={4}>
          <Grid2 size={{ xs: 12, sm: 6 }}>
            <CustomTextField fullWidth label='Stream URL' type={'text'} placeholder='Stram URL' />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6 }}>
            <CustomTextField fullWidth label='Stream API Key' type={'text'} placeholder='Stream API Key' />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6 }}>
            <CustomTextField fullWidth label='Stream Path' type={'text'} placeholder='Stream Path' />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6 }}>
            <CustomTextField fullWidth label='Password' type={'password'} placeholder='Password' />
          </Grid2>
          <Grid2 size={{ xs: 12 }} className='flex gap-4'>
            <IconBtn icon={<i className='tabler-refresh' />}>Update</IconBtn>
          </Grid2>
        </Grid2>
      </form>
    </Card>
  )
}

export default Settings
