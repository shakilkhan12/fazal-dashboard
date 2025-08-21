// Util Imports
import { menuClasses } from '@menu/utils/menuClasses'

const menuSectionStyles = (verticalNavOptions, theme) => {
  // Vars
  const { isCollapsed, isHovered } = verticalNavOptions
  const collapsedNotHovered = isCollapsed && !isHovered

  return {
    root: {
      marginBlockStart: theme.spacing(0),
      ['& .${menuClasses.menuSectionContent}']: {
        color: '#FFFFFFB2',
        paddingInline: '12px !important',
        paddingBlock: '${theme.spacing(collapsedNotHovered ? 3.625 : 1.5)} !important',
        marginBlockStart: theme.spacing(3.5),
        '&:before': {
          content: '""',
          blockSize: 1,
          inlineSize: '1.375rem',
          backgroundColor: '#FFFFFFB2'
        },
        ...(!collapsedNotHovered && {
          '&:before': {
            content: 'none'
          }
        }),
        ['& .${menuClasses.menuSectionLabel}']: {
          flexGrow: 0,
          textTransform: 'uppercase',
          fontSize: '13px',
          lineHeight: 1.38462,
          letterSpacing: '0.4px',
          color: '#FFFFFFB2',
          ...(collapsedNotHovered && {
            display: 'none'
          })
        }
      }
    }
  }
}

export default menuSectionStyles
