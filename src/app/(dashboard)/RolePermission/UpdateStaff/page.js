'use client';

import { useState } from 'react';
import Image from 'next/image';
import RolesPage from '../page';
import { useRouter } from 'next/navigation';
import { RxCross2 } from 'react-icons/rx';

export default function UpdateStaff() {
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
    router.push('/RolePermission');
  };

  const formFieldClass =
    'w-full rounded px-2 py-1 bg-[#F9F9F9] border border-[#2F2B3D1A] outline-none placeholder-gray-400 h-9.5';

  return (
    <>
      {/* Background content (blur when panel open) */}
      <div className={`${isPanelVisible ? 'blur-sm' : ''}`}>
        <RolesPage />
      </div>

      {/* Side Panel */}
      {isPanelVisible && (
        <div className="fixed inset-0 z-50 flex justify-end items-start bg-black/40">
          <div
            className="bg-white shadow-lg w-full sm:w-[502px] flex flex-col mt-20"
            style={{
              borderLeft: '4px solid #2BB673',
              height: 'calc(100vh - 40px)', // Full height minus outer padding
            }}
          >
            {/* Sticky Header */}
            <div className="flex justify-between items-center border-b p-4 text-black sticky top-0 bg-white z-10">
              <h2 className="font-medium text-lg">Update New Staff</h2>
              <button
                onClick={handleClosePanel}
                className="p-1 bg-gradient-to-l from-[#2BB673B3] to-[#2BB673] rounded"
              >
                <RxCross2 size={20} className="text-white" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="overflow-y-auto flex-1">
              {/* Profile Image + Role Selector */}
              <div className="p-4">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-24 h-24 relative rounded-full border-4 border-green-500 overflow-hidden">
                    <Image
                      src="/Office/Avatar.png"
                      alt="Profile"
                      fill
                      sizes="96px"
                      priority
                      quality={100}
                      className="object-cover"
                    />
                  </div>

                  <div className="flex items-center gap-2 w-full">
                    <select
                      className={`${formFieldClass} bg-white text-black flex-1`}
                      defaultValue="Admin"
                    >
                      <option value="Admin">Admin</option>
                      <option value="User">User</option>
                    </select>
                    <button
                      className="text-white px-4 py-2 rounded text-sm whitespace-nowrap"
                      style={{
                        background:
                          'linear-gradient(270deg, rgba(43, 182, 115, 0.7) 0%, #2BB673 100%)',
                      }}
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>

              {/* Form Fields */}
              <div className="p-4 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-black">
                  {/* Employee ID */}
                  <div>
                    <label className="block text-xs font-medium">Employee ID</label>
                    <input type="text" defaultValue="EMP 1234" className={formFieldClass} />
                  </div>

                  {/* Gender */}
                  <div>
                    <label className="block text-xs font-medium">Gender</label>
                    <select className={formFieldClass} defaultValue="Male">
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </div>

                  {/* English Name */}
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-medium">English Name</label>
                    <input type="text" defaultValue="Ahmad Ayaz" className={formFieldClass} />
                  </div>

                  {/* Arabic Name */}
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-medium">Arabic Name</label>
                    <input
                      type="text"
                      defaultValue="أحمد أياز"
                      dir="rtl"
                      className={`${formFieldClass} text-right`}
                    />
                  </div>

                  {/* Email */}
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-medium">Email</label>
                    <input
                      type="email"
                      defaultValue="sampleemail@sampleemail.com"
                      className={formFieldClass}
                    />
                  </div>

                  {/* Department */}
                  <div>
                    <label className="block text-xs font-medium">Department English</label>
                    <select className={formFieldClass} defaultValue="Irrigation">
                      <option>Irrigation</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium" dir="rtl">
                      Department Arabic
                    </label>
                    <select
                      className={`${formFieldClass} text-right`}
                      dir="rtl"
                      defaultValue="الري"
                    >
                      <option>الري</option>
                    </select>
                  </div>

                  {/* Designation */}
                  <div>
                    <label className="block text-xs font-medium">Designation English</label>
                    <select className={formFieldClass} defaultValue="Admin">
                      <option>Admin</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium">Designation Arabic</label>
                    <select
                      className={`${formFieldClass} text-right`}
                      dir="rtl"
                      defaultValue="مسؤول"
                    >
                      <option>مسؤول</option>
                    </select>
                  </div>

                  {/* Unit */}
                  <div>
                    <label className="block text-xs font-medium">Unit English</label>
                    <select className={formFieldClass} defaultValue="Unit 1">
                      <option>Unit 1</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium">Unit Arabic</label>
                    <select
                      className={`${formFieldClass} text-right`}
                      dir="rtl"
                      defaultValue="الوحدة 1"
                    >
                      <option>الوحدة 1</option>
                    </select>
                  </div>

                  {/* Committee */}
                  <div>
                    <label className="block text-xs font-medium">Committee English</label>
                    <select className={formFieldClass} defaultValue="Central">
                      <option>Central</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium">Committee Arabic</label>
                    <select
                      className={`${formFieldClass} text-right`}
                      dir="rtl"
                      defaultValue="المركزية"
                    >
                      <option>المركزية</option>
                    </select>
                  </div>
                </div>

                {/* Toggle */}
                <div className="flex items-center gap-2 mt-4">
                  <label className="text-sm font-medium text-black">
                    AI Engine System Access
                  </label>
                  <ToggleSwitch />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const ToggleSwitch = () => {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" className="sr-only peer" defaultChecked />
      <div className="w-8 h-4 bg-gray-300 rounded-full peer-checked:bg-[#29B171] transition-colors duration-300"></div>
      <span className="absolute left-[2px] top-[2px] w-3 h-3 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-4"></span>
    </label>
  );
};
