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

const AddOfficeDrawer = props => {
  // Props
  const { open, handleClose, officeData, setData } = props

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
      className='backdrop-blur'
      onClose={handleReset}
      ModalProps={{ keepMounted: true }}
      sx={{ '& .MuiDrawer-paper': { width: { xs: 300, sm: 400 }, borderLeft: '3.5px solid #2BB673B2' } }}
    >
      <div className='flex items-center justify-between pli-6 plb-5 '>
        <Typography variant='h5'>Add New Office</Typography>
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
                label='Office ID'
                placeholder='Enter Office ID Here'
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
                label='English Name'
                placeholder='Enter Office English Name Here'
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
                fullWidth
                onChange={e => {
                  // Filter only Arabic characters while typing
                  const value = e.target.value.replace(/[^\u0600-\u06FF\s]/g, '')
                  field.onChange(value)
                }}
                inputProps={{ dir: 'rtl', style: { textAlign: 'right' } }}
                label='Arabic Name'
                placeholder='أدخل اسم المكتب باللغة العربية هنا'
                {...(errors.arabic_name && { error: true, helperText: 'This field is required.' })}
              />
            )}
          />
          <div className='flex items-end gap-4'>
            <CustomTextField
              label='Image'
              placeholder='No file chosen'
              value={fileName}
              className='flex-auto'
              slotProps={{
                input: {
                  readOnly: true,
                  endAdornment: fileName ? (
                    <InputAdornment position='end'>
                      <IconButton size='small' edge='end' onClick={() => setFileName('')}>
                        <i className='tabler-x' />
                      </IconButton>
                    </InputAdornment>
                  ) : null
                }
              }}
            />
            <Button component='label' variant='tonal' htmlFor='contained-button-file' className='min-is-fit'>
              Choose
              <input hidden id='contained-button-file' type='file' onChange={handleFileUpload} ref={fileInputRef} />
            </Button>
          </div>

          <CustomTextField
            fullWidth
            label='Location'
            value={'Location'}
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
          <div className='flex items-center gap-4'>
            <Button variant='contained' className='max-sm:is-full text-white' startIcon={<i className='tabler-plus' />}>
              Add Office
            </Button>
            <Button variant='tonal' color='error' type='reset' onClick={handleReset}>
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </Drawer>
  )
}

export default AddOfficeDrawer
