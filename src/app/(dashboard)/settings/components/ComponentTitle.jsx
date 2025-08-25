import { Typography } from '@mui/material'

const ComponentTitle = ({ children }) => {
  return (
    <Typography
      className='font-medium text-[22px]'
      sx={theme => ({
        color: theme.palette.mode === 'dark' ? theme.palette.text.secondary : '#2F2B3D · 90%'
      })}
    >
      {children}
    </Typography>
  )
}

export default ComponentTitle
