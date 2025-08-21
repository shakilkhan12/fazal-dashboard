import React from 'react';
import Image from 'next/image';

const ProfileForm = () => {
  return (
    <>
      <h2 className="language-heading text-2xl text-black mb-6">Profile Details</h2>

      {/* Row 1 */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-2 mt-10">
        <p className="text-sm text-gray-700">Employee ID</p>
        <p className="text-sm text-gray-700">Gender</p>
        <p className="text-sm text-gray-700">Role</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <input
          suppressHydrationWarning
          className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-600 cursor-not-allowed"
          placeholder="Employee ID"
          value="101-12345"
          readOnly
        />
        <select
          suppressHydrationWarning
          className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-600 cursor-not-allowed"
          disabled
          value="Male"
        >
          <option value="Male">Male</option>
        </select>
        <select
          suppressHydrationWarning
          className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-600 cursor-not-allowed"
          disabled
          value="Admin"
        >
          <option value="Admin">Admin</option>
        </select>
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-2">
        <p className="text-sm text-gray-700">English Name</p>
        <p className="text-sm text-gray-700 text-right sm:text-left">Arabic Name</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <input
          suppressHydrationWarning
          className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-600 cursor-not-allowed"
          placeholder="English Name"
          value="Sheikh Abdullah"
          readOnly
        />
        <input
          suppressHydrationWarning
          className="w-full px-4 py-2 border border-gray-300 rounded-md text-right bg-gray-100 text-gray-600 cursor-not-allowed"
          dir="rtl"
          placeholder="Arabic Name"
          value="شيخ عبدالله"
          readOnly
        />
      </div>

      {/* Row 3 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-2">
        <p className="text-sm text-gray-700">Phone</p>
        <p className="text-sm text-gray-700">Email</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div className="flex items-center border border-gray-300 rounded-md bg-gray-50 px-4 py-2 gap-2">
          <Image src="/image 5.png" alt="UAE Flag" width={20} height={15} />
          <span className="text-gray-600">+971</span>
          <input
            suppressHydrationWarning
            className="w-full bg-transparent border-0 outline-none text-gray-800"
            placeholder="123 45687 30"
            readOnly
          />
        </div>

        <input
          suppressHydrationWarning
          className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-600 cursor-not-allowed"
          placeholder="Email"
          value="Sheikhabdullah@gmail.com"
          readOnly
        />
      </div>

      {/* Row 4 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-2">
        <p className="text-sm text-gray-700">Department English</p>
        <p className="text-sm text-gray-700 text-right sm:text-left">Department Arabic</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <select
          suppressHydrationWarning
          className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-600 cursor-not-allowed"
          disabled
          value="Irrigation"
        >
          <option value="Irrigation">Irrigation</option>
        </select>
        <select
          suppressHydrationWarning
          className="w-full px-4 py-2 border border-gray-300 rounded-md text-right bg-gray-100 text-gray-600 cursor-not-allowed"
          dir="rtl"
          disabled
          value="الري"
        >
          <option value="الري">الري</option>
        </select>
      </div>

      {/* Row 5 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-2">
        <p className="text-sm text-gray-700">Designation English</p>
        <p className="text-sm text-gray-700 text-right sm:text-left">Designation Arabic</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <select
          suppressHydrationWarning
          className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-600 cursor-not-allowed"
          disabled
          value="Admin"
        >
          <option value="Admin">Admin</option>
        </select>
        <select
          suppressHydrationWarning
          className="w-full px-4 py-2 border border-gray-300 rounded-md text-right bg-gray-100 text-gray-600 cursor-not-allowed"
          dir="rtl"
          disabled
          value="مسؤول"
        >
          <option value="مسؤول">مسؤول</option>
        </select>
      </div>

      {/* Row 6 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-2">
        <p className="text-sm text-gray-700">Unit English</p>
        <p className="text-sm text-gray-700 text-right sm:text-left">Unit Arabic</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <select
          suppressHydrationWarning
          className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-600 cursor-not-allowed"
          disabled
          value="Unit 1"
        >
          <option value="Unit 1">Unit 1</option>
        </select>
        <select
          suppressHydrationWarning
          className="w-full px-4 py-2 border border-gray-300 rounded-md text-right bg-gray-100 text-gray-600 cursor-not-allowed"
          dir="rtl"
          disabled
          value="الوحدة ١"
        >
          <option value="الوحدة ١">الوحدة ١</option>
        </select>
      </div>

      {/* Row 7 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-2">
        <p className="text-sm text-gray-700">Committee English</p>
        <p className="text-sm text-gray-700 text-right sm:text-left">Committee Arabic</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <select
          suppressHydrationWarning
          className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-600 cursor-not-allowed"
          disabled
          value="Central"
        >
          <option value="Central">Central</option>
        </select>
        <select
          suppressHydrationWarning
          className="w-full px-4 py-2 border border-gray-300 rounded-md text-right bg-gray-100 text-gray-600 cursor-not-allowed"
          dir="rtl"
          disabled
          value="المركزية"
        >
          <option value="المركزية">المركزية</option>
        </select>
      </div>
    </>
  );
};

export default ProfileForm;
