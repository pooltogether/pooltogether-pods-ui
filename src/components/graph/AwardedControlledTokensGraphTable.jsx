import idx from "idx";
import { useMemo } from "react";
import Link from "next/link";
import {
  useTable,
  usePagination,
  useRowState,
  useSortBy,
  useFilters,
} from "react-table";

import styles from "./AwardedControlledTokensGraphTable.module.css";
import { usePrizePoolsQuery } from "@hooks/thegraph";
import {
  EpochToCalendarDate,
  TablePagination,
  TokenBalance,
  EtherscanLink,
} from "@components";

/**
 * @name AwardedControlledTokensGraphTable
 * @param {Object} props
 */
export const AwardedControlledTokensGraphTable = ({
  first,
  orderDirection,
  underlyingCollateralSymbol,
}) => {
  const { data } = usePrizePoolsQuery(
    {
      first9: 40,
      orderDirection9: orderDirection,
      where9: { underlyingCollateralSymbol: underlyingCollateralSymbol },
    },
    {}
  );

  return useMemo(() => {
    if (data && data.prizePools.length > 0) {
      let prizes = [];

      data.prizePools.forEach((prizePool) => {
        prizePool.prizes.forEach((prize) => {
          prizes.push(prize);
        });
      });

      console.log(prizes, "prizesprizes");

      return <TableBase data={prizes} />;
    }
    return null;
  }, [data]);
};

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
  ...props
}) {
  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
        Cell: ({ value, row }) => (
          <div className="">
            <span className="text-xs px-2">{row.id}</span>
          </div>
        ),
      },
      {
        Header: "PrizePool",
        accessor: "underlyingCollateralSymbol",
        Cell: ({ value }) => (
          <div className="">
            <span className="text-xs px-2">{value}</span>
          </div>
        ),
      },
      {
        Header: "PrizePool Type",
        accessor: "prizePoolType",
        Cell: ({ value }) => (
          <div className="">
            <span className="text-xs px-2">{value}</span>
          </div>
        ),
      },
      {
        Header: "Prize",
        accessor: "awardedControlledTokens",
        Cell: ({ value, row }) => {
          return (
            <div className="">
              <TokenBalance balance={value[0].amount} />
              {/* <span className="font-bold ml-1 text-pink-400">
                {idx(row, (_) => _.original.token.symbol)}
              </span> */}
            </div>
          );
        },
      },
      {
        Header: "Winner Count",
        accessor: "numberOfSubWinners",
        Cell: ({ value, row }) => {
          return <span className="font-bold ml-1 text-pink-400">{value}</span>;
        },
      },
      {
        Header: "Winner",
        accessor: "winner",
        Cell: ({ value }) => (
          <div className="">
            <span
              className="tag-purple text-white px-4"
              style={{
                background:
                  "linear-gradient(71.84deg, rgba(255, 119, 225, 0.9) -59.48%, #4C249F 100.31%)",
                borderRadius: "30px",
              }}
            >
              <img src="/images/pooltogether-trophy.svg" width={10} />
              <span className="mx-2">Pod Won</span>
              <img src="/images/pooltogether-trophy.svg" width={12} />
            </span>
          </div>
        ),
      },
      {
        Header: "Date",
        accessor: "awardedTimestamp",
        Cell: ({ value }) => (
          <div className="">
            <EpochToCalendarDate className="text-xs" epoch={value} />
          </div>
        ),
      },
      {
        Header: "Transaction",
        accessor: "transaction",
        Cell: ({ value }) => (
          <div className="">
            <EtherscanLink
              transaction
              className="text-xs text-purple-300 hover:text-purple-400 "
              hash={value}
            >
              View Transcation
            </EtherscanLink>
          </div>
        ),
      },
    ],
    []
  );

  const defaultColumn = useMemo(
    () => ({
      Filter: () => null,
    }),
    []
  );

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
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,

      initialState: { pageSize: 6, pageIndex: 0 },
      defaultColumn,
    },
    useFilters, // useFilters!
    useSortBy,
    useRowState,
    usePagination
    // useGlobalFilter // useGlobalFilter!
  );

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
                  className="text-sm font-normals"
                >
                  {column.render("Header")}
                  <span style={{ fontSize: 14 }}>
                    {column.isSorted ? (column.isSortedDesc ? " ↓" : " ↑") : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className={styles.tableBody} {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={i}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()} className="py-5">
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div
        className="bg-purple-900 border-solid border-t-2 border-teal-500 text-white rounded-lg rounded-t-none px-3 py-3 shadow-md w-full z-10"
        style={{ backgroundColor: "rgba(33, 28, 66, 1)" }}
      >
        <TablePagination
          innerDisplay={
            <Link href="/yield-farming">
              <a className="tag-white px-2">
                <img
                  className="mr-2 self-center"
                  src="/icons/icon-plant.png"
                  width={16}
                />
                <span className="">View Yield Farming Page</span>
              </a>
            </Link>
          }
          label="LP Pools"
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
  );
}

export default AwardedControlledTokensGraphTable;
