'use client'
import CustomTextField from '@/@core/components/mui/TextField'
import { MenuItem } from '@mui/material'
import { useState } from 'react'

const LanguageInput = () => {
  const [state, setState] = useState('english')
  return (
    <div className='md:max-w-[190px] w-full'>
      <CustomTextField placeholder='Hello' select fullWidth value={state} onChange={e => setState(e.target.value)}>
        <MenuItem value='english'>English</MenuItem>
        <MenuItem value='arabic'>Arabic</MenuItem>
      </CustomTextField>
    </div>
  )
}

export default LanguageInput
