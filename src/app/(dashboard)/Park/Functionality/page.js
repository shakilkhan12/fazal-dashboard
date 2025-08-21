'use client';

import React from 'react';
import MunicipalityOfficePage from '../ParkInfo/page';
import Image from 'next/image';

const cameraData = Array(9).fill({
  location: 'Frontdoor camera',
  code: 'CAM-001',
});

export default function FunctionalityPage() {
  return (
    <MunicipalityOfficePage>
      <div className="bg-white w-full max-w-5xl mx-auto p-4">
        {/* Title */}
        <div className="mb-4">
          <h1 className="text-[18px] font-serif text-gray-800">Functionalities</h1>
        </div>

        {/* Table for md and above */}
        <div className="hidden md:block overflow-x-auto">
          <table className="min-w-full text-[12px] font-sans text-gray-800">
            <thead>
              <tr className="border-b border-[#E0E0E0]">
                <th className="px-4 py-3 text-left text-[13px] font-sans w-[280px]">CAMERA</th>
                <th className="px-4 py-3 text-left text-[13px] font-sans">AI MODELS</th>
              </tr>
            </thead>

            <tbody>
              {cameraData.map((cam, idx) => (
                <tr key={idx} className="border-b border-[#E0E0E0] last:border-b-0">
                  <td>
                    <div
                      className="flex gap-2 items-center"
                      style={{ paddingTop: '15px', paddingBottom: '15px', paddingLeft: '20px', paddingRight: '16px' }}
                    >
                      <div className="w-7 h-7">
                        <Image src="/Office/device-cctv.png" alt="camera" width={19} height={19} />
                      </div>
                      <div className="flex flex-col leading-[22px] font-[400] text-[13px] font-['Public Sans']">
                        <span>{cam.location}</span>
                        <span>({cam.code})</span>
                      </div>
                    </div>
                  </td>

                  <td className="px-4 py-3">
                    <div className="flex items-center gap-6">
                      <ToggleSwitch label="Attendance" />
                      <ToggleSwitch label="Semantic Analysis" />
                      <ToggleSwitch label="Footfall Analysis" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Card view for small screens */}
        <div className="block md:hidden space-y-4">
          {cameraData.map((cam, idx) => (
            <div
              key={idx}
              className="border border-gray-200 rounded p-4 flex flex-col space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-7 h-7">
                  <Image src="/Office/device-cctv.png" alt="camera" width={19} height={19} />
                </div>
                <div className="font-[400] text-sm font-['Public Sans']">
                  <div>{cam.location}</div>
                  <div className="text-gray-600">({cam.code})</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <ToggleSwitch label="Attendance" />
                <ToggleSwitch label="Semantic Analysis" />
                <ToggleSwitch label="Footfall Analysis" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </MunicipalityOfficePage>
  );
}

const ToggleSwitch = ({ label }) => {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" className="sr-only peer" defaultChecked />
      <div className="w-10 h-5 bg-gray-300 rounded-full peer-checked:bg-[#29B171] transition-colors duration-300"></div>
      <span className="absolute left-[2px] top-[2px] w-4 h-4 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-5"></span>
      <span className="ml-3 text-sm font-sans select-none">{label}</span>
    </label>
  );
};
