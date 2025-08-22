'use client'

// MUI Imports
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabPanel from '@mui/lab/TabPanel'
import Grid from '@mui/material/Grid2'

// Component Imports
import CustomTabList from '@core/components/mui/TabList'
import { useState } from 'react'

const SettingsRight = ({ tabContentList }) => {
  // States
  const [activeTab, setActiveTab] = useState('profile')

  const handleChange = (event, value) => {
    setActiveTab(value)
  }

  return (
    <>
      <TabContext value={activeTab}>
        <Grid container spacing={6}>
          <Grid size={{ xs: 12 }}>
            <CustomTabList onChange={handleChange} variant='scrollable' pill='true'>
              <Tab icon={<i className='tabler-leaf' />} value='profile' label='Profile' iconPosition='start' />
              <Tab
                icon={<i className='tabler-device-computer-camera' />}
                value='terms'
                label='Terms & Condition'
                iconPosition='start'
              />
              <Tab
                icon={<i className='tabler-binary-tree-2' />}
                value='policy'
                label='Privacy & Policy'
                iconPosition='start'
              />
              <Tab icon={<i className='tabler-refresh-dot' />} value='language' label='Language' iconPosition='start' />
              <Tab icon={<i className='tabler-refresh-dot' />} value='faq' label='FAQ' iconPosition='start' />
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

export default SettingsRight
