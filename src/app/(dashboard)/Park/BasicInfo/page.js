'use client';

import React from 'react';
import MunicipalityOfficePage from '../ParkInfo/page';
import { FaMapMarkerAlt } from 'react-icons/fa';
import Image from 'next/image';
export default function basicinfoPage() {
  return (
    <MunicipalityOfficePage>
      <div className="bg-white w-full max-w-4xl font-sans p-4 md:p-6">
        {/* Title & Toggle */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <h1 className="text-[18px] font-sans text-black">Basic Information</h1>
          <label className="flex items-center gap-2 text-[13px] font-sans">
            Status
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:bg-[#29B171] transition-all"></div>
              <div className="absolute left-0.5 top-0.5 bg-white w-5 h-5 rounded-full transition-all peer-checked:translate-x-full"></div>
            </label>
          </label>
        </div>

        {/* Form Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
          {/* Park ID */}
          <div>
            <label className="block text-[13px] font-sans mb-2 text-black">Park ID</label>
            <input
              type="text"
              placeholder="Enter Park ID"
              defaultValue="12312"
              className="w-full rounded-md px-3 py-2 text-sm outline-none focus:border-[#29B171]"
              style={{
                border: '1px solid var(--Theme-input-border, #2F2B3D38)',
              }}
            />
          </div>

          {/* English Name */}
          <div>
            <label className="block text-[13px] font-sans mb-2 text-black">English Name</label>
            <input
              type="text"
              placeholder="Enter English Name"
              defaultValue="Khorfakkan central Park"
              className="w-full rounded-md px-3 py-2 text-sm outline-none focus:border-[#29B171]"
              style={{
                border: '1px solid var(--Theme-input-border, #2F2B3D38)',
              }}
            />
          </div>

          {/* Arabic Name */}
          <div>
            <label className="block text-[13px] font-sans mb-2 text-black">Arabic Name</label>
            <input
              type="text"
              placeholder="ادخل الاسم العربي"
              defaultValue="حديقة خورفكان المركزية"
              dir="rtl"
              className="w-full rounded-md px-3 py-2 text-sm outline-none focus:border-[#29B171]"
              style={{
                border: '1px solid var(--Theme-input-border, #2F2B3D38)',
              }}
            />
          </div>
        </div>

        {/* Location */}
        <div className="relative mb-8">
          <label className="block text-[13px] font-sans mb-2 text-black">Location</label>
          <input
            type="text"
            placeholder="Enter Location Here"
            className="w-full rounded-md px-3 py-2 text-sm pr-10 outline-none focus:border-[#29B171]"
            style={{
              border: '1px solid var(--Theme-input-border, #2F2B3D38)',
            }}
          />
          <FaMapMarkerAlt className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
        </div>

        {/* Update Button */}
     <div className="flex justify-end">
  <button
    className="flex items-center gap-2 text-white px-6 py-2 rounded-md"
    style={{
      background: 'linear-gradient(270deg, rgba(43, 182, 115, 0.7), #2BB673)',
    }}
  >
     <Image
                  src="/Office/refreshh.png"
                  alt="refresh"
                  width={16}
                  height={16}
                />
    Update
  </button>
</div>


      </div>
    </MunicipalityOfficePage>
  );
}
