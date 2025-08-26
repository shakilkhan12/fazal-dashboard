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
import Image from 'next/image'

const AddZoneDrawer = props => {
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
        <Typography variant='h5'>Add New Zone</Typography>
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
                label='Zone ID'
                placeholder='Enter ID Here'
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
                placeholder='Enter English Name Here'
                {...(errors.name && { error: true, helperText: 'This field is required.' })}
              />
            )}
          />
          <Controller
            name='arabic_name'
            control={control}
            rules={{
              required: true,
              pattern: {
                value: /^[\u0600-\u06FF\s]+$/, // Only Arabic characters & spaces
                message: 'Only Arabic letters are allowed'
              }
            }}
            render={({ field }) => (
              <CustomTextField
                {...field}
                onChange={e => {
                  // Filter only Arabic characters while typing
                  const value = e.target.value.replace(/[^\u0600-\u06FF\s]/g, '')
                  field.onChange(value)
                }}
                inputProps={{ dir: 'rtl', style: { textAlign: 'right' } }}
                fullWidth
                label='Arabic Name'
                placeholder='اے بی وای-داخلی راستہ'
                {...(errors.arabic_name && { error: true, helperText: 'This field is required.' })}
              />
            )}
          />
          <div className='grid grid-cols-2 items-center gap-4'>
            <Controller
              name='ip'
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <CustomTextField
                  {...field}
                  fullWidth
                  label='Latitude'
                  placeholder='Enter Latitude'
                  {...(errors.latitude && { error: true, helperText: 'This field is required.' })}
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
                  label='Longitude'
                  placeholder='Enter Longitude'
                  {...(errors.longitude && { error: true, helperText: 'This field is required.' })}
                />
              )}
            />
          </div>
          <Controller
            name='ip'
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <CustomTextField
                {...field}
                fullWidth
                label='Device IP'
                placeholder='Enter Hardware IP Here'
                {...(errors.longitude && { error: true, helperText: 'This field is required.' })}
              />
            )}
          />
          <Controller
            name='web_api'
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <CustomTextField
                {...field}
                fullWidth
                label='Web API'
                placeholder='Enter Web API Here'
                {...(errors.webapi && { error: true, helperText: 'This field is required.' })}
              />
            )}
          />
          <div className='flex items-center gap-4'>
            <Button
              variant='contained'
              className='max-sm:is-full text-white'
              startIcon={<Image src='/link.svg' width={20} height={20} alt='connect' />}
            >
              Connect
            </Button>
            <Button variant='tonal' color='error'>
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </Drawer>
  )
}

export default AddZoneDrawer
