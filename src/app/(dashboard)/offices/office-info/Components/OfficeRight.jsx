'use client'

// MUI Imports
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabPanel from '@mui/lab/TabPanel'
import Grid from '@mui/material/Grid2'

// Component Imports
import CustomTabList from '@core/components/mui/TabList'
import { useState } from 'react'

const OfficeRight = ({ tabContentList }) => {
  // States
  const [activeTab, setActiveTab] = useState('basic')

  const handleChange = (event, value) => {
    setActiveTab(value)
  }

  return (
    <>
      <TabContext value={activeTab}>
        <Grid container spacing={6}>
          <Grid size={{ xs: 12 }}>
            <CustomTabList
              onChange={handleChange}
              variant='scrollable'
              pill='true'
              sx={theme => ({
                '& .MuiTab-root': {
                  // Light mode default
                  // color: theme.palette.mode === 'light' ? '#29B171' : 'white',
                  '& i': {
                    color: theme.palette.mode === 'light' ? '#29B171' : 'white'
                  },
                  '&:hover': {
                    '& i': {
                      color: '#29B171'
                    }
                  }
                },
                '& .Mui-selected': {
                  // Selected tab
                  color: 'white !important',
                  '& i': {
                    color: 'white !important'
                  }
                }
              })}
            >
              <Tab icon={<i className='tabler-leaf' />} value='basic' label='Basic Info' iconPosition='start' />
              <Tab
                icon={<i className='tabler-device-computer-camera' />}
                value='cameras'
                label='Cameras'
                iconPosition='start'
              />
              <Tab
                icon={<i className='tabler-binary-tree-2' />}
                value='functionalities'
                label='Functionalities'
                iconPosition='start'
              />
              <Tab icon={<i className='tabler-refresh-dot' />} value='settings' label='Settings' iconPosition='start' />
            </CustomTabList>
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TabPanel value={activeTab} className='p-0'>
              {tabContentList[activeTab]}
            </TabPanel>
          </Grid>
        </Grid>
      </TabContext>
    </>
  )
}

export default OfficeRight
