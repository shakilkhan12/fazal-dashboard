'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from "next/navigation";

const roles = [
  { title: 'Admin', users: 5 },
  { title: 'Manager', users: 10 },
  { title: 'Custom Viewer', users: 100 },
  { title: 'Security', users: 25 },
  { title: 'Waste Disposal', users: 50 },
  { title: 'Subscriber', users: 500 },
  { title: 'Staff', users: 134 },
  
  { title: 'Staff', users: 134 }
];

export default function RolesPage() {
  const router = useRouter();

  const data = Array(10).fill(0).map((_, i) => ({
    name: i % 2 === 0 ? "Abdul Rahman" : "Maryam Abbas",
    empId: "EMP-12345",
    role: ["Waste", "Admin", "Security", "Irrigation"][i % 4],
    department: ["Waste", "Admin", "Security", "Irrigation"][i % 4],
    status: i % 4 === 3 ? "Inactive" : "Active",
    date: "12 July 2025",
    time: "09:25PM"
  }));

  return (

    <div className=" font-['Public Sans'] w-full space-y-6 mx-auto">
      {/* Header */}
      <div className="px-4 sm:p-3">
        <h1 className="text-xl sm:text-2xl  text-gray-800">Roles</h1>
        <h2 className="text-sm text-gray-500">View and manage all roles</h2>
      </div>

      {/* Roles Grid */}
    <div className="w-full max-w-auto mx-auto  grid grid-cols-1 sm:grid-cols-3 gap-4">
  {roles.map((role, index) => (
    <div
      key={index}
      className="w-full bg-white border border-gray-200 rounded-md p-4 flex justify-between items-center"
    >
      <div>
        <h3 className="text-md font-semibold text-gray-700">{role.title}</h3>
        <p className="text-xs text-gray-400 mt-1">Total Users: {role.users}</p>
      </div>
      <Image
        src="/Office/poppp.png"
        alt="View"
        width={24}
        height={24}
      />
    </div>
  ))}

  {/* Add New Role */}
  <div className="w-full bg-white rounded-md flex items-center justify-center shadow-sm">
    <button
      className="bg-[#2BB673] text-white px-4 py-2 rounded text-sm font-medium w-full sm:w-auto"
      onClick={() => router.push('/RolePermission/EditRole')}
    >
      Add New Role
    </button>
  </div>
</div>
  {/* Staff Users Header */}
      <div className=" sm:p-6">
        <h1 className="text-xl sm:text-2xl font-sans text-gray-800">Staff Users</h1>
        <h2 className="text-sm text-gray-500">View and manage all staff users</h2>
      </div>

      {/* Staff Table - Mobile Friendly */}
      <div className="bg-white sm:p-6 rounded-lg shadow-sm font-sans w-full overflow-x-auto">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-4 justify-end">
          {["Department", "Location", "Employee ID", "AI Engine User"].map((label, i) => (
            <select
              key={i}
              className="rounded-md px-3 py-2 text-sm w-full sm:w-auto"
              style={{
                border: "1px solid var(--Theme-input-border, #2F2B3D38)",
                color: "var(--Theme-text-disabled, #2F2B3D66)",
              }}
            >
              <option>{`Select ${label}`}</option>
            </select>
          ))}
          <button className="bg-[#2BB673] text-white px-4 py-2 rounded-md text-sm w-full sm:w-auto">
            Sync Staff
          </button>
        </div>

        {/* Responsive Table */}
        <div className="hidden md:block">
          <table className="w-full min-w-[800px] text-[13px] font-sans border-collapse">
            <thead>
              <tr className="border-b border-gray-200 text-black">
                <th className="py-3 px-2 text-left">NAME</th>
                <th className="py-3 px-2 text-left">ROLE</th>
                <th className="py-3 px-2 text-left">DEPARTMENT</th>
                <th className="py-3 px-2 text-left">AI ENGINE USER</th>
                <th className="py-3 px-2 text-left">LAST LOGIN</th>
                <th className="py-3 px-2 text-left">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, i) => (
                <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-2 flex items-center gap-3 whitespace-nowrap">
                    <Image
                      src="/Office/women.png"
                      alt="avatar"
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                    <div>
                      <div className="font-medium text-gray-700">{row.name}</div>
                      <div className="text-gray-500 text-xs">{row.empId}</div>
                    </div>
                  </td>
                  <td className="py-3 px-2 whitespace-nowrap">
                    <span className="px-3 py-1 text-xs rounded border border-[#00BAD1] text-[#00BAD1]">
                      {row.role}
                    </span>
                  </td>
                  <td className="py-3 px-2 whitespace-nowrap">
                    <span className="px-3 py-1 text-xs rounded border border-[#00BAD1] text-[#00BAD1]">
                      {row.department}
                    </span>
                  </td>
                  <td className="py-3 px-2 flex items-center text-gray-700 whitespace-nowrap">
                    <span
                      className={`w-2 h-2 rounded-full mr-2 ${row.status === "Active" ? "bg-green-500" : "bg-red-500"}`}
                    ></span>
                    {row.status}
                  </td>
                  <td className="py-3 px-2 text-gray-700 whitespace-nowrap">
                    {row.date}
                    <br />
                    {row.time}
                  </td>
                  <td className="py-3 px-2 whitespace-nowrap">
  <button
    className="bg-white p-2 rounded hover:bg-gray-200"
    onClick={() => router.push("/RolePermission/UpdateStaff")}
  >
    <Image
      src="/Office/eye.png"
      alt="View"
      width={20}
      height={20}
      className="object-contain"
    />
  </button>
</td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card Layout */}
        <div className="md:hidden space-y-4">
          {data.map((row, i) => (
            <div key={i} className="border rounded-lg p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <Image
                  src="/Office/women.png"
                  alt="avatar"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <div className="font-medium text-gray-700">{row.name}</div>
                  <div className="text-gray-500 text-xs">{row.empId}</div>
                </div>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
                <div><strong>Role:</strong> {row.role}</div>
                <div><strong>Department:</strong> {row.department}</div>
                <div><strong>Status:</strong> 
                  <span className={`ml-1 w-2 h-2 rounded-full inline-block ${row.status === "Active" ? "bg-green-500" : "bg-red-500"}`}></span> {row.status}
                </div>
                <div><strong>Last Login:</strong> {row.date} {row.time}</div>
              </div>
              <div className="mt-3 flex justify-end">
                <button
                  className="text-[#2BB673] text-sm"
                  onClick={() => router.push("/RolePermission/UpdateStaff")}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-4 text-gray-600 gap-3">
          <span className="text-sm">Showing 1 to 10 of 50 entries</span>
          <div className="flex gap-2">
            {["«", "‹", "1", "2", "3", "›", "»"].map((btn, idx) => (
              <button
                key={idx}
                className={`px-2 py-1 rounded ${btn === "3" ? "bg-[#2BB673] text-white" : "bg-gray-100"}`}
              >
                {btn}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
