'use client'

// React Imports
import { useState, useEffect, useMemo } from 'react'

// Next Imports
import Link from 'next/link'
import { useParams } from 'next/navigation'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Checkbox from '@mui/material/Checkbox'
import LinearProgress from '@mui/material/LinearProgress'
import TablePagination from '@mui/material/TablePagination'
import Typography from '@mui/material/Typography'

// Third-party Imports
import classnames from 'classnames'
import { rankItem } from '@tanstack/match-sorter-utils'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getFilteredRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFacetedMinMaxValues,
  getPaginationRowModel,
  getSortedRowModel
} from '@tanstack/react-table'

// Components Imports
import CustomAvatar from '@core/components/mui/Avatar'
import TablePaginationComponent from '@components/TablePaginationComponent'
import CustomTextField from '@core/components/mui/TextField'

// Util Imports
import { getLocalizedUrl } from '@/utils/i18n'

// Style Imports
import tableStyles from '@core/styles/table.module.css'
import { Avatar, Button, Chip } from '@mui/material'
import Image from 'next/image'

const fuzzyFilter = (row, columnId, value, addMeta) => {
  // Rank the item
  const itemRank = rankItem(row.getValue(columnId), value)

  // Store the itemRank info
  addMeta({
    itemRank
  })

  // Return if the item should be filtered in/out
  return itemRank.passed
}

const DebouncedInput = ({ value: initialValue, onChange, debounce = 500, ...props }) => {
  // States
  const [value, setValue] = useState(initialValue)

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])
  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value)
    }, debounce)

    return () => clearTimeout(timeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  return <CustomTextField {...props} value={value} onChange={e => setValue(e.target.value)} />
}

// Column Definitions
const columnHelper = createColumnHelper()

