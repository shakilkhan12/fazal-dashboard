'use client';

import { useRef } from 'react';
import Image from 'next/image';
import AccountLayout from '../page';
import './font.css';

const sections = ['Administration', 'Offices', 'Parks', 'My Account'];

export default function Home() {
  const fileRefs = useRef({});

  const handleFileUpload = (section) => {
    const file = fileRefs.current[section]?.files[0];
    if (file) {
      alert(`Uploading file for ${section}: ${file.name}`);
    }
  };

  const handleTemplateDownload = (section) => {
    alert(`Downloading template for ${section}`);
  };

  return (
    <AccountLayout>
      <div className="h-auto w-full bg-white">
        <div className="max-w-7xl mx-auto py-1">
          <div className="flex justify-between items-center mb-6">
            <h2 className="language-heading text-2xl text-black">Language Settings</h2>
            <select
              className="w-[200px] h-[38px] px-[14px] py-[7px] rounded-md focus:outline-none text-[#2F2B3D]"
              style={{ border: '1px solid rgba(47, 43, 61, 0.22)' }}
            >
              <option>English</option>
            </select>
          </div>

          {sections.map((section) => (
            <div key={section} className="w-full max-w-[808px] p-4 mb-4">
              {/* Section Title */}
              <p className="font-medium text-[18px] mb-3 text-gray-700">{section}</p>

              {/* Buttons and Input */}
              <div className="flex flex-wrap md:flex-nowrap items-center gap-6">
                {/* Download Template Button */}
                <button
                  onClick={() => handleTemplateDownload(section)}
                  className="flex items-center gap-2 border border-[#2BB673] text-[#2BB673] px-4 py-2 rounded"
                >
                  <Image
                    src="/Profile/download.svg"
                    alt="Download"
                    width={20}
                    height={20}
                  />
                  <span className="text-sm">Download Template</span>
                </button>

                {/* File Input */}
                <input
                  type="file"
                  ref={(el) => (fileRefs.current[section] = el)}
                  className="text-sm border border-gray-300 rounded px-4 py-2 text-gray-500 w-[280px]"
                />

                {/* Upload Button */}
                <button
                  onClick={() => handleFileUpload(section)}
                  className="flex items-center gap-2 bg-[#D1FADF] text-[#2BB673] px-4 py-2 rounded"
                >
                  <Image
                    src="/Profile/upload.svg"
                    alt="Upload"
                    width={20}
                    height={20}
                  />
                  <span className="text-sm">Upload</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AccountLayout>
  );
}
