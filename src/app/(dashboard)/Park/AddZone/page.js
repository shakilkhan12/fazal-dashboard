'use client';

import { useState } from 'react';
import Image from 'next/image';
import ZonePage from '../Zone/page';
import { useRouter } from 'next/navigation';
import { RxCross2 } from 'react-icons/rx';

export default function AddNewZone() {
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
    router.push('/Park/Zone');
  };

  return (
    <>
      <div className={`relative ${isPanelVisible ? 'blur-sm' : ''}`}>
        <ZonePage/>
      </div>

      {isPanelVisible && (
        <div className="fixed inset-0 z-50 flex justify-end items-start bg-transparent mt-20">
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
           <div className="flex justify-between items-center mb-6 border-b-1 pb-5 text-black">
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
    Add New Zone
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
  <label className="block text-sm font-medium mb-1 text-gray-700">Zone ID</label>
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
  <label className="block text-sm font-medium mb-1 text-gray-700">English Name</label>
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
  <label className="block text-sm font-medium mb-1 text-gray-700">Arabic Name</label>
  <input
    type="text"
    name="arabicName"
    placeholder="اے بی وائی داخلی راستہ"
    value={officeData.arabicName}
    onChange={handleChange}
    className="w-full px-4 py-2 border border-gray-300 rounded text-right outline-none placeholder-gray-400"
  />
</div>
{/* Longitude & Latitude in one line */}
<div className="mb-4 flex gap-4">
  <div className="flex-1">
    <label className="block text-sm font-medium mb-1 text-gray-700">Longitude</label>
    <input
      type="text"
      name="longitude"
      placeholder="Enter Longitude"
      value={officeData.longitude || ''}
      onChange={handleChange}
      className="w-full px-4 py-2 border border-gray-300 rounded outline-none placeholder-gray-400"
    />
  </div>
  <div className="flex-1">
    <label className="block text-sm font-medium mb-1 text-gray-700">Latitude</label>
    <input
      type="text"
      name="latitude"
      placeholder="Enter Latitude"
      value={officeData.latitude || ''}
      onChange={handleChange}
      className="w-full px-4 py-2 border border-gray-300 rounded outline-none placeholder-gray-400"
    />
  </div>
</div>

{/* IP Address */}
<div className="mb-4">
  <label className="block text-sm font-medium mb-1 text-gray-700">Address IP</label>
  <input
    type="text"
    name="ipAddress"
    placeholder="192.168.11.1"
    value={officeData.ipAddress}
    onChange={handleChange}
    className="w-full px-4 py-2 border border-gray-300 rounded outline-none placeholder-gray-400"
  />
</div>

<div className="mb-4">
  <label className="block text-sm font-medium mb-1 text-gray-700">Web IP</label>
  <input
    type="text"
    name="ipAddress"
    placeholder="ENTER Web Api Here"
    value={officeData.ipAddress}
    onChange={handleChange}
    className="w-full px-4 py-2 border border-gray-300 rounded outline-none placeholder-gray-400"
  />
</div>

{/* Update Button */}
{/* Button Group */}
<div className="flex items-center gap-2">
  {/* Connect Button */}
  <button
    onClick={handleAddOffice}
    className="flex items-center gap-2 bg-[#2BB673] hover:bg-green-600 text-white px-6 py-2 rounded shadow"
  >
    <Image src="/Office/linkkk.png" alt="Update" width={20} height={20} />
    Connect
  </button>

  {/* Cancel Button */}
  <button
    onClick={() => console.log('Cancel clicked')}
    className="flex items-center gap-2 px-5 py-2 rounded"
    style={{
      width: '89px',
      height: '38px',
      background: '#FF4C5129',
      color: '#FF4C51',
    }}
  >
    Cancel
  </button>
</div>

            </div>
          </div>
        
      )}
    </>
  );
}
