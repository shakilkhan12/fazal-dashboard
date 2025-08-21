'use client'

// React Imports
import { useState, useEffect, useMemo } from 'react'

import { useParams } from 'next/navigation'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
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
import TablePaginationComponent from '@components/TablePaginationComponent'
import CustomTextField from '@core/components/mui/TextField'

// Style Imports
import tableStyles from '@core/styles/table.module.css'
import { FormControlLabel, Switch } from '@mui/material'

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

const Functionalities = () => {
  const functionalities = [
    {
      camera: 'Frontdoor camera',
      ai_models: { id: 1, attendence: 'attendance', footfall: 'footfall analysis', sentiment: 'sentiment analysis' }
    },
    {
      camera: 'Frontdoor camera',
      ai_models: { id: 1, attendence: 'attendance', footfall: 'footfall analysis', sentiment: 'sentiment analysis' }
    },
    {
      camera: 'Frontdoor camera',
      ai_models: { id: 1, attendence: 'attendance', footfall: 'footfall analysis', sentiment: 'sentiment analysis' }
    },
    {
      camera: 'Frontdoor camera',
      ai_models: { id: 1, attendence: 'attendance', footfall: 'footfall analysis', sentiment: 'sentiment analysis' }
    }
  ]
  // States
  const [rowSelection, setRowSelection] = useState({})

  const [data, setData] = useState(...[functionalities])
  const [globalFilter, setGlobalFilter] = useState('')

  // Hooks
  const { lang } = useParams()
  const locale = lang || 'en' // fallback to English

  const columns = useMemo(
    () => [
      columnHelper.accessor('camera', {
        header: 'CAMERA',
        cell: ({ row }) => (
          <div className='flex items-center gap-4'>
            <div className='flex items-center gap-2'>
              <i className='tabler-device-computer-camera text-primary text-lg' />
              <Typography className='font-medium hover:text-primary ' color='text.primary' fontSize={15}>
                {row.original.camera}
              </Typography>
            </div>
          </div>
        )
      }),
      columnHelper.accessor('ai_models', {
        header: 'AI MODELS',
        cell: ({ row }) => (
          <div className='flex items-center gap-4'>
            <FormControlLabel
              labelPlacement='end'
              control={<Switch defaultChecked />}
              label={row.original.ai_models.attendence}
              className='flex items-center capitalize text-[15px]'
            />
            <FormControlLabel
              labelPlacement='end'
              control={<Switch defaultChecked />}
              label={row.original.ai_models.footfall}
              className='flex items-center capitalize text-[15px]'
            />
            <FormControlLabel
              labelPlacement='end'
              control={<Switch defaultChecked />}
              label={row.original.ai_models.sentiment}
              className='flex items-center capitalize text-[15px]'
            />
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
        pageSize: 5
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
      <CardHeader className='flex-wrap' />
      <div className='mb-7 flex items-center justify-between gap-4 px-4'>
        <Typography size={18} className=''>
          Functionalities
        </Typography>
      </div>
      <div className='overflow-x-auto'>
        <table className={tableStyles.table}>
          <thead>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th key={header.id}>
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

export default Functionalities
