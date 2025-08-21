'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { RxCross2 } from 'react-icons/rx';
import RolesPage from '../page';

const ToggleSwitch = ({ checked, onChange }) => (
  <label className="relative inline-flex items-center cursor-pointer">
    <input
      type="checkbox"
      className="sr-only peer"
      checked={checked}
      onChange={onChange}
    />
    <div className="w-8 h-4 bg-gray-300 rounded-full peer-checked:bg-[#29B171] transition-colors duration-300"></div>
    <span className="absolute left-[2px] top-[2px] w-3 h-3 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-4"></span>
  </label>
);

export default function EditRole() {
  const router = useRouter();
  const [isPanelVisible, setIsPanelVisible] = useState(true);
  const [roleName, setRoleName] = useState('');
  const [permissions, setPermissions] = useState({});

  const types = [
    'Dashboard', 'Livestream', 'Roles & Permissions', 'Offices', 'Parks',
    'System Reports', 'Alerts', 'Attendance', 'Footfall Analysis', 'Sentimental Analysis',
    'Sentimental Monitor', 'Irrigation', 'Landscaping', 'Litter Detection',
    'Intrusion Detection', 'Smoking Detection', 'My Account', 'Settings'
  ];

  const handleCheckboxChange = (type, action) => {
    setPermissions((prev) => ({
      ...prev,
      [type]: {
        ...prev[type],
        [action]: !prev[type]?.[action]
      }
    }));
  };

  const handleClosePanel = () => {
    setIsPanelVisible(false);
    router.push('/RolePermission');
  };

  return (
    <>
      {/* Background content */}
      <div className={`${isPanelVisible ? 'blur-sm' : ''}`}>
        <RolesPage />
      </div>

      {/* Side Panel */}
      {isPanelVisible && (
        <div
          className="absolute right-0 z-50 flex justify-end items-start bg-transparent w-full"
          style={{
            top: '80px', // height of your navbar
          }}
        >
          <div
            className="
              bg-white shadow-lg overflow-auto border-l-4 border-[#2BB673]
              w-full sm:w-4/5 lg:w-[502px]
            "
            style={{
              maxHeight: 'calc(100vh - 80px)',
            }}
          >
            {/* Header */}
            <div className="flex justify-between items-center border-b p-4 sm:p-6">
              <h2 className="text-lg font-medium text-black">Edit Role</h2>
              <button
                onClick={handleClosePanel}
                className="p-1 bg-gradient-to-l from-[#2BB673B3] to-[#2BB673] rounded"
              >
                <RxCross2 size={20} className="text-white" />
              </button>
            </div>

            {/* Role Name Input */}
            <div className="p-4 sm:p-6">
              <label className="block text-sm font-medium mb-1 text-black">
                Role Name
              </label>
              <input
                type="text"
                className="w-full rounded px-2 py-1 mb-4 border border-gray-300"
                placeholder="Search Role Here"
                value={roleName}
                onChange={(e) => setRoleName(e.target.value)}
              />
            </div>

            {/* Access Header */}
            <div className="p-4 sm:p-5 text-black">
              <h1>Select Access</h1>
            </div>

            {/* Column Headers */}
            <div className="grid grid-cols-4 gap-2 font-sans py-4 sm:py-5 bg-[#2F2B3D1F] px-4 sm:px-6 text-black rounded-t-md text-sm sm:text-base">
              <div className="col-span-1 flex flex-col items-start">
                <span>Type</span>
              </div>
              {['View', 'Add', 'Update'].map((label) => (
                <div key={label} className="text-center flex flex-col items-center">
                  <input type="checkbox" className="mb-1 accent-green-600 w-4 h-4" />
                  <span>{label}</span>
                </div>
              ))}
            </div>

            {/* Permission Rows */}
            {types.map((type) => (
              <div
                key={type}
                className="grid grid-cols-4 items-center py-1 px-4 sm:px-6 text-black text-sm sm:text-base"
              >
                <div>{type}</div>
                {['view', 'add', 'update'].map((action) => (
                  <div key={action} className="text-center">
                    <ToggleSwitch
                      checked={permissions[type]?.[action] || false}
                      onChange={() => handleCheckboxChange(type, action)}
                    />
                  </div>
                ))}
              </div>
            ))}

            {/* Update Button */}
            <div className="flex justify-end items-center p-4 sm:p-6">
              <button
                className="py-2 rounded text-sm w-full sm:w-28.5 h-9.5"
                style={{
                  background:
                    'linear-gradient(270deg, rgba(43, 182, 115, 0.7) 0%, #2BB673 100%)',
                  color: '#FFFFFF',
                }}
              >
                Update Role
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
