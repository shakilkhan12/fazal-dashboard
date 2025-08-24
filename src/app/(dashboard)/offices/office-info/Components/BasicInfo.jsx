'use client'
import CustomTextField from '@/@core/components/mui/TextField'
import { Button, Card, FormControlLabel, Grid2, IconButton, InputAdornment, Switch, Typography } from '@mui/material'
import { Controller, useForm } from 'react-hook-form'

const BasicInfo = () => {
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
      location: ''
    }
  })
  return (
    <Card className='p-4'>
      <div className='flex items-center justify-between gap-4 mb-7'>
        <Typography className='text-lg font-medium '>Basic Information المعلومات الأساسية</Typography>
        <FormControlLabel labelPlacement='start' control={<Switch defaultChecked />} label='Status' />
      </div>
      <form>
        <Grid2 container spacing={4}>
          <Grid2 size={{ xs: 12, sm: 4 }}>
            <CustomTextField fullWidth label='Office ID' type={'text'} placeholder='1234' />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 4 }}>
            <CustomTextField fullWidth label='English Name' type={'text'} placeholder='English Name' />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 4 }}>
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
                  placeholder='مكتب البلدية'
                  {...(errors.arabic_name && { error: true, helperText: 'This field is required.' })}
                />
              )}
            />
            {/* <CustomTextField fullWidth label='Arabic Name' type={'text'} placeholder='مكتب البلدية' /> */}
          </Grid2>
          <CustomTextField
            fullWidth
            label='Location'
            type={''}
            placeholder='Islamabad G-8'
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
          />
          <Grid2 size={{ xs: 12 }} className='flex gap-4'>
            <Button
              variant='contained'
              className='max-sm:is-full text-white'
              startIcon={<i className='tabler-refresh' />}
            >
              Update
            </Button>
          </Grid2>
        </Grid2>
      </form>
    </Card>
  )
}

export default BasicInfo
