'use client';

import { useState } from 'react';
import Image from 'next/image';
import CameraPage from '../Cameras/page';
import { useRouter } from 'next/navigation';
import { RxCross2 } from 'react-icons/rx';

export default function AddNewCamera() {
  const router = useRouter();
  const [isPanelVisible, setIsPanelVisible] = useState(true);
  const [officeData, setOfficeData] = useState({
    id: '',
    englishName: '',
    arabicName: '',
    image: null,
    location: '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setOfficeData({ ...officeData, [name]: files[0] });
    } else {
      setOfficeData({ ...officeData, [name]: value });
    }
  };

  const handleAddOffice = () => {
    alert('Office Added Successfully!');
    console.log(officeData);
  };

  const handleCancel = () => {
    setOfficeData({
      id: '',
      englishName: '',
      arabicName: '',
      image: null,
      location: '',
    });
  };

  const handleClosePanel = () => {
    setIsPanelVisible(false);
    router.push('/Office/Cameras');
  };

  return (
    <>
      <div className={`relative ${isPanelVisible ? 'blur-sm' : ''}`}>
        <CameraPage/>
      </div>

      {isPanelVisible && (
        <div className="fixed inset-0 z-50 flex justify-end items-start bg-transparent ">
          <div
            className="bg-white shadow-lg p-6"
            style={{
              width: '502px',
              height: '1065px',
              borderLeft: '4px solid #2BB673',
              opacity: 1,
            }}
          >
            {/* Close Button */}
           <div className="flex justify-between items-center mb-6 text-black">
  {/* Header Text */}
  <h2
    style={{
      fontFamily: 'Public Sans',
      fontWeight: 500,
      fontStyle: 'normal',
      fontSize: '18px',
      lineHeight: '28px',
      letterSpacing: '0px',
    }}
  >
    Manage Camera
  </h2>

  {/* Close Button */}
  <button
    onClick={handleClosePanel}
    className="p-1 bg-gradient-to-l from-[#2BB673B3] to-[#2BB673] rounded"
  >
    <RxCross2 size={20} className="text-white" />
  </button>
</div>

            {/* Office ID */}
          {/* Camera ID */}
<div className="mb-4">
  <label className="block text-sm font-medium mb-1 text-gray-700">Camera ID</label>
  <input
    type="text"
    name="id"
    placeholder="SFI-12397"
    value={officeData.id}
    onChange={handleChange}
    className="w-full px-4 py-2 border border-gray-300 rounded outline-none placeholder-gray-400"
  />
</div>

{/* Camera Name English */}
<div className="mb-4">
  <label className="block text-sm font-medium mb-1 text-gray-700">Camera Name English</label>
  <input
    type="text"
    name="englishName"
    placeholder="ABY-Entrance"
    value={officeData.englishName}
    onChange={handleChange}
    className="w-full px-4 py-2 border border-gray-300 rounded outline-none placeholder-gray-400"
  />
</div>

{/* Camera Name Arabic */}
<div className="mb-4">
  <label className="block text-sm font-medium mb-1 text-gray-700">Camera Name Arabic</label>
  <input
    type="text"
    name="arabicName"
    placeholder="اے بی وائی داخلی راستہ"
    value={officeData.arabicName}
    onChange={handleChange}
    className="w-full px-4 py-2 border border-gray-300 rounded text-right outline-none placeholder-gray-400"
  />
</div>

{/* IP Address */}
<div className="mb-4">
  <label className="block text-sm font-medium mb-1 text-gray-700">IP Address</label>
  <input
    type="text"
    name="ipAddress"
    placeholder="192.168.11.1"
    value={officeData.ipAddress}
    onChange={handleChange}
    className="w-full px-4 py-2 border border-gray-300 rounded outline-none placeholder-gray-400"
  />
</div>

{/* Location */}
<div className="mb-4">
  <label className="block text-sm font-medium mb-1 text-gray-700">Location</label>
  <div className="relative">
    <input
      type="text"
      name="location"
      placeholder="Main Entrance"
      value={officeData.location}
      onChange={handleChange}
      className="w-full px-4 py-2 border border-gray-300 rounded outline-none placeholder-gray-400"
    />
    <Image
      src="/Office/location.png"
      alt="Location Icon"
      width={16}
      height={16}
      className="absolute right-3 top-1/2 transform -translate-y-1/2"
    />
  </div>
</div>

{/* Status Toggle */}
<div className="mb-4 flex items-center gap-4">
  <span className="text-sm text-gray-700">Status</span>
  <label className="relative inline-flex items-center cursor-pointer">
    <input
      type="checkbox"
      className="sr-only peer"
      checked={officeData.status}
      onChange={(e) => setOfficeData({ ...officeData, status: e.target.checked })}
    />
    <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-400 rounded-full peer peer-checked:bg-green-500 after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full" />
  </label>
</div>

{/* Last Active */}
<div className="mb-6 flex items-center text-sm text-gray-600">
  <span className="w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
  Last Active • 12 July 2025 at 10:25 PM
  <Image
    src="/Office/refresh.png"
    alt="Refresh"
    width={16}
    height={16}
    className="ml-2 cursor-pointer"
  />
</div>

{/* Update Button */}
<button
  onClick={handleAddOffice}
  className="flex items-center gap-2 bg-[#2BB673] hover:bg-green-600 text-white px-6 py-2 rounded shadow"
>
  <Image src="/Office/refreshh.png" alt="Update" width={20} height={20} />
  Update
</button>

            </div>
          </div>
        
      )}
    </>
  );
}
