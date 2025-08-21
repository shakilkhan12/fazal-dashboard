'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';

export default function MunicipalityOfficePage({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState(null);

  const tabs = [
    { label: 'Basic Info', id: 'basic', route: '/Office/BasicInfo', greenIcon: '/Office/seeding.png', whiteIcon: '/Office/seedingg.png' },
    { label: 'Cameras', id: 'cameras', route: '/Office/Cameras', greenIcon: '/Office/device-cctv.png', whiteIcon: '/Office/device-cctvv.png' },
    { label: 'Functionality', id: 'functionality', route: '/Office/Functionality', greenIcon: '/Office/affiliate.png', whiteIcon: '/Office/affiliatee.png' },
    { label: 'Settings', id: 'settings', route: '/Office/Setting', greenIcon: '/Office/refresh.png', whiteIcon: '/Office/refreshh.png' },
  ];

  useEffect(() => {
    if (pathname === '/Office') {
      setActiveTab('basic');
    } else {
      const currentTab = tabs.find(tab => pathname.startsWith(tab.route));
      if (currentTab) setActiveTab(currentTab.id);
    }
  }, [pathname]);

  const handleTabClick = (tabId, route) => {
    setActiveTab(tabId);
    router.push(route);
  };

  const handleClosePanel = () => {
    router.push('/Office');
  };

  return (
    
    <div className="min-h-screen  space-y-6 bg-gray-50 font-['Public Sans'] w-full space-y-6 mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-xl sm:text-2xl font-sans text-black">
          Municipality Office - مكتب البلدية
        </h1>
        <button
          onClick={handleClosePanel}
          className="flex items-center gap-2 text-white px-4 py-2 rounded-md w-full sm:w-auto justify-center"
          style={{ background: 'linear-gradient(270deg, rgba(43, 182, 115, 0.7), #2BB673)' }}
        >
          <span className="text-xl">&lt;</span> Back
        </button>
      </div>

      {/* Main Layout */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Card */}
        <div className="flex flex-col items-center justify-center w-full md:w-[360px] h-auto md:h-[380px] text-black space-y-4 bg-white rounded shadow p-6">
          <Image
            src="/Office/Deta.png"
            alt="Office"
            width={154}
            height={154}
            className="rounded-md border-[#29B171] p-2"
          />
          <div className="flex items-center gap-2">
            <Image src="/Office/building-skyscraper.png" alt="Building Icon" width={20} height={20} />
            <p className="text-lg font-semibold text-black">Municipality Office</p>
          </div>
          <p
            className="px-4 py-1 rounded text-sm font-medium"
            style={{ background: '#28C76F3D', color: '#28C76F' }}
          >
            Active
          </p>
        </div>

        {/* Tabs + Content */}
        <div className="flex-1 flex flex-col space-y-4">
          {/* Tabs */}
          <div className="flex flex-wrap gap-3 md:gap-4 overflow-x-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-green-400">
            {tabs.map(tab => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id, tab.route)}
                  className={`flex items-center gap-2 px-4 py-2 transition-all rounded-md flex-shrink-0 ${
                    isActive ? 'text-white' : 'text-gray-800 hover:text-green-700'
                  }`}
                  style={{ width: 133, height: 38, background: isActive ? '#29B171' : '[#ffffff]' }}
                >
                  <Image src={isActive ? tab.whiteIcon : tab.greenIcon} alt={tab.label} width={20} height={20} />
                  <span className="text-sm whitespace-nowrap">{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Content */}
          <div className="bg-white min-h-[200px] p-4 ">
            {children || <p className="text-gray-400 italic">Select a tab to view more details</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
