'use client'
import CustomTextField from '@/@core/components/mui/TextField'
import { Button, Card, Typography } from '@mui/material'
import React, { useState } from 'react'
import LanguageInput from './LanguageInput'
import CustomIconButton from '@/@core/components/mui/IconButton'

const FAQ = () => {
  const [faqs, setFaqs] = useState([{ question: '', answer: '' }])

  // Add new FAQ
  const addFAQ = () => {
    setFaqs([...faqs, { question: '', answer: '' }])
  }

  // Remove FAQ by index
  const removeFAQ = index => {
    const newFaqs = faqs.filter((_, i) => i !== index)
    setFaqs(newFaqs)
  }

  // Update question/answer
  const handleChange = (index, field, value) => {
    const newFaqs = [...faqs]
    newFaqs[index][field] = value
    setFaqs(newFaqs)
  }

  // Save FAQs
  const handleSubmit = () => {
    console.log('Saved FAQs:', faqs)
    alert('FAQs saved! Check console.')
  }

  return (
    <Card className='p-4'>
      <div className='flex flex-wrap items-center justify-between gap-4 mb-7'>
        <Typography className='text-base md:text-[22px] font-medium'>Frequently Asked Questions</Typography>
        <LanguageInput />
      </div>
      <div className='flex justify-end my-5'>
        <Button variant='contained' onClick={addFAQ}>
          Add Question
        </Button>
      </div>
      {faqs.map((faq, index) => (
        <div key={index} className='mb-6 border p-3 rounded-md relative'>
          <div className='flex items-end gap-3'>
            <CustomTextField
              fullWidth
              label={`Question ${index + 1}`}
              value={faq.question}
              type={'text'}
              placeholder='Enter Question Here'
              onChange={e => handleChange(index, 'question', e.target.value)}
              className='flex-1'
            />
            <CustomIconButton
              aria-label='capture screenshot'
              color='error'
              variant='contained'
              onClick={() => removeFAQ(index)}
            >
              <i className='tabler-minus' />
            </CustomIconButton>
          </div>

          <CustomTextField
            fullWidth
            multiline
            rows={4}
            label={`Answer ${index + 1}`}
            value={faq.answer}
            type={'text'}
            placeholder='Enter Answer Here'
            onChange={e => handleChange(index, 'answer', e.target.value)}
            className='mt-4'
          />
        </div>
      ))}

      <div className='flex gap-3 justify-end'>
        <Button variant='contained'>Save Changes</Button>
      </div>
    </Card>
  )
}

export default FAQ
