import { Grid2 } from '@mui/material'
import CardView from './components/CardView'
import SettingsRight from './components/SettingsRight'
import Profile from './components/Profile'
import TermsCondition from './components/TermsCondition'
import PrivacyPolicy from './components/PrivacyPolicy'
import Languge from './components/Language'
import FAQ from './components/FAQ'

const Settings = () => {
  // Vars
  const tabContentList = data => ({
    profile: <Profile />,
    terms: <TermsCondition />,
    policy: <PrivacyPolicy />,
    language: <Languge />,
    faq: <FAQ />
  })
  return (
    <Grid2 container spacing={6}>
      <Grid2 size={{ xs: 12, lg: 3, md: 4 }}>
        <CardView />
      </Grid2>
      <Grid2 size={{ xs: 12, lg: 9, md: 8 }}>
        <SettingsRight tabContentList={tabContentList([])} />
      </Grid2>
    </Grid2>
  )
}

export default Settings
