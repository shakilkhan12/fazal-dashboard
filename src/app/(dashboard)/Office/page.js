'use client';

import { useState } from 'react';
import Image from 'next/image';
import offices from './data';
import { useRouter } from 'next/navigation';

export default function OfficeList() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(3);
  const totalPages = 5;

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className=" font-['Public Sans'] w-full space-y-6 ">
      {/* Top controls */}
      <div className="flex justify-end mb-4">
        <button
          onClick={() => router.push('/Office/AddNew')}
          className="flex items-center gap-2 px-[14px] py-[7px] rounded-md focus:outline-none text-white w-[124px] h-[36px]"
          style={{
            background: 'linear-gradient(270deg, rgba(43, 182, 115, 0.7) 0%, #2BB673 100%)',
            border: '1px solid rgba(47, 43, 61, 0.22)',
          }}
        >
          <Image src="/Office/plus.png" alt="Add" width={20} height={20} />
          <span className="text-sm">Add Office</span>
        </button>
      </div>

      {/* Header */}
      <div className="bg-white rounded-t-md px-4 py-3 sm:px-6 sm:py-4 shadow-sm">
        <h1 className="text-lg font-medium text-[#2F2B3DE5]">Office Listing</h1>
      </div>

      {/* Table view for desktop */}
      <div className="hidden md:block overflow-x-auto border border-t-0 border-gray-300 ">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="text-left text-sm text-[#2F2B3D99] border-b border-gray-300 h-14">
              <th className="p-4">ID</th>
              <th className="p-4">LOCATION</th>
              <th className="p-4">NAME</th>
              <th className="p-4">CAMERAS</th>
              <th className="p-4">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {offices.map((office, index) => (
              <tr key={index} className="text-[#2F2B3D8C] border-b border-gray-300">
                <td className="p-4">{office.id}</td>
                <td className="p-4">{office.location}</td>
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="w-[95px] h-[52px] border border-gray-300 rounded-md overflow-hidden">
                      <Image src={office.image} alt="Office" width={95} height={52} className="object-cover" />
                    </div>
                    <div>
                      <span className="text-sm font-medium text-[#2F2B3D]">{office.name}</span>
                      <div
                        className={`mt-1 px-2 py-0.5 text-xs font-medium rounded text-center w-[59px] ${
                          office.status === 'Active'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-red-100 text-red-700'
                        }`}
                      >
                        {office.status}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex gap-6">
                    {[{
                        icon: '/Office/totalcamera.png',
                        label: 'Total Cameras',
                        value: office.totalCameras
                      },
                      {
                        icon: '/Office/acticecamera.png',
                        label: 'Active Cameras',
                        value: office.activeCameras
                      },
                      {
                        icon: '/Office/inactivecamera.png',
                        label: 'Inactive Cameras',
                        value: office.inactiveCameras
                      }
                    ].map((item, idx) => (
                      <div key={idx} className="flex flex-col items-center">
                        <div className="flex items-center gap-2">
                          <Image src={item.icon} alt={item.label} width={20} height={20} />
                          <span className="font-semibold">{item.value}</span>
                        </div>
                        <span className="text-xs text-gray-500">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </td>
                <td className="p-4">
                  <button
                    onClick={() => router.push('/Office/OfficeInfo')}
                    className="px-6 py-2 text-sm font-medium rounded-md border bg-white border-[#2BB673] text-[#2BB673] "
                    
                  >
                    Manage
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Card view for mobile */}
      <div className="md:hidden space-y-4 mt-4">
        {offices.map((office, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-[80px] h-[50px] border rounded overflow-hidden">
                <Image src={office.image} alt="Office" width={80} height={50} className="object-cover" />
              </div>
              <div>
                <div className="text-sm font-medium text-[#2F2B3D]">{office.name}</div>
                <div
                  className={`inline-block mt-1 px-2 py-0.5 text-xs font-medium rounded ${
                    office.status === 'Active'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-red-100 text-red-700'
                  }`}
                >
                  {office.status}
                </div>
              </div>
            </div>
            <div className="text-sm text-gray-600">📍 {office.location}</div>
            <div className="flex justify-between text-xs">
              <div className="flex items-center gap-1">
                <Image src="/Office/totalcamera.png" alt="Total" width={16} height={16} />
                {office.totalCameras} Total
              </div>
              <div className="flex items-center gap-1">
                <Image src="/Office/acticecamera.png" alt="Active" width={16} height={16} />
                {office.activeCameras} Active
              </div>
              <div className="flex items-center gap-1">
                <Image src="/Office/inactivecamera.png" alt="Inactive" width={16} height={16} />
                {office.inactiveCameras} Inactive
              </div>
            </div>
            <button
              onClick={() => router.push('/Office/OfficeInfo')}
              className="w-full mt-2 py-2 text-sm font-medium rounded-md border bg-white"
              style={{
                backgroundImage:
                  'linear-gradient(270deg, rgba(43, 182, 115, 0.7), #2BB673)',
                color: 'transparent',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                borderImage:
                  'linear-gradient(270deg, rgba(43, 182, 115, 0.7), #2BB673) 1',
              }}
            >
              Manage
            </button>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className=" bg-white rounded shadow px-4 py-3 flex flex-col sm:flex-row justify-between items-center gap-3">
        <div className="text-gray-500 text-xs sm:text-sm">
          Showing 1 to 10 of 50 entries
        </div>
        <div className="flex items-center space-x-1 sm:space-x-2">
          <button onClick={() => handlePageChange(1)} className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-gray-100 rounded border">
            <Image src="/Office/page-link.png" alt="First" width={12} height={12} />
          </button>
          <button onClick={() => handlePageChange(currentPage - 1)} className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-gray-100 rounded border">
            <Image src="/Office/single.png" alt="Prev" width={12} height={12} />
          </button>
          {[1, 2, 3].map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded border text-xs sm:text-sm font-medium ${
                page === currentPage
                  ? 'text-white shadow'
                  : 'bg-gray-100 text-black'
              }`}
              style={
                page === currentPage
                  ? {
                      background:
                        'linear-gradient(270deg, rgba(43, 182, 115, 0.7), #2BB673)',
                    }
                  : {}
              }
            >
              {page}
            </button>
          ))}
          <button onClick={() => handlePageChange(currentPage + 1)} className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-gray-100 rounded border">
            <Image src="/Office/page-link (1).png" alt="Next" width={12} height={12} />
          </button>
          <button onClick={() => handlePageChange(totalPages)} className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-gray-100 rounded border">
            <Image src="/Office/page-link (2).png" alt="Last" width={12} height={12} />
          </button>
        </div>
      </div>
    </div>
  );
}
