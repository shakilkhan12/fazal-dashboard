'use client'
import { Button, Card, MenuItem, Typography } from '@mui/material'
import LanguageInput from './LanguageInput'
import SharedEditor from './SharedEditor'
import CustomMuiButton from '@/@core/components/mui/CustomMuiButton'
import ComponentTitle from './ComponentTitle'

const TermsCondition = () => {
  return (
    <Card className='p-4'>
      <div className='flex flex-wrap items-center justify-between gap-4 mb-7'>
        <ComponentTitle>Terms & Conditions</ComponentTitle>
        <LanguageInput />
      </div>
      <SharedEditor
        content='<p>Default Terms & Conditions text...</p>'
        placeholder='Write Terms & Conditions here...'
      />
      <div className='flex justify-end mt-5'>
        <CustomMuiButton>Save Changes</CustomMuiButton>
      </div>
    </Card>
  )
}

export default TermsCondition
