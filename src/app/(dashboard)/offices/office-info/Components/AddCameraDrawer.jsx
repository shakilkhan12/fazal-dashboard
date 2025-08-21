// React Imports
import { useState, useRef } from 'react'

// MUI Imports
import Button from '@mui/material/Button'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import InputAdornment from '@mui/material/InputAdornment'

// Third-party Imports
import { useForm, Controller } from 'react-hook-form'

// Components Imports
import CustomTextField from '@core/components/mui/TextField'
import { FormControlLabel, Switch } from '@mui/material'

const AddCameraDrawer = props => {
  // Props
  const { open, handleClose, cameraData, setData } = props

  // States
  const [officeId, setOfficeId] = useState('')
  const [englishName, setEnglishName] = useState('')
  const [arabicName, setArabicName] = useState('')
  const [fileName, setFileName] = useState('')
  const [loation, setLocation] = useState('')

  // Refs
  const fileInputRef = useRef(null)

  // Hooks
  const {
    control,
    reset: resetForm,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      officeId: '',
      englishName: '',
      arabicName: '',
      image: '',
      location: ''
    }
  })

  // Handle Form Submit
  const handleFormSubmit = data => {
    handleReset()
  }

  // Handle Form Reset
  const handleReset = () => {
    handleClose()
    resetForm({ officeId: '', englishName: '', arabicName: '', image: '', location: '' })
  }

  // Handle File Upload
  const handleFileUpload = event => {
    const { files } = event.target

    if (files && files.length !== 0) {
      setFileName(files[0].name)
    }
  }

  return (
    <Drawer
      open={open}
      anchor='right'
      variant='temporary'
      className='backdrop-blur z-[99999]'
      onClose={handleReset}
      ModalProps={{ keepMounted: true }}
      sx={{ '& .MuiDrawer-paper': { width: { xs: 300, sm: 400 }, borderLeft: '3.5px solid #2BB673B2' } }}
    >
      <div className='flex items-center justify-between pli-6 plb-5 '>
        <Typography variant='h5'>Manage Camera</Typography>
        <div className='flex items-center justify-center bg-primary rounded-sm cursor-pointer' onClick={handleReset}>
          <i className='tabler-x text-textSecondary text-xl text-white' />
        </div>
      </div>
      <Divider />
      <div className='p-6'>
        <form onSubmit={handleSubmit(data => handleFormSubmit(data))} className='flex flex-col gap-5'>
          <Controller
            name='id'
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <CustomTextField
                {...field}
                fullWidth
                label='Camera ID'
                placeholder='SFI-4533'
                {...(errors.id && { error: true, helperText: 'This field is required.' })}
              />
            )}
          />
          <Controller
            name='name'
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <CustomTextField
                {...field}
                fullWidth
                label='Camera English Name'
                placeholder='Enter Camera English Name Here'
                {...(errors.name && { error: true, helperText: 'This field is required.' })}
              />
            )}
          />
          <Controller
            name='arabic_name'
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <CustomTextField
                {...field}
                fullWidth
                label='Camera Arabic Name'
                placeholder='Enter Camera Arabic Name Here'
                {...(errors.arabic_name && { error: true, helperText: 'This field is required.' })}
              />
            )}
          />
          <Controller
            name='ip'
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <CustomTextField
                {...field}
                fullWidth
                label='IP Address'
                placeholder='192.0.0.1'
                {...(errors.ip && { error: true, helperText: 'This field is required.' })}
              />
            )}
          />

          <CustomTextField
            fullWidth
            label='Location'
            value={status}
            placeholder='Enter Location Here'
            onChange={e => setStatus(e.target.value)}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton edge='end'>
                      <i className={'tabler-map-pin'} />
                    </IconButton>
                  </InputAdornment>
                )
              }
            }}
          ></CustomTextField>
          <div className='flex justify-start pl-2'>
            <FormControlLabel labelPlacement='start' control={<Switch defaultChecked />} label='Status' />
          </div>
          <div className='flex items-center gap-3'>
            <span className=' text-[15px]'>Last active</span>
            <span className={`flex w-[10px] h-[10px] rounded-full bg-gray-400`}></span>
            <span className=' text-[15px]'>12 July 2025 at 10:25 PM</span>
            <i className='tabler-reload text-[15px] '></i>
          </div>
          <div className='flex items-center gap-4'>
            <Button
              variant='contained'
              className='max-sm:is-full text-white'
              startIcon={<i className='tabler-refresh' />}
            >
              Update
            </Button>
          </div>
        </form>
      </div>
    </Drawer>
  )
}

export default AddCameraDrawer
