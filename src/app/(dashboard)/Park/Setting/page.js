import React from 'react';
import MunicipalityOfficePage from '../ParkInfo/page';
import Image from 'next/image';

export default function Page() {
  return (
    <MunicipalityOfficePage>
      <div className="bg-white rounded-md shadow p-6 w-full max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-[18px] font-sans mb-8 text-black">Settings</h1>

        {/* Form Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          {/* Stream URL */}
          <div>
            <label className="block text-sm font-medium mb-2 text-black">Stream URL</label>
            <input
              type="text"
              placeholder="Enter URL Here"
              className="w-full rounded-md px-3 py-2 text-sm outline-none focus:border-[#29B171]"
              style={{
                border: '1px solid var(--Theme-input-border, #2F2B3D38)',
              }}
            />
          </div>

          {/* Stream API Key */}
          <div>
            <label className="block text-sm font-medium mb-2 text-black">Stream API Key</label>
            <input
              type="text"
              placeholder="Enter API Key Here"
              className="w-full rounded-md px-3 py-2 text-sm outline-none focus:border-[#29B171]"
              style={{
                border: '1px solid var(--Theme-input-border, #2F2B3D38)',
              }}
            />
          </div>

          {/* Stream Path */}
          <div>
            <label className="block text-sm font-medium mb-2 text-black">Stream Path</label>
            <input
              type="text"
              placeholder="Enter Path Here"
              className="w-full rounded-md px-3 py-2 text-sm outline-none focus:border-[#29B171]"
              style={{
                border: '1px solid var(--Theme-input-border, #2F2B3D38)',
              }}
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-2 text-black">Password</label>
            <input
              type="password"
              placeholder="Enter Password Here"
              className="w-full rounded-md px-3 py-2 text-sm outline-none focus:border-[#29B171]"
              style={{
                border: '1px solid var(--Theme-input-border, #2F2B3D38)',
              }}
            />
          </div>
        </div>

        {/* Update Button */}
        <div className="flex justify-center sm:justify-end">
          <button
            className="flex items-center gap-2 text-white px-6 py-2 rounded-md"
            style={{
              background: 'linear-gradient(270deg, rgba(43, 182, 115, 0.7), #2BB673)',
            }}
          >
            <Image src="/Office/refreshh.png" alt="refresh" width={16} height={16} />
            Update
          </button>
        </div>
      </div>
    </MunicipalityOfficePage>
  );
}
