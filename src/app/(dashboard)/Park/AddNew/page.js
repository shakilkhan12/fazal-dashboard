'use client';

import { useState } from 'react';
import Image from 'next/image';
import OfficeList from '../page';
import { useRouter } from 'next/navigation';
import { RxCross2 } from 'react-icons/rx';

export default function AddNewOffice() {
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
    router.push('/Park');
  };

  return (
    <>
      <div className={`relative ${isPanelVisible ? 'blur-sm' : ''}`}>
        <OfficeList />
      </div>

      {isPanelVisible && (
        <div className="fixed inset-0 z-50 flex justify-end items-start bg-transparent mt-20 ">
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
           <div className="flex justify-between items-center mb-6 pb-5 border-b-1 text-black">
  {/* Header Text */}
  <h2 className='text-black '
    style={{
      fontFamily: 'Public Sans',
      fontWeight: 500,
      fontStyle: 'normal',
      fontSize: '18px',
      lineHeight: '28px',
      letterSpacing: '0px',
    }}
  >
    Add New Park
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
            <div className="mb-4">
              <label className="block text-sm mb-1 text-black">Park ID</label>
              <input
                type="text"
                name="id"
                placeholder="Enter Office ID Here"
                value={officeData.id}
                onChange={handleChange}
                className="w-full px-3 py-2"
                style={{
                  border: '1px solid var(--Theme-input-border, #2F2B3D38)',
                  borderRadius: '4px',
                }}
              />
            </div>

            {/* English Name */}
            <div className="mb-4">
              <label className="block text-sm mb-1 text-black">English Name</label>
              <input
                type="text"
                name="englishName"
                placeholder="Enter Office English Name here"
                value={officeData.englishName}
                onChange={handleChange}
                className="w-full px-3 py-2"
                style={{
                  border: '1px solid var(--Theme-input-border, #2F2B3D38)',
                  borderRadius: '4px',
                }}
              />
            </div>

            {/* Arabic Name */}
            <div className="mb-4">
              <label className="block text-sm mb-1 text-black">Arabic Name</label>
              <input
                type="text"
                name="arabicName"
                placeholder="أدخل اسم المكتب باللغة العربية هنا"
                value={officeData.arabicName}
                onChange={handleChange}
                className="w-full px-3 py-2 text-right"
                style={{
                  border: '1px solid var(--Theme-input-border, #2F2B3D38)',
                  borderRadius: '4px',
                }}
              />
            </div>

            {/* Image Upload */}
            <div className="mb-4">
              <label className="block text-sm mb-1 text-black">Image</label>
              <div className="flex gap-2">
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleChange}
                  className="w-full px-3 py-2"
                  style={{
                    border: '1px solid var(--Theme-input-border, #2F2B3D38)',
                    borderRadius: '4px',
                  }}
                />
                <span
                  className="px-4 py-2 rounded cursor-pointer text-sm whitespace-nowrap"
                  style={{
                    background: '#29B17129',
                    color: '#29B171',
                  }}
                >
                  Choose
                </span>
              </div>
            </div>

            {/* Location */}
            <div className="mb-6">
              <label className="block text-sm mb-1 text-black">Location</label>
              <div className="relative">
                <input
                  type="text"
                  name="location"
                  placeholder="Enter Location Here"
                  value={officeData.location}
                  onChange={handleChange}
                  className="w-full px-3 py-2"
                  style={{
                    border: '1px solid var(--Theme-input-border, #2F2B3D38)',
                    borderRadius: '4px',
                  }}
                />
                <Image
                  src="/Office/park location.png"
                  alt="Location Icon"
                  width={24}
                  height={24}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <button
                onClick={handleAddOffice}
                className="flex items-center gap-2 text-white px-6 py-2 rounded shadow"
                style={{
                  background:
                    'linear-gradient(270deg, rgba(43, 182, 115, 0.7) 0%, #2BB673 100%)',
                }}
              >
                <Image
                  src="/Office/plus.png"
                  alt="Add"
                  width={20}
                  height={20}
                />
                Add Park
              </button>

              <button

                onClick={handleClosePanel}
                className="text-[#FF4C51] px-6 py-2 rounded"
                style={{
                  background:
                    'var(--Color-Palette-error-opacity-light, #FF4C5129)',
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