const Parks = ({ parkData }) => {
  // States
  const [rowSelection, setRowSelection] = useState({})

  const [data, setData] = useState(...[parkData])
  const [globalFilter, setGlobalFilter] = useState('')

  // Hooks
  const { lang } = useParams()
  const locale = lang || 'en' // fallback to English

  const columns = useMemo(
    () => [
      columnHelper.accessor('id', {
        header: 'ID',
        cell: ({ row }) => (
          <div className='flex items-center gap-4'>
            <div className='flex flex-col'>
              <Typography
                component={Link}
                href={getLocalizedUrl('/', locale)}
                sx={theme => ({
                  color: theme.palette.mode === 'dark' ? theme.palette.text.primary : '#2F2B3D8C'
                })}
                fontSize={13}
              >
                {row.original.id}
              </Typography>
              <div className='flex items-center gap-2'>
                {/* <CustomAvatar src={row.original.image} size={22} /> */}
                <Typography
                  variant='body2'
                  sx={theme => ({
                    color: theme.palette.mode === 'dark' ? theme.palette.text.primary : '#2F2B3D8C'
                  })}
                >
                  {row.original.user}
                </Typography>
              </div>
            </div>
          </div>
        )
      }),
      columnHelper.accessor('location', {
        header: 'Location',
        cell: ({ row }) => (
          <Typography
            className='font-medium '
            fontSize={13}
            sx={theme => ({
              color: theme.palette.mode === 'dark' ? theme.palette.text.primary : '#444050'
            })}
          >
            {row.original.location}
          </Typography>
        ),
        enableSorting: false
      }),
      columnHelper.accessor('name', {
        header: 'NAME',

        cell: ({ row }) => (
          <div className='flex items-center  gap-4'>
            <Image width={108} height={76} alt={row.original.image} src={`${row.original.image}`} />

            <div className='flex flex-col'>
              <Typography
                color='text.primary'
                className='font-medium max-w-[88px] leading-[22px] text-wrap mb-1'
                fontSize={15}
              >
                {row.original.name}
              </Typography>
              <Chip
                sx={{ width: 59, height: 24 }}
                variant='tonal'
                size='small'
                label={row.original.status}
                color='success'
              />
            </div>
          </div>
        )
      }),
      columnHelper.accessor('cameras', {
        header: 'Instalations',
        cell: ({ row }) => (
          <div className='flex items-center justify-between gap-5 max-w-[300px]'>
            <div>
              <div className='flex items-center gap-1.5'>
                <CustomAvatar variant='rounded' skin='light' size={26} color='secondary'>
                  <Image src='./Office/device-cctv-indigo.svg' width={18} height={18} />
                </CustomAvatar>

                <Typography fontSize={15} color='#2F2B3D · 90%'>
                  98
                </Typography>
              </div>
              <Typography
                fontSize={13}
                sx={theme => ({
                  color: theme.palette.mode === 'dark' ? theme.palette.text.secondary : '#2F2B3D8C'
                })}
              >
                Total cameras
              </Typography>
            </div>
            <div>
              <div className='flex items-center gap-1.5'>
                <CustomAvatar variant='rounded' skin='light' size={26} color='warning'>
                  {/* <i className='tabler-device-computer-camera text-lg' /> */}
                  <Image src='/park/Frame.svg' width={18} height={18} />
                </CustomAvatar>
                <Typography fontSize={15}>98</Typography>
              </div>
              <Typography
                fontSize={13}
                sx={theme => ({
                  color: theme.palette.mode === 'dark' ? theme.palette.text.secondary : '#2F2B3D8C'
                })}
              >
                Total Zones
              </Typography>
            </div>
            <div>
              <div className='flex items-center gap-1.5'>
                <CustomAvatar variant='rounded' skin='light' size={26} color='primary'>
                  <Image src='/park/users.svg' width={18} height={18} />
                </CustomAvatar>
                <Typography fontSize={15} className=''>
                  98
                </Typography>
              </div>
              <Typography
                fontSize={13}
                sx={theme => ({
                  color: theme.palette.mode === 'dark' ? theme.palette.text.secondary : '#2F2B3D8C'
                })}
              >
                Total Users
              </Typography>
            </div>
          </div>
        ),
        enableSorting: false
      }),
      columnHelper.accessor('action', {
        header: 'ACTION',
        cell: ({ row }) => (
          <div className='flex items-center justify-between gap-5'>
            <Link href={'/park-view/manage-park-view'}>
              <Button
                variant='outlined'
                color='success'
                size='medium'
                sx={{ height: 38, minWidth: 97, fontSize: 13, fontWeight: 400, lineHeight: 20 }}
              >
                Manage
              </Button>
            </Link>
          </div>
        ),
        enableSorting: false
      })
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  const table = useReactTable({
    data: data,
    columns,
    filterFns: {
      fuzzy: fuzzyFilter
    },
    state: {
      rowSelection,
      globalFilter
    },
    initialState: {
      pagination: {
        pageSize: 9
      }
    },
    enableRowSelection: true, //enable row selection for all rows
    // enableRowSelection: row => row.original.age > 18, // or enable row selection conditionally per row
    globalFilterFn: fuzzyFilter,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues()
  })

  return (
    <Card>
      <CardHeader
        title='Park View Listing'
        className='flex-wrap gap-4 min-w-full'
        sx={{ width: 18, fontWeight: 500 }}
      />
      <div className='overflow-x-auto'>
        <table className={tableStyles.table}>
          <thead>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header, index) => (
                  <th
                    key={header.id}
                    // style={{
                    //   borderRight: index !== headerGroup.headers.length - 1 ? '1px solid #e0e0e0' : 'none',
                    //   padding: '8px'
                    // }}
                  >
                    {header.isPlaceholder ? null : (
                      <>
                        <div
                          className={classnames({
                            'flex items-center': header.column.getIsSorted(),
                            'cursor-pointer select-none': header.column.getCanSort()
                          })}
                          onClick={header.column.getToggleSortingHandler()}
                        >
                          {flexRender(header.column.columnDef.header, header.getContext())}
                          {{
                            asc: <i className='tabler-chevron-up text-xl' />,
                            desc: <i className='tabler-chevron-down text-xl' />
                          }[header.column.getIsSorted()] ?? null}
                        </div>
                      </>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          {table.getFilteredRowModel().rows.length === 0 ? (
            <tbody>
              <tr>
                <td colSpan={table.getVisibleFlatColumns().length} className='text-center'>
                  No data available
                </td>
              </tr>
            </tbody>
          ) : (
            <tbody>
              {table
                .getRowModel()
                .rows.slice(0, table.getState().pagination.pageSize)
                .map(row => {
                  return (
                    <tr key={row.id} className={classnames({ selected: row.getIsSelected() })}>
                      {row.getVisibleCells().map(cell => (
                        <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                      ))}
                    </tr>
                  )
                })}
            </tbody>
          )}
        </table>
      </div>
      <TablePagination
        component={() => <TablePaginationComponent table={table} />}
        count={table.getFilteredRowModel().rows.length}
        rowsPerPage={table.getState().pagination.pageSize}
        page={table.getState().pagination.pageIndex}
        onPageChange={(_, page) => {
          table.setPageIndex(page)
        }}
      />
    </Card>
  )
}

export default Parks
