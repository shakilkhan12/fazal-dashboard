// MUI Imports
import Grid from '@mui/material/Grid2'
import CardView from './Components/CardView'
import BasicInfo from './Components/BasicInfo'
import { Typography } from '@mui/material'
import CamerasTable from './Components/Cameras'
import cameraData from './data'
import Functionalities from './Components/Functionalities'
import Settings from './Components/Settings'
import Link from 'next/link'
import IconBtn from '@/@core/components/mui/IconBtn'
import ParkRight from './Components/ParkRight'
import Zones from './Components/Zones'
import zoneData from './zones'

const OfficeInfo = () => {
  // Vars
  const tabContentList = data => ({
    basic: <BasicInfo />,
    cameras: <CamerasTable cameras={cameraData} />,
    zones: <Zones zones={zoneData} />,
    functionalities: <Functionalities />,
    settings: <Settings />
  })
  return (
    <>
      <div className='flex items-center justify-between gap-4 mb-5'>
        <Typography className='text-lg font-medium'>Municipality Office - مكتب البلدية</Typography>
        <Link href='/park-view'>
          <IconBtn icon={<i className='tabler-chevron-left' />}>Back</IconBtn>
        </Link>
      </div>
      <Grid container spacing={6}>
        <Grid size={{ xs: 12, lg: 3, md: 4 }}>
          <CardView />
        </Grid>
        <Grid size={{ xs: 12, lg: 9, md: 8 }}>
          <ParkRight tabContentList={tabContentList([])} />
        </Grid>
      </Grid>
    </>
  )
}

export default OfficeInfo
