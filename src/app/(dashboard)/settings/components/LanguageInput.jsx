'use client'
import CustomTextField from '@/@core/components/mui/TextField'
import { MenuItem } from '@mui/material'
import { useState } from 'react'

const LanguageInput = () => {
  const [state, setState] = useState('English')
  return (
    <div className='md:max-w-[190px] w-full'>
      <CustomTextField select fullWidth value={state} onChange={e => setState(e.target.value)}>
        <MenuItem value='male'>English</MenuItem>
        <MenuItem value='female'>Arabic</MenuItem>
      </CustomTextField>
    </div>
  )
}

export default LanguageInput
