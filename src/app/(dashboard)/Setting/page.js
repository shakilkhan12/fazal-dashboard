'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ProfileForm from './Profile/ProfileForm';

export default function AccountLayout({ children }) {
  const pathname = usePathname();

  const navItems = [
    {
      label: 'Profile',
      path: '/Setting/Profile',
      activeIcon: '/Profile/inactiveprofile.png',
      inactiveIcon: '/Profile/activeprofile.png',
    },
    {
      label: 'Terms & Conditions',
      path: '/Setting/TermCondition',
      activeIcon: '/Profile/inactiveprivacy.png',
      inactiveIcon: '/Profile/activetermandcondition.svg',
    },
    {
      label: 'Privacy & Policy',
      path: '/Setting/Privacy',
      activeIcon: '/Profile/inactivetermandcondition.png',
      inactiveIcon: '/Profile/activeprivacy.png',
    },
    {
      label: 'Language',
      path: '/Setting/Language',
      activeIcon: '/Profile/inactivemessage.png',
      inactiveIcon: '/Profile/activemessage.png',
    },
    {
      label: 'FAQ',
      path: '/Setting/Faq',
      activeIcon: '/Profile/inactivefaq.png',
      inactiveIcon: '/Profile/activefaq.svg',
    },
  ];

  const isAnyNavItemActive = navItems.some(item => pathname === item.path);

  return (
    
    <div className=" font-['Public Sans'] w-full space-y-6 ">
      <div className="flex flex-col lg:flex-row  gap-6 w-full space-y-6">
        {/* Left Profile Box */}
        <div className="bg-white shadow rounded-lg py-6 text-center w-full lg:w-[300px] flex-shrink-0 h-[300px]">
          <div className="flex justify-center">
            <Image
              src="/Profile/Avatar (1).png"
              alt="Avatar"
              width={100}
              height={100}
              className="rounded-full"
            />
          </div>

          <h2 className="mt-4 text-xl font-semibold text-gray-800">Sheikh Tayyab</h2>
          <hr className="my-4 border-t border-gray-300 w-11/12 mx-auto pb-5" />

          <div className="mt-4 text-sm text-gray-600 space-y-2 pl-5 text-left">
            <div className="flex items-center gap-2 ">
              <Image src="/Profile/id.svg" alt="ID Icon" width={16} height={16} />
              <span>101-12345</span>
            </div>
            <div className="flex items-center gap-2">
              <Image src="/Profile/mail.svg" alt="Email Icon" width={16} height={16} />
              <span>sampleemail@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Right Nav Panel and Content */}
        <div className="flex-1 flex flex-col">
          {/* Navbar */}
          
        {/* Tayyab Add padding */}
          <nav className="px-0 lg:px-10 mb-4 flex gap-2 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 flex-nowrap">
            {navItems.map(({ label, path, activeIcon, inactiveIcon }) => {
              const isActive = pathname === path;
              return (
                <Link
                  key={label}
                  href={path}
                  className={`flex items-center gap-2 justify-center rounded-md transition-all whitespace-nowrap px-5 h-10
                    ${isActive
                      ? 'text-white bg-gradient-to-r from-[#2BB673]/70 to-[#2BB673]'
                      : 'text-gray-800 bg-transparent'}
                  `}
                  style={{ minWidth: 140 }}
                >
                  <Image
                    src={isActive ? activeIcon : inactiveIcon}
                    alt={`${label} Icon`}
                    width={16}
                    height={16}
                  />
                  <span className="text-sm truncate">{label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Show ProfileForm only if NO nav is active */}
          {!isAnyNavItemActive && (
            <div className="bg-white shadow rounded-lg p-6 mb-4">
              <ProfileForm />
            </div>
          )}

          {/* Injected Page Content */}
          <div className="bg-white shadow rounded-lg p-6">{children}</div>
        </div>
      </div>
    </div>
  );
}
