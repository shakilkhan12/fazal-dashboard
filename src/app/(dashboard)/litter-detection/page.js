'use client';

import Image from 'next/image';
import { FaChevronDown } from "react-icons/fa";
import { useState } from 'react';

const Page = () => {
  const [currentPage, setCurrentPage] = useState(3);

  const data = [
    { id: '12345', code: '01-456', location: 'Main Entrance', cameraName: 'Frontdoor camera', cameraCode: '(CAM-001)', date: '12 July 2025 09:25PM', snapshot: true, posted: true },
    { id: '12345', code: '01-456', location: 'Playground', cameraName: 'Playground cam', cameraCode: '(CAM-002)', date: '12 July 2025 09:25PM', snapshot: true, posted: true },
    { id: '12345', code: '01-456', location: 'Playground', cameraName: 'Playground cam', cameraCode: '(CAM-002)', date: '12 July 2025 09:25PM', snapshot: true, posted: true },
  ];

  const stats = [
    { value: 300, label: 'Total Alerts', icon: '/Office/onee.png'},
    { value: 30, label: 'Open Cases', icon: '/Office/twoo.png'},
    { value: 70, label: 'Inprogress Cases', icon: '/Office/fourr.png'},
    { value: 50, label: 'Closed Cases', icon: '/Office/lthree.png'},
    { value: 150, label: 'Opened Again', icon: '/Office/lfour.png' },
  ];

  return (
    <div className="w-full space-y-6">
      
      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <h1 className="text-lg sm:text-xl font-semibold text-black">Park 1 - ۱ بارک</h1>
        
       <div className="flex items-center justify-between gap-2.5 py-2 px-3.5 border border-[#2F2B3D66] rounded-md opacity-40% cursor-pointer w-full sm:w-72">
                 <span className="text-[#2F2B3D66]  text-sm sm:text-base">Select Park/Offices</span>
                 <FaChevronDown className="text-[#2F2B3D] text-sm" />
               </div>
             </div>
      {/* Stats Section */}
      <div className="w-full bg-white rounded-lg p-4 shadow-md">
        <p className="text-lg font-semibold mb-4"></p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 sm:p-4 bg-white rounded-lg shadow-md"
            >
              <div>
                <p className="text-base sm:text-xl font-bold text-black">{stat.value}</p>
                <p className="text-gray-500 text-xs sm:text-sm">{stat.label}</p>
              </div>
              <div className={`w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-md ${stat.color}`}>
                <Image src={stat.icon} alt={stat.label} width={36} height={36} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-lg shadow-md p-3 sm:p-4">
        
        {/* Filters */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-3 mb-4">
          <h2 className="text-lg font-semibold">Litter Detection</h2>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            <select className="border rounded px-3 py-1 text-sm bg-[#F8F8F8] w-full sm:w-auto">
              <option>Main Entrance</option>
            </select>
            <input
              type="text"
              value="12 July 2025 - 15 July 2025"
              className="border rounded px-3 py-1 text-sm bg-[#F8F8F8] w-full sm:w-auto"
              readOnly
            />
            <select className="border rounded px-3 py-1 text-sm bg-[#F8F8F8] w-full sm:w-auto">
              <option>Select Camera</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-xs sm:text-sm min-w-[700px]">
            <thead className="bg-[#F9FAFB]">
              <tr className="border-b border-gray-200 bg-white">
                <th className="p-3 text-left font-semibold">CASE ID</th>
                
                <th className="p-3 text-left font-semibold">Occurrence</th>
                <th className="p-3 text-left font-semibold">Location</th>
                <th className="p-3 text-left font-semibold">Snapshot</th>
                <th className="p-3 text-left font-semibold">Posted</th>
                <th className="p-3 text-left font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, idx) => {
                const [eventDate, eventTime] = row.date.split(' ', 4).length === 4
                  ? [row.date.split(' ').slice(0, 3).join(' '), row.date.split(' ').slice(3).join(' ')]
                  : [row.date, ''];

                return (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="p-3 text-[#2F2B3DE5] font-semibold">
                      {row.id}
                      <br />
                     
                    </td>
<td className="p-3">
                      {row.posted && (
                        <div className="flex items-center gap-1">
                          <div className="flex flex-col">
                            <span className="text-gray-700">{eventDate}</span>
                            <span className="text-gray-500">{eventTime}</span>
                          </div>
                        </div>
                      )}
                    </td>
                    <td className="p-3 flex items-center gap-2">
                      <Image src="/Office/device-cctv.png" alt="camera" width={18} height={18} />
                      <div className="flex ">
                        <span>{row.cameraName}</span>
                        <span className="text-gray-500">{row.cameraCode}</span>
                      </div>
                    </td>
                    <td className="p-3">
                      {row.snapshot && (
                        <button className="border rounded px-2 sm:px-3 py-1 text-xs flex items-center gap-1 bg-[#2F2B3D14] hover:bg-gray-100 transition">
                          <Image src="/Office/viewphoto.png" alt="view" width={14} height={14} /> 
                          View Photo
                        </button>
                      )}
                    </td>
                    <td className="py-3 px-2 whitespace-nowrap">
                    <span className="px-3 py-1 text-xs rounded border border-[#00BAD1] text-[#00BAD1]">
                      Close
                    </span>
                  </td>
                 
                  
                    <td className="p-3">
                      <Image src="/Office/eye.png" alt="view" width={18} height={18} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4 text-xs sm:text-sm text-gray-500 gap-2">
          <span>Showing 1 to 10 of 50 entries</span>
          <div className="flex items-center gap-1">
            <button className="px-2 py-1 border rounded">&lt;&lt;</button>
            <button className="px-2 py-1 border rounded">&lt;</button>
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                className={`px-3 py-1 border rounded ${currentPage === page ? 'bg-[#2BB673] text-white' : ''}`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            ))}
            <button className="px-2 py-1 border rounded">&gt;</button>
            <button className="px-2 py-1 border rounded">&gt;&gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
