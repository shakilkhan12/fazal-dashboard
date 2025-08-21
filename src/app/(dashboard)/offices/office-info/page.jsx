// MUI Imports
import Grid from '@mui/material/Grid2'
import CardView from './Components/CardView'
import BasicInfo from './Components/BasicInfo'
import OfficeRight from './Components/OfficeRight'
import { Button, Typography } from '@mui/material'
import CamerasTable from './Components/Cameras'
import cameraData from './data'
import Functionalities from './Components/Functionalities'
import Settings from './Components/Settings'

const OfficeInfo = () => {
  // Vars
  const tabContentList = data => ({
    basic: <BasicInfo />,
    cameras: <CamerasTable cameras={cameraData} />,
    functionalities: <Functionalities />,
    settings: <Settings />
  })
  return (
    <>
      <div className='flex items-center justify-between gap-4 mb-5'>
        <Typography className='text-lg font-medium'>Municipality Office - مكتب البلدية</Typography>
        <Button
          variant='contained'
          className='max-sm:is-full text-white'
          href='/offices'
          startIcon={<i className='tabler-chevron-left' />}
        >
          Back
        </Button>
      </div>
      <Grid container spacing={6}>
        <Grid size={{ xs: 12, lg: 4, md: 5 }}>
          <CardView />
        </Grid>
        <Grid size={{ xs: 12, lg: 8, md: 7 }}>
          <OfficeRight tabContentList={tabContentList([])} />
        </Grid>
      </Grid>
    </>
  )
}

export default OfficeInfo
