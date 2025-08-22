'use client'
import { Button, Card, MenuItem, Typography } from '@mui/material'
import LanguageInput from './LanguageInput'
import SharedEditor from './SharedEditor'

const PrivacyPolicy = () => {
  return (
    <Card className='p-4'>
      <div className='flex flex-wrap items-center justify-between gap-4 mb-7'>
        <Typography className='text-base md:text-[22px] font-medium'>Privacy Policy</Typography>
        <LanguageInput />
      </div>
      <SharedEditor
        content='<p>Default Terms & Conditions text...</p>'
        placeholder='Write Terms & Conditions here...'
      />
      <div className='flex justify-end mt-5'>
        <Button variant='contained'>Save Changes</Button>
      </div>
    </Card>
  )
}

export default PrivacyPolicy
