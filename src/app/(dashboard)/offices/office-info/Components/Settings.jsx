import CustomTextField from '@/@core/components/mui/TextField'
import { Button, Card, Grid2, Typography } from '@mui/material'

const Settings = () => {
  return (
    <Card className='p-4'>
      <Typography className='text-lg font-medium mb-7'>Settings </Typography>
      <form>
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
            <Button
              variant='contained'
              className='max-sm:is-full text-white'
              startIcon={<i className='tabler-refresh' />}
            >
              Update
            </Button>
          </Grid2>
        </Grid2>
      </form>
    </Card>
  )
}

export default Settings
