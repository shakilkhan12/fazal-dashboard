'use client'

// Third-party Imports
import classnames from 'classnames'

// Component Imports
import NavToggle from './NavToggle'
import ModeDropdown from '@components/layout/shared/ModeDropdown'
import UserDropdown from '@components/layout/shared/UserDropdown'
import NotificationDropdown from '../shared/NotificationsDropdown'

// Util Imports
import { verticalLayoutClasses } from '@layouts/utils/layoutClasses'
import LanguageDropdown from '../shared/LanguageDropdown'
import { Typography } from '@mui/material'

const NavbarContent = () => {
  const notifications = [
    {
      avatarImage: '/images/avatars/8.png',
      title: 'Congratulations Flora 🎉',
      subtitle: 'Won the monthly bestseller gold badge',
      time: '1h ago',
      read: false
    },
    {
      title: 'Cecilia Becker',
      avatarColor: 'secondary',
      subtitle: 'Accepted your connection',
      time: '12h ago',
      read: false
    },
    {
      avatarImage: '/images/avatars/3.png',
      title: 'Bernard Woods',
      subtitle: 'You have new message from Bernard Woods',
      time: 'May 18, 8:26 AM',
      read: true
    },
    {
      avatarIcon: 'tabler-chart-bar',
      title: 'Monthly report generated',
      subtitle: 'July month financial report is generated',
      avatarColor: 'info',
      time: 'Apr 24, 10:30 AM',
      read: true
    },
    {
      avatarText: 'MG',
      title: 'Application has been approved 🚀',
      subtitle: 'Your Meta Gadgets project application has been approved.',
      avatarColor: 'success',
      time: 'Feb 17, 12:17 PM',
      read: true
    },
    {
      avatarIcon: 'tabler-mail',
      title: 'New message from Harry',
      subtitle: 'You have new message from Harry',
      avatarColor: 'error',
      time: 'Jan 6, 1:48 PM',
      read: true
    }
  ]
  return (
    <div className={classnames(verticalLayoutClasses.navbarContent, 'flex items-center justify-between gap-4 is-full')}>
      <div className='flex items-center gap-4'>
        <NavToggle />
      </div>
      <div className='flex items-center'>
        <LanguageDropdown />
        <NotificationDropdown notifications={notifications} />
        <Typography
          className='px-1 text-sm md:text-[15px]'
          sx={theme => ({
            color: theme.palette.mode === 'dark' ? theme.palette.text.secondary : '#2F2B3D · 90%'
          })}
        >
          Welcome, Sheikh Abdullah!
        </Typography>
        <UserDropdown />
      </div>
    </div>
  )
}

export default NavbarContent
