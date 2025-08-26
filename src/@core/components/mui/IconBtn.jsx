'use client'

import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import React from 'react'

// 🎨 Create a styled gradient button
const GradientButton = styled(props => <Button {...props} />)(({ theme }) => ({
  background: 'linear-gradient(270deg, #2BB673B2 0%, #2BB673 100%)',
  color: '#fff',
  textTransform: 'none',
  height: '38px',
  boxShadow: 'none',
  '&:hover': {
    background: 'linear-gradient(270deg, rgba(43, 182, 115, 0.70) 0%, #2BB673 100%)',
    boxShadow: '0 4px 10px rgba(0,0,0,0.15)'
  }
}))

// 🎯 Usage Example
export default function IconBtn({ onClick, children, icon }) {
  return (
    <GradientButton variant='contained' className='max-sm:is-full' onClick={onClick} startIcon={icon}>
      {children}
    </GradientButton>
  )
}
