'use client'

import React, { useState } from 'react'
import Image from 'next/image'

import MunicipalityOfficePage from '../OfficeInfo/page'

export default function BasicInfoForm() {
  const [enabled, setEnabled] = useState(true)

  return (
    <MunicipalityOfficePage>
      <div className='bg-white max-w-4xl w-full mx-auto space-y-6 p-4 sm:p-6 rounded-md shadow'>
        {/* Header */}
        <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4'>
          <h2 className='text-lg sm:text-[18px] font-sans text-black'>
            Basic Information <span className='text-sm text-gray-500'>المعلومات الأساسية</span>
          </h2>

          {/* Toggle */}
          <label className='relative inline-flex items-center cursor-pointer'>
            <input type='checkbox' className='sr-only peer' checked={enabled} onChange={() => setEnabled(!enabled)} />
            <div className='w-9 h-5 bg-gray-300 rounded-full peer-checked:bg-[#29B171] transition-colors duration-300'></div>
            <div className='absolute top-[2px] left-[2px] w-4 h-4 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-4'></div>
          </label>
        </div>

        {/* Form Fields */}
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
          {/* Office ID */}
          <div className='flex flex-col'>
            <p
              className='font-[400] text-[13px] leading-[15px] pb-2'
              style={{
                fontFamily: 'Public Sans',
                fontStyle: 'normal',
                letterSpacing: '0px',
                color: 'var(--Theme-text-primary, #2F2B3DE5)'
              }}
            >
              Office ID
            </p>
            <input
              type='text'
              placeholder='Office ID'
              value='12312'
              className='w-full px-4 py-2 border border-[var(--Theme-input-border,_#2F2B3D38)] rounded-md text-sm bg-gray-50'
              readOnly
            />
          </div>

          {/* English Name */}
          <div className='flex flex-col'>
            <p
              className='font-[400] text-[13px] leading-[15px] pb-2'
              style={{
                fontFamily: 'Public Sans',
                fontStyle: 'normal',
                letterSpacing: '0px',
                color: 'var(--Theme-text-primary, #2F2B3DE5)'
              }}
            >
              English Name
            </p>
            <input
              type='text'
              placeholder='English Name'
              value='Municipality Office'
              className='w-full px-4 py-2 border border-[var(--Theme-input-border,_#2F2B3D38)] rounded-md text-sm bg-gray-50'
              readOnly
            />
          </div>

          {/* Arabic Name */}
          <div className='flex flex-col'>
            <p
              className='font-[400] text-[13px] leading-[15px] pb-2'
              style={{
                fontFamily: 'Public Sans',
                fontStyle: 'normal',
                letterSpacing: '0px',
                color: 'var(--Theme-text-primary, #2F2B3DE5)'
              }}
            >
              Arabic Name
            </p>
            <input
              type='text'
              placeholder='Arabic Name'
              value='مكتب البلدية'
              className='w-full px-4 py-2 border border-[var(--Theme-input-border,_#2F2B3D38)] rounded-md text-sm bg-gray-50'
              readOnly
            />
          </div>
        </div>

        {/* Location Input */}
        <div className='flex flex-col'>
          <p
            className='font-[400] text-[13px] leading-[15px] pb-3'
            style={{
              fontFamily: 'Public Sans',
              fontStyle: 'normal',
              letterSpacing: '0px',
              color: 'var(--Theme-text-primary, #2F2B3DE5)'
            }}
          >
            Location
          </p>
          <input
            type='text'
            placeholder='Location'
            value='Barton Hills, 1254'
            className='w-full px-4 py-2 border border-[var(--Theme-input-border,_#2F2B3D38)] rounded-md text-sm bg-gray-50'
            readOnly
          />
        </div>

        {/* Map Image */}
        <div className='w-full h-[260px] rounded-md overflow-hidden border border-[#E0E0E0] relative'>
          <iframe
            title='Live Google Map'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.3893781853345!2d73.05505647464546!3d33.684420673329514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfec3da38b4a59%3A0xf2c8f932eeb02ff4!2sIslamabad%2C%20Pakistan!5e0!3m2!1sen!2s!4v1691832219821!5m2!1sen!2s'
            width='100%'
            height='100%'
            style={{ border: 0 }}
            allowFullScreen=''
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>

        {/* Button */}
        <div className='flex justify-start'>
          <button
            className='flex items-center gap-2 text-white px-6 py-2 rounded-md'
            style={{
              background: 'linear-gradient(270deg, rgba(43, 182, 115, 0.7), #2BB673)'
            }}
          >
            <Image src='/Office/refreshh.png' alt='refresh' width={16} height={16} />
            Update
          </button>
        </div>
      </div>
    </MunicipalityOfficePage>
  )
}
