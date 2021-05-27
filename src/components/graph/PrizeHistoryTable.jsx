import _ from 'lodash'
import { useMemo } from 'react'
import Link from 'next/link'
import { useTable, usePagination, useRowState, useSortBy, useFilters } from 'react-table'

import styles from './PrizeHistoryTable.module.css'
import { usePrizePoolsQuery } from '@hooks/thegraph'
import { EpochToCalendarDate, TablePagination, TokenBalance } from '@components'
import { utils, BigNumber } from 'ethers'

/**
 * @name
 * @param {Object} props
 */
export const PrizeHistoryTable = ({
  first,
  orderDirection,
  underlyingCollateralSymbol,
  podAddress,
  decimals,
  symbolColor
}) => {
  const { data } = usePrizePoolsQuery(
    {
      first9: 40,
      orderDirection9: orderDirection,
      where9: { underlyingCollateralSymbol: underlyingCollateralSymbol }
    },
    {}
  )

  const totalPrizeReducer = (accumulator, currentValue) => {
    if (BigNumber.isBigNumber(accumulator)) {
      return accumulator.add(BigNumber.from(currentValue.amount))
    } else {
      return BigNumber.from(accumulator.amount).add(BigNumber.from(currentValue.amount))
    }
  }
  return useMemo(() => {
    if (data && data.prizePools.length > 0) {
      let prizes = []
      data.prizePools.forEach((prizePool) => {
        let isPodWinner = false
        prizePool.prizes.forEach((prize) => {
          prize.isPodWinner = false
          prize.awardedControlledTokens.forEach((awarded) => {
            if (utils.getAddress(awarded.winner) == utils.getAddress(podAddress)) {
              prize.isPodWinner = true
            }
          })

          const totalPrizeControlledokens = prize.awardedControlledTokens.reduce(
            totalPrizeReducer,
            { amount: '0' }
          )
          prize.totalPrizeControlledokens = totalPrizeControlledokens
          prizes.push(prize)
        })
      })

      const prizesSortedByDate = _.sortBy(prizes, ['awardedTimestamp']).reverse()

      return <TableBase data={prizesSortedByDate} decimals={decimals} symbolColor={symbolColor} />
    }
    return null
  }, [data])
}

/**
 * @name TableBase
 * @param {*} param0
 */
export function TableBase({
  data,
  columnExpandedCount,
  sxHeader,
  sxRow,
  sxCell,
  hideMainHeaders,
  expandedRow,
  selectRowSet,
  pageSizeDefault,
  filter,
  setSearchFilter,
  decimals,
  symbolColor,
  ...props
}) {
  const columns = useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id',
        Cell: ({ row }) => (
          <div className=''>
            <span className='text-xs px-2'>{row.id}</span>
          </div>
        )
      },
      {
        Header: 'Total Deposits',
        accessor: 'totalTicketSupply',
        Cell: ({ value, row }) => {
          return (
            <div className=''>
              <TokenBalance balance={value} decimals={decimals} />
              <span className={`font-bold ml-1 ${symbolColor}`}>
                {row.original.prizePool.underlyingCollateralSymbol}
              </span>
            </div>
          )
        }
      },
      {
        Header: () => (
          <>
            <div className='flex flex-col items-start justify-center'>
              <h3 className=' font-bold text-lg'>Prize</h3>
              <span className='text-xs font-light' style={{ fontSize: 8 }}>
                (Excludes LOOT Box)
              </span>
            </div>
          </>
        ),
        accessor: 'totalPrizeControlledokens',
        Cell: ({ value, row }) => {
          return (
            <div className='text-left'>
              <TokenBalance balance={value} decimals={decimals} />
              <span className={`font-bold ml-1 ${symbolColor}`}>
                {row.original.prizePool.underlyingCollateralSymbol}
              </span>
              {row.original.isPodWinner && (
                <span
                  className='tag-purple text-white text-xs px-4 ml-3'
                  style={{
                    background:
                      'linear-gradient(71.84deg, rgba(255, 119, 225, 0.9) -59.48%, #4C249F 100.31%)',
                    borderRadius: '30px'
                  }}
                >
                  <img src='/images/pooltogether-trophy.svg' width={10} />
                  <span className='mx-2'>Pod Won</span>
                  <img src='/images/pooltogether-trophy.svg' width={10} />
                </span>
              )}
            </div>
          )
        }
      },
      {
        Header: 'Winner Count',
        accessor: 'numberOfSubWinners',
        Cell: ({ value, row }) => {
          return (
            <div className=''>
              <span className='font-normal ml-1 text-white text-base lg:text-xl'>{value}</span>
            </div>
          )
        }
      },
      {
        Header: 'Date',
        accessor: 'awardedTimestamp',
        Cell: ({ value }) => (
          <div className='pr-3'>
            <EpochToCalendarDate className='text-base lg:text-lg font-thin' epoch={value} />
          </div>
        )
      }
    ],
    []
  )

  const defaultColumn = useMemo(
    () => ({
      Filter: () => null
    }),
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of 'rows' the 'page' variable is used
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize }
  } = useTable(
    {
      columns,
      data,

      initialState: { pageSize: 6, pageIndex: 0 },
      defaultColumn
    },
    useFilters, // useFilters!
    useSortBy,
    useRowState,
    usePagination
    // useGlobalFilter // useGlobalFilter!
  )

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table} {...getTableProps()}>
        <thead className={styles.tableHead}>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, index) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  key={index}
                  sx={sxHeader}
                  className='text-sm font-normals'
                >
                  {column.render('Header')}
                  <span style={{ fontSize: 14 }}>
                    {column.isSorted ? (column.isSortedDesc ? ' ↓' : ' ↑') : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className={styles.tableBody} {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()} key={i}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()} className='py-1 lg:py-5'>
                      {cell.render('Cell')}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>

      <div
        className='bg-purple-900 border-solid border-t-2 border-teal-500 text-white rounded-lg rounded-t-none px-3 py-3 shadow-md w-full z-10'
        style={{ backgroundColor: 'rgba(33, 28, 66, 1)' }}
      >
        <TablePagination
          innerDisplay={
            <Link href='/yield-farming'>
              <a className='tag-white px-2'>
                <img className='mr-2 self-center' src='/icons/icon-plant.png' width={16} />
                <span className=''>View Yield Farming Page</span>
              </a>
            </Link>
          }
          label='LP Pools'
          gotoPage={gotoPage}
          previousPage={previousPage}
          nextPage={nextPage}
          canPreviousPage={canPreviousPage}
          canNextPage={canNextPage}
          setPageSize={setPageSize}
          pageOptions={pageOptions}
          pageIndex={pageIndex}
          pageSize={pageSize}
        />
      </div>
    </div>
  )
}

export default PrizeHistoryTable
