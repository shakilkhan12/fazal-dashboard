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
                  background: 'linear-gradient(270deg, rgba(43, 182, 115, 0.70) 0%, #2BB673 100%)',
                  // Selected tab
                  color: 'white !important',
                  '& i': {
                    color: 'white !important'
                  }
                }
              })}
            >
              <Tab icon={<i className='tabler-user' />} value='profile' label='Profile' iconPosition='start' />
              <Tab
                icon={<i className='tabler-file-alert' />}
                value='terms'
                label='Terms & Condition'
                iconPosition='start'
              />
              <Tab
                icon={<i className='tabler-file-invoice' />}
                value='policy'
                label='Privacy & Policy'
                iconPosition='start'
              />
              <Tab
                icon={<i className='tabler-language-katakana' />}
                value='language'
                label='Language'
                iconPosition='start'
              />
              <Tab icon={<i className='tabler-message-dots' />} value='faq' label='FAQ' iconPosition='start' />
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
