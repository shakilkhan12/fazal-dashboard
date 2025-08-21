'use client';

import React, { useState } from 'react';
import MunicipalityOfficePage from '../ParkInfo/page';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const ZonePage = () => {
  const [currentPage, setCurrentPage] = useState(3);
  const totalPages = 5;
  const router = useRouter();

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const zoneData = [
    { id: 'ZONE-001', name: 'Zone 1', ip: '192.168.1.1', status: 'active', date: '26 July 2025', addedDate: '12 July 2025', addedTime: '10:25PM' },
    { id: 'ZONE-002', name: 'Zone 2', ip: '192.168.1.2', status: 'inactive', date: '25 July 2025', addedDate: '11 July 2025', addedTime: '3:15PM' },
    { id: 'ZONE-003', name: 'Zone 3', ip: '192.168.1.3', status: 'inactive', date: '25 July 2025', addedDate: '10 July 2025', addedTime: '8:00AM' },
    { id: 'ZONE-004', name: 'Zone 4', ip: '192.168.1.4', status: 'active', date: '26 July 2025', addedDate: '12 July 2025', addedTime: '2:45PM' },
  ];

  return (
    <MunicipalityOfficePage>
      <div className="max-w-6xl mx-auto py-6 px-4 sm:px-6 space-y-6 w-full">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h1 className="text-[18px] font-serif text-gray-800">Zones</h1>
          <button
            onClick={() => router.push('/Park/AddZone')}
            className="flex items-center gap-2 px-4 py-2 rounded-md text-white text-sm"
            style={{
              background: 'linear-gradient(270deg, rgba(43, 182, 115, 0.7) 0%, #2BB673 100%)',
              border: '1px solid rgba(47, 43, 61, 0.22)',
            }}
          >
            <Image src="/Office/plus.png" alt="Add" width={20} height={20} />
            Add Zone
          </button>
        </div>

        {/* Table */}
        <div className="w-full bg-white rounded-md shadow">
          {/* Table header */}
          <div className="hidden md:grid grid-cols-5 text-[13px] font-semibold text-gray-700 bg-gray-100 py-3 px-4">
            <div>ID</div>
            <div>NAME</div>
            <div>STATUS</div>
            <div>DATE ADDED</div>
            <div>ACTION</div>
          </div>

          {/* Data rows */}
          <div className="flex flex-col divide-y divide-gray-200 md:divide-none">
            {zoneData.map((zone, idx) => (
              <div key={idx} className="flex flex-col md:grid md:grid-cols-5 md:items-center px-4 py-4 md:py-3 gap-3 md:gap-0">
                
                {/* ID */}
                <div className="text-[13px] font-sans">{zone.id}</div>

                {/* NAME */}
                <div className="flex flex-col">
                  <span className="text-[13px] font-sans">{zone.name}</span>
                  <span className="text-xs text-gray-500">{zone.ip}</span>
                </div>

                {/* STATUS */}
                <div className="flex items-start gap-2">
                  <span
                    className={`w-2.5 h-2.5 rounded-full mt-1 ${
                      zone.status === 'active' ? 'bg-[#29B171]' : 'bg-[#FF3B30]'
                    }`}
                  />
                  <div className="flex flex-col">
                    <span className="text-[13px] text-[#444050B2]">
                      {zone.status === 'active' ? 'Active Since' : 'Inactive Since'}
                    </span>
                    <span className="text-[13px] text-[#444050B2]">{zone.date}</span>
                  </div>
                </div>

                {/* DATE ADDED (Desktop) */}
                <div className="hidden md:flex md:flex-col">
                  <span className="text-[13px]">{zone.addedDate}</span>
                  <span className="text-[13px] text-gray-400">{zone.addedTime}</span>
                </div>

                {/* ACTION */}
                <div className="flex md:justify-center">
                  <button className="text-[#29B171] border border-[#29B171] text-xs px-3 py-1 rounded-md hover:bg-[#29B171]/10 transition w-full md:w-24">
                    Manage
                  </button>
                </div>

                {/* DATE ADDED (Mobile) */}
                <div className="flex flex-col mt-2 text-[13px] text-gray-500 md:hidden">
                  <span>{zone.addedDate}</span>
                  <span>{zone.addedTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row justify-between items-center h-16 w-full gap-4 sm:gap-0">
          <div className="text-gray-500 text-sm">Showing 1 to 10 of 50 entries</div>
          <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
            <button onClick={() => handlePageChange(1)} className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded border border-gray-300">
              <Image src="/Office/page-link.png" alt="First" width={12} height={12} />
            </button>
            <button onClick={() => handlePageChange(currentPage - 1)} className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded border border-gray-300">
              <Image src="/Office/single.png" alt="Previous" width={12} height={12} />
            </button>
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`w-10 h-10 flex items-center justify-center rounded border text-sm font-medium ${
                  page === currentPage ? 'text-white shadow' : 'bg-gray-100 text-black border-gray-300'
                }`}
                style={
                  page === currentPage
                    ? { background: 'linear-gradient(270deg, rgba(43, 182, 115, 0.7) 0%, #2BB673 100%)' }
                    : {}
                }
              >
                {page}
              </button>
            ))}
            <button onClick={() => handlePageChange(currentPage + 1)} className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded border border-gray-300">
              <Image src="/Office/page-link (1).png" alt="Next" width={12} height={12} />
            </button>
            <button onClick={() => handlePageChange(totalPages)} className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded border border-gray-300">
              <Image src="/Office/page-link (2).png" alt="Last" width={12} height={12} />
            </button>
          </div>
        </div>
      </div>
    </MunicipalityOfficePage>
  );
};

export default ZonePage;
