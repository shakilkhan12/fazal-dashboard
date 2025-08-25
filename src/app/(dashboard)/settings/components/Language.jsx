'use client'
import { Button, Card, IconButton, InputAdornment, Typography } from '@mui/material'
import LanguageInput from './LanguageInput'
import CustomTextField from '@/@core/components/mui/TextField'
import { useRef, useState } from 'react'
import ComponentTitle from './ComponentTitle'
import Image from 'next/image'

const Languge = () => {
  const [fileName, setFileName] = useState('')
  const [languages] = useState([
    { id: 1, name: 'administration', label: 'Administration' },
    { id: 2, name: 'offices', label: 'Offices' },
    { id: 3, name: 'parks', label: 'Parks' },
    { id: 4, name: 'my_account', label: 'My Accounts' }
  ])
  // Refs
  const fileInputRef = useRef(null)
  const handleFileUpload = event => {
    const { files } = event.target

    if (files && files.length !== 0) {
      setFileName(files[0].name)
    }
  }
  return (
    <Card className='px-6 pt-6 pb-12'>
      <div className='flex flex-wrap items-center justify-between gap-4 mb-7'>
        <ComponentTitle>Language Settings</ComponentTitle>
        <LanguageInput />
      </div>
      {languages.map(language => (
        <div key={language.id} className='mt-[25px]'>
          <Typography className='text-base md:text-lg mb-[24px]'>{language.label}</Typography>
          <div className='flex flex-wrap items-center gap-4'>
            <Button
              variant='outlined'
              startIcon={<Image src='/images/download.svg' width={22} height={22} alt='upload' />}
            >
              Download Template
            </Button>
            <div className='flex flex-wrap items-end gap-4'>
              <CustomTextField
                placeholder='Upload Modified Translation file'
                value={fileName}
                className='flex-auto min-w-[270px]'
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
              <Button
                component='label'
                startIcon={<Image src='/images/upload.svg' width={22} height={22} alt='upload' />}
                variant='tonal'
                htmlFor='contained-button-file'
                className='min-is-fit'
              >
                Upload
                <input hidden id='contained-button-file' type='file' onChange={handleFileUpload} ref={fileInputRef} />
              </Button>
            </div>
          </div>
        </div>
      ))}
    </Card>
  )
}

export default Languge
