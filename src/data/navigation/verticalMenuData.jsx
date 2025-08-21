const verticalMenuData = () => [
  // Administration
  { isSection: true, label: 'Administration' },
  {
    label: 'Dashboard',
    href: '/dashboard',
    icon: 'tabler-layout-grid',
    suffix: { label: '5', color: 'error' },
    arrow: 'tabler-chevron-right'
  },
  { 
    label: 'Live Stream', 
    href: '/live-stream', 
    icon: 'tabler-video',
    arrow: 'tabler-chevron-right'
  },
  { 
    label: 'Roles & Permissions', 
    href: '/RolePermission', 
    icon: 'tabler-shield-lock',
    arrow: 'tabler-chevron-right'
  },
  { 
    label: 'Offices', 
    href: '/Office', 
    icon: 'tabler-building-skyscraper',
    arrow: 'tabler-chevron-right'
  },
  { 
    label: 'Parks', 
    href: '/Park', 
    icon: 'tabler-tree',
    arrow: 'tabler-chevron-right'
  },
  { 
    label: 'System Reports', 
    href: '/system-reports', 
    icon: 'tabler-report-analytics',
    arrow: 'tabler-chevron-right'
  },
  { 
    label: 'Alerts', 
    href: '/alerts', 
    icon: 'tabler-bell',
    arrow: 'tabler-chevron-right'
  },
  { 
    label: 'Inspect Plant', 
    href: '/inspect-plant', 
    icon: 'tabler-plant-2',
    arrow: 'tabler-chevron-right'
  },

  // Offices
  { isSection: true, label: 'Offices' },
  { 
    label: 'Attendance', 
    href: '/offices/attendance', 
    icon: 'tabler-user-check',
    arrow: 'tabler-chevron-right'
  },
  { 
    label: 'Footfall Analysis', 
    href: '/offices/footfall-analysis', 
    icon: 'tabler-walk',
    arrow: 'tabler-chevron-right'
  },
  { 
    label: 'Sentiment Analysis', 
    href: '/offices/sentiment-analysis', 
    icon: 'tabler-mood-smile',
    arrow: 'tabler-chevron-right'
  },

  // Parks
  { isSection: true, label: 'Parks' },
  { 
    label: 'Attendance', 
    href: '/parks/attendance', 
    icon: 'tabler-user-check',
    arrow: 'tabler-chevron-right'
  },
  { 
    label: 'Footfall Analysis', 
    href: '/parks/footfall-analysis', 
    icon: 'tabler-walk',
    arrow: 'tabler-chevron-right'
  },
  { 
    label: 'Sentiment Analysis', 
    href: '/parks/sentiment-analysis', 
    icon: 'tabler-mood-smile',
    arrow: 'tabler-chevron-right'
  },
  { 
    label: 'Behaviour Alerts', 
    href: '/parks/behaviour-alerts', 
    icon: 'tabler-alert-circle',
    arrow: 'tabler-chevron-right'
  },
  { 
    label: 'Irrigation', 
    href: '/parks/irrigation', 
    icon: 'tabler-droplet',
    arrow: 'tabler-chevron-right'
  },
  { 
    label: 'Landscaping', 
    href: '/landscaping', 
    icon: 'tabler-shovel',
    arrow: 'tabler-chevron-right'
  },
  { 
    label: 'Litter Detection', 
    href: '/litter-detection', 
    icon: 'tabler-trash',
    arrow: 'tabler-chevron-right'
  },
  { 
    label: 'Intrusion Detection', 
    href: '/intrusion-detection', 
    icon: 'tabler-shield-lock',
    arrow: 'tabler-chevron-right'
  },
  { 
    label: 'Smoking Detection', 
    href: '/smoking-detection', 
    icon: 'tabler-smoking-no',
    arrow: 'tabler-chevron-right'
  },

  // My Account
  { isSection: true, label: 'My Account' },
  { 
    label: 'Settings', 
    href: '/Setting/Profile', // Fazal; change later
    icon: 'tabler-settings',
    arrow: 'tabler-chevron-right'
  }
]

export default verticalMenuData
