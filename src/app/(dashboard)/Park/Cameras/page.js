'use client';

import React, { useState } from 'react';
import MunicipalityOfficePage from '../ParkInfo/page';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const CameraPage = () => {
  const [currentPage, setCurrentPage] = useState(3);
  const totalPages = 5;
  const router = useRouter();

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const cameraData = [
    { name: 'Frontdoor Camera', id: 'CAM-001', ip: '192.168.1.1', status: 'active', date: '26 July 2025' },
    { name: 'Lobby Camera', id: 'CAM-002', ip: '192.168.1.2', status: 'inactive', date: '25 July 2025' },
    { name: 'Garage Camera', id: 'CAM-003', ip: '192.168.1.3', status: 'inactive', date: '25 July 2025' },
    { name: 'Entrance Camera', id: 'CAM-004', ip: '192.168.1.4', status: 'active', date: '26 July 2025' },
    { name: 'Backyard Camera', id: 'CAM-005', ip: '192.168.1.5', status: 'inactive', date: '25 July 2025' },
    { name: 'Hallway Camera', id: 'CAM-006', ip: '192.168.1.6', status: 'active', date: '26 July 2025' },
  ];

  return (
    <MunicipalityOfficePage>
      <div className="max-w-6xl mx-auto py-6 px-4 space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h1 className="text-[18px] font-serif text-gray-800">Cameras</h1>
          <button
            className="flex items-center gap-2 px-3 py-2 rounded-md text-white text-sm"
            style={{
              background: 'linear-gradient(270deg, rgba(43, 182, 115, 0.7) 0%, #2BB673 100%)',
              border: '1px solid rgba(47, 43, 61, 0.22)',
            }}
            onClick={() => router.push('/Office/AddCamera')}
          >
            <Image src="/Office/plus.png" alt="Add" width={20} height={20} />
            Add Camera
          </button>
        </div>

        {/* Table Header */}
        <div className="hidden sm:grid grid-cols-5 text-[13px] font-sans text-gray-700 bg-white py-3 px-4 border-b border-gray-200">
          <div>ID</div>
          <div>NAME</div>
          <div>STATUS</div>
          <div>DATE ADDED</div>
          <div>ACTION</div>
        </div>

        {/* Data Rows */}
        <div className="space-y-4">
          {cameraData.map((cam, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-md p-4 sm:p-0 sm:grid sm:grid-cols-5 sm:items-center text-gray-700"
            >
              {/* ID */}
              <div className="sm:block mb-2 sm:mb-0">
                <span className="sm:hidden font-semibold block mb-1">ID:</span>
                <span className="text-sm text-gray-500">{cam.id}</span>
              </div>

              {/* NAME */}
              <div className="flex flex-col items-start gap-1 mb-2 sm:mb-0">
                <span className="sm:hidden font-semibold block">Name:</span>
                <div className="flex items-center gap-2">
                  <Image src="/Office/device-cctv.png" alt="Camera" width={18} height={18} />
                  <span>{cam.name}</span>
                </div>
                <span className="text-xs text-gray-500">IP {cam.ip}</span>
              </div>

              {/* STATUS */}
              <div className="flex items-start gap-2 mb-2 sm:mb-0">
                <span
                  className={`w-2.5 h-2.5 rounded-full mt-1 ${
                    cam.status === 'active' ? 'bg-[#29B171]' : 'bg-[#FF3B30]'
                  }`}
                />
                <div className="flex flex-col">
                  <span
                    className={`font-medium ${
                      cam.status === 'inactive' ? 'text-[#FF3B30]' : 'text-[#29B171]'
                    }`}
                  >
                    {cam.status === 'active' ? 'Active Since' : 'Inactive Since'}
                  </span>
                  <span
                    className={`text-sm ${
                      cam.status === 'inactive' ? 'text-[#FF3B30]' : 'text-[#29B171]'
                    }`}
                  >
                    {cam.date}
                  </span>
                </div>
              </div>

              {/* DATE ADDED */}
              <div className="flex flex-col items-start mb-2 sm:mb-0">
                <span className="sm:hidden font-semibold block mb-1">Date Added:</span>
                <span>12 July 2025</span>
                <div className="text-xs text-gray-400">10:25PM</div>
              </div>

              {/* ACTION */}
              <div className="flex gap-2 items-center justify-start sm:justify-center">
                <button className="text-[#29B171] border border-[#29B171] text-xs px-3 py-1 rounded-md hover:bg-[#29B171]/10 transition w-full sm:w-auto h-9.5">
                  Manage
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 h-16 px-2 sm:px-5">
          <div className="text-gray-500 text-sm text-center sm:text-left w-full sm:w-auto">
            Showing 1 to 10 of 50 entries
          </div>

          {/* Pagination Controls */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 justify-center w-full sm:w-auto">
            <button
              onClick={() => handlePageChange(1)}
              className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded border border-gray-300"
            >
              <Image src="/Office/page-link.png" alt="First" width={12} height={12} />
            </button>
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded border border-gray-300"
            >
              <Image src="/Office/single.png" alt="Previous" width={12} height={12} />
            </button>

            {[1, 2, 3].map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`w-10 h-10 flex items-center justify-center rounded border text-sm font-medium ${
                  page === currentPage
                    ? 'text-white shadow'
                    : 'bg-gray-100 text-black border-gray-300'
                }`}
                style={
                  page === currentPage
                    ? {
                        background:
                          'linear-gradient(270deg, rgba(43, 182, 115, 0.7) 0%, #2BB673 100%)',
                      }
                    : {}
                }
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded border border-gray-300"
            >
              <Image src="/Office/page-link (1).png" alt="Next" width={12} height={12} />
            </button>
            <button
              onClick={() => handlePageChange(totalPages)}
              className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded border border-gray-300"
            >
              <Image src="/Office/page-link (2).png" alt="Last" width={12} height={12} />
            </button>
          </div>
        </div>
      </div>
    </MunicipalityOfficePage>
  );
};

export default CameraPage;
