'use client'
import CustomTextField from '@/@core/components/mui/TextField'
import { Card, Grid2, IconButton, InputAdornment, MenuItem, Typography } from '@mui/material'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import ComponentTitle from './ComponentTitle'

const Profile = () => {
  const [state, setState] = useState({
    gender: 'male'
  })
  const {
    control,
    reset: resetForm,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      // officeId: '',
      // englishName: '',
      // arabicName: '',
      // location: ''
    }
  })
  return (
    <Card className='px-4 pt-5 pb-12'>
      <ComponentTitle className='text-lg font-medium mb-7'>Profile Details</ComponentTitle>
      <form className='mt-5'>
        <Grid2 container spacing={4}>
          <Grid2 size={{ xs: 12, sm: 4 }}>
            <CustomTextField
              fullWidth
              label='Employee ID'
              type={'text'}
              placeholder='1234'
              disabled
              sx={{
                '& .MuiFilledInput-root.Mui-disabled': {
                  backgroundColor: '#F9F9F9'
                },
                '& .MuiInputLabel-root.Mui-disabled': {
                  color: '#2F2B3D' // change this to whatever label color you want
                }
              }}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 4 }}>
            <CustomTextField
              disabled
              select
              fullWidth
              label='Gender'
              value={state.gender}
              onChange={e => setState({ ...state, gender: e.target.value })}
              sx={{
                '& .MuiInputBase-root.Mui-disabled': {
                  backgroundColor: '#F9F9F9'
                },
                '& .MuiInputLabel-root.Mui-disabled': {
                  color: '#2F2B3D' // change this to whatever label color you want
                }
              }}
            >
              <MenuItem value='male'>Male</MenuItem>
              <MenuItem value='female'>Female</MenuItem>
            </CustomTextField>
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 4 }}>
            <CustomTextField
              fullWidth
              label='Role'
              type={'text'}
              placeholder='Admin'
              disabled
              sx={{
                '& .MuiInputBase-root.Mui-disabled': {
                  backgroundColor: '#F9F9F9'
                },
                '& .MuiInputLabel-root.Mui-disabled': {
                  color: '#2F2B3D' // change this to whatever label color you want
                }
              }}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6 }}>
            <CustomTextField
              fullWidth
              label='English Name'
              sx={{
                '& .MuiInputBase-root.Mui-disabled': {
                  backgroundColor: '#F9F9F9'
                },
                '& .MuiInputLabel-root.Mui-disabled': {
                  color: '#2F2B3D' // change this to whatever label color you want
                }
              }}
              type={'text'}
              placeholder='Sheikh Abdullah'
              disabled
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6 }}>
            <Controller
              name='arabic_name'
              control={control}
              disabled
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
                  placeholder='شیخ عبداللہ'
                  sx={{
                    '& .MuiInputBase-root.Mui-disabled': {
                      backgroundColor: '#F9F9F9'
                    },
                    '& .MuiInputLabel-root.Mui-disabled': {
                      color: '#2F2B3D' // change this to whatever label color you want
                    }
                  }}
                  {...(errors.arabic_name && { error: true, helperText: 'This field is required.' })}
                />
              )}
            />
            {/* <CustomTextField fullWidth label='Arabic Name' type={'text'} placeholder='شیخ عبداللہ' disabled /> */}
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6 }}>
            <CustomTextField
              fullWidth
              label='Phone'
              type='text'
              placeholder='456876766'
              disabled
              sx={{
                '& .MuiInputBase-root.Mui-disabled': {
                  backgroundColor: '#F9F9F9'
                },
                '& .MuiInputLabel-root.Mui-disabled': {
                  color: '#2F2B3D' // change this to whatever label color you want
                }
              }}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6 }}>
            <CustomTextField
              fullWidth
              sx={{
                '& .MuiInputBase-root.Mui-disabled': {
                  backgroundColor: '#F9F9F9'
                },
                '& .MuiInputLabel-root.Mui-disabled': {
                  color: '#2F2B3D' // change this to whatever label color you want
                }
              }}
              label='Email'
              type={'email'}
              placeholder='abdullah@gmail.com '
              disabled
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6 }}>
            <CustomTextField
              fullWidth
              label='Department English'
              type={'text'}
              placeholder='Irrigation'
              disabled
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton edge='end' aria-label='toggle password visibility'>
                        <i className={'tabler-chevron-down'} />
                      </IconButton>
                    </InputAdornment>
                  )
                }
              }}
              sx={{
                '& .MuiInputBase-root.Mui-disabled': {
                  backgroundColor: '#F9F9F9'
                },
                '& .MuiInputLabel-root.Mui-disabled': {
                  color: '#2F2B3D' // change this to whatever label color you want
                }
              }}
              // slotProps={{
              //   input: {
              //     startAdornment: (
              //       <InputAdornment position='end'>
              //         <i className='tabler-chevron-down' />
              //       </InputAdornment>
              //     )
              //   }
              // }}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6 }}>
            <Controller
              name='department_arabic'
              control={control}
              disabled
              rules={{
                required: true,
                pattern: {
                  value: /^[\u0600-\u06FF\s]+$/, // Only Arabic characters & spaces
                  message: 'Only Arabic letters are allowed'
                }
              }}
              render={({ field }) => (
                <CustomTextField
                  sx={{
                    '& .MuiInputBase-root.Mui-disabled': {
                      backgroundColor: '#F9F9F9'
                    },
                    '& .MuiInputLabel-root.Mui-disabled': {
                      color: '#2F2B3D' // change this to whatever label color you want
                    }
                  }}
                  {...field}
                  fullWidth
                  onChange={e => {
                    // Filter only Arabic characters while typing
                    const value = e.target.value.replace(/[^\u0600-\u06FF\s]/g, '')
                    field.onChange(value)
                  }}
                  inputProps={{ dir: 'rtl', style: { textAlign: 'right' } }}
                  label='Department Arabic'
                  placeholder='الري'
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position='end'>
                          <i className='tabler-chevron-down' />
                        </InputAdornment>
                      )
                    }
                  }}
                  {...(errors.arabic_department && { error: true, helperText: 'This field is required.' })}
                />
              )}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6 }}>
            <CustomTextField
              sx={{
                '& .MuiInputBase-root.Mui-disabled': {
                  backgroundColor: '#F9F9F9'
                },
                '& .MuiInputLabel-root.Mui-disabled': {
                  color: '#2F2B3D' // change this to whatever label color you want
                }
              }}
              fullWidth
              label='Designation English'
              type={'text'}
              placeholder='Admin'
              disabled
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton edge='end' aria-label='toggle password visibility'>
                        <i className={'tabler-chevron-down'} />
                      </IconButton>
                    </InputAdornment>
                  )
                }
              }}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6 }}>
            <Controller
              name='designation_arabic'
              control={control}
              disabled
              rules={{
                required: true,
                pattern: {
                  value: /^[\u0600-\u06FF\s]+$/, // Only Arabic characters & spaces
                  message: 'Only Arabic letters are allowed'
                }
              }}
              render={({ field }) => (
                <CustomTextField
                  sx={{
                    '& .MuiInputBase-root.Mui-disabled': {
                      backgroundColor: '#F9F9F9'
                    },
                    '& .MuiInputLabel-root.Mui-disabled': {
                      color: '#2F2B3D' // change this to whatever label color you want
                    }
                  }}
                  {...field}
                  fullWidth
                  onChange={e => {
                    // Filter only Arabic characters while typing
                    const value = e.target.value.replace(/[^\u0600-\u06FF\s]/g, '')
                    field.onChange(value)
                  }}
                  inputProps={{ dir: 'rtl', style: { textAlign: 'right' } }}
                  label='Designation Arabic'
                  placeholder='مسؤل'
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position='end'>
                          <i className='tabler-chevron-down' />
                        </InputAdornment>
                      )
                    }
                  }}
                  {...(errors.designation_arabic && { error: true, helperText: 'This field is required.' })}
                />
              )}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6 }}>
            <CustomTextField
              sx={{
                '& .MuiInputBase-root.Mui-disabled': {
                  backgroundColor: '#F9F9F9'
                },
                '& .MuiInputLabel-root.Mui-disabled': {
                  color: '#2F2B3D' // change this to whatever label color you want
                }
              }}
              fullWidth
              label='Unit English'
              type={'text'}
              placeholder='Unit 1'
              disabled
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton edge='end' aria-label='toggle password visibility'>
                        <i className={'tabler-chevron-down'} />
                      </IconButton>
                    </InputAdornment>
                  )
                }
              }}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6 }}>
            <Controller
              name='unit_arabic'
              control={control}
              disabled
              rules={{
                required: true,
                pattern: {
                  value: /^[\u0600-\u06FF\s]+$/, // Only Arabic characters & spaces
                  message: 'Only Arabic letters are allowed'
                }
              }}
              render={({ field }) => (
                <CustomTextField
                  sx={{
                    '& .MuiInputBase-root.Mui-disabled': {
                      backgroundColor: '#F9F9F9'
                    },
                    '& .MuiInputLabel-root.Mui-disabled': {
                      color: '#2F2B3D' // change this to whatever label color you want
                    }
                  }}
                  {...field}
                  fullWidth
                  onChange={e => {
                    // Filter only Arabic characters while typing
                    const value = e.target.value.replace(/[^\u0600-\u06FF\s]/g, '')
                    field.onChange(value)
                  }}
                  inputProps={{ dir: 'rtl', style: { textAlign: 'right' } }}
                  label='Unit Arabic'
                  placeholder='الوحدة 1'
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position='end'>
                          <i className='tabler-chevron-down' />
                        </InputAdornment>
                      )
                    }
                  }}
                  {...(errors.unit_arabic && { error: true, helperText: 'This field is required.' })}
                />
              )}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6 }}>
            <CustomTextField
              sx={{
                '& .MuiInputBase-root.Mui-disabled': {
                  backgroundColor: '#F9F9F9'
                },
                '& .MuiInputLabel-root.Mui-disabled': {
                  color: '#2F2B3D' // change this to whatever label color you want
                }
              }}
              fullWidth
              label='Committee English'
              type={'text'}
              placeholder='Central'
              disabled
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton edge='end' aria-label='toggle password visibility'>
                        <i className={'tabler-chevron-down'} />
                      </IconButton>
                    </InputAdornment>
                  )
                }
              }}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6 }}>
            <Controller
              name='committee_arabic'
              control={control}
              disabled
              rules={{
                required: true,
                pattern: {
                  value: /^[\u0600-\u06FF\s]+$/, // Only Arabic characters & spaces
                  message: 'Only Arabic letters are allowed'
                }
              }}
              render={({ field }) => (
                <CustomTextField
                  sx={{
                    '& .MuiInputBase-root.Mui-disabled': {
                      backgroundColor: '#F9F9F9'
                    },
                    '& .MuiInputLabel-root.Mui-disabled': {
                      color: '#2F2B3D' // change this to whatever label color you want
                    }
                  }}
                  {...field}
                  fullWidth
                  onChange={e => {
                    // Filter only Arabic characters while typing
                    const value = e.target.value.replace(/[^\u0600-\u06FF\s]/g, '')
                    field.onChange(value)
                  }}
                  inputProps={{ dir: 'rtl', style: { textAlign: 'right' } }}
                  label='Commiittee Arabic'
                  placeholder='المركزية'
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position='end'>
                          <i className='tabler-chevron-down' />
                        </InputAdornment>
                      )
                    }
                  }}
                  {...(errors.commiittee_arabic && { error: true, helperText: 'This field is required.' })}
                />
              )}
            />{' '}
          </Grid2>
        </Grid2>
      </form>
    </Card>
  )
}

export default Profile
