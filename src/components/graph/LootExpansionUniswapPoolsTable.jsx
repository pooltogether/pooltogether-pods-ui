import { useMemo } from "react";
import Link from "next/link";
import {
  useTable,
  usePagination,
  useRowState,
  useSortBy,
  useFilters,
} from "react-table";

import styles from "./LootExpansionUniswapPoolsTable.module.css";
import { useGraphLootPools } from "../../state/graph-system";
import {
  commifyTokenBalance,
  transformTokenToHuman,
} from "../../helpers/blockchain";

import {
  ERC20Balance,
  EtherscanLink,
  TokenImage,
  LootExpansionUniswapPoolStaked,
  LootExpansionUniswapPendingLoot,
  LootExpansionUniswapDepositModal,
  LootExpansionUniswapWithdrawModal,
  LootExpansionUniswapClaimButton,
  LootPoolAPY,
  TablePagination,
} from "../../components";

/**
 * @name LootExpansionUniswapPoolsTable
 * @param {*} param0
 */
export const LootExpansionUniswapPoolsTable = ({ address, ...props }) => {
  const lootUniswapPool = useGraphLootPools();

  return useMemo(() => {
    if (lootUniswapPool.data && lootUniswapPool.data.length > 0) {
      return <TableBase data={lootUniswapPool.data} />;
    }
    return null;
  }, [lootUniswapPool]);

  // return <StableTokensFetch columns={columns} filter={false} {...props} />;
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
  // const { } = useWeb3React();
  const ADDRESS_WETH = "0xBa78D89D5ECC915c0D66532C4a817124D53d3c07";
  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "pid",
        Cell: ({ value }) => (
          <div className="text-left">
            <span className="tag-gray text-xs px-2">{value}</span>
          </div>
        ),
      },
      {
        Header: "Pool",
        id: "id",
        accessor: "id",
        Cell: ({ value, row }) => {
          const tokenOrdered = useMemo(() => {
            let ordered = [];
            let token1 = row.original.tokens[0];
            let token2 = row.original.tokens[1];
            if (token1 && token2) {
              if (token1.address == ADDRESS_WETH) {
                ordered[0] = token1;
                ordered[1] = token2;
              } else {
                ordered[0] = token2;
                ordered[1] = token1;
              }

              return ordered;
            }
            return [];
          });

          return (
            <div className="flex lg:flex-col">
              <div className="flex items-center">
                <span
                  className={
                    "text-sm text-center flex justify-center items-center lg:flex lg:items-center lg:justify-start lg:text-lg"
                  }
                >
                  {/* <img src={row.original.image} width={28} /> */}
                  {tokenOrdered.map((token, index) => (
                    <TokenImage
                      fromSymbol
                      address={token.address}
                      symbol={token.symbol}
                      key={index}
                      width={24}
                      className="-mx-1 rounded-full"
                    />
                  ))}
                </span>
                <span className="ml-3 text-sm">{row.original.name}</span>
                <EtherscanLink address={row.original.pool.address}>
                  <img
                    className="ml-1 shadow-md block opacity-60"
                    src="/icons/external-link.png"
                    width={12}
                  />
                </EtherscanLink>
              </div>
              <div className="ml-3 lg:ml-0">
                <a
                  className="text-xs tag-pink rounded-sm mt-2"
                  href={`https://app.uniswap.org/#/add/${tokenOrdered[0].address}/${tokenOrdered[1].address}`}
                  target="_blank"
                >
                  Uniswap Pool
                </a>
              </div>
            </div>
          );
        },
      },
      {
        Header: "Multiplier",
        accessor: "multiplier",
        Cell: ({ value }) => {
          console.log(value, "valuevalue");
          if (value == "10000000000000000000") {
            return (
              <div className="">
                <span className="tag-gray px-2">
                  {transformTokenToHuman("500000000000000000000")}
                </span>
              </div>
            );
          } else {
            return (
              <div className="">
                <span className="tag-gray px-2">
                  {transformTokenToHuman(value)}
                </span>
              </div>
            );
          }
        },
      },
      {
        Header: "Total Staked",
        accessor: "deposited",
        Cell: ({ value }) => {
          return (
            <div className="">
              <span className="tag-gray px-2">
                {commifyTokenBalance(value)}
              </span>
            </div>
          );
        },
      },
      {
        Header: "APY",
        id: "apy",
        accessor: "apy",
        Cell: ({ value }) => (
          <>
            <span className="block text-xs">
              Daily:{" "}
              <LootPoolAPY apy={value} divisionCalculate={365} className="" />
            </span>
            <span className="block my-2 text-xs">
              Weekly:{" "}
              <LootPoolAPY apy={value} divisionCalculate={52} className="" />
            </span>
            <span className="block text-xs tag-indigos">
              Yearly:{" "}
              <LootPoolAPY apy={value} divisionCalculate={1} className="" />
            </span>
          </>
        ),
      },
      {
        Header: "Balance",
        id: "balance",
        accessor: "pool.address",
        Cell: ({ value }) => (
          <ERC20Balance address={value} trim={2} className="tag-green px-4" />
        ),
      },
      {
        Header: "Staked",
        id: "staked",
        accessor: "pid",
        Cell: ({ value }) => (
          <LootExpansionUniswapPoolStaked
            pid={value}
            className="tag-blue px-4"
          />
        ),
      },
      {
        Header: "Claimable",
        id: "earned",
        accessor: "pid",
        Cell: ({ value }) => (
          <LootExpansionUniswapPendingLoot
            pid={value}
            className="tag-orange px-4"
          />
        ),
      },
      // {
      //   Header: "Claimed",
      //   id: "claimed",
      //   accessor: "pid",
      //   Cell: ({ value }) => <LootExpansionUniswapClaimedLoot pid={value} />,
      // },
      {
        Header: "Actions",
        id: "actions",
        accessor: "symbol",
        Cell: ({ value, row }) => {
          return (
            <div className="flex justify-end pr-4">
              <LootExpansionUniswapDepositModal
                className="tag-green"
                pid={row.original.pid}
                tokenAddress={row.original.pool.address}
                name={row.original.name}
                token0={row.original.tokens[0]}
                token1={row.original.tokens[1]}
                apy={row.original.apy}
              />
              <LootExpansionUniswapWithdrawModal
                className="tag-blue ml-3"
                pid={row.original.pid}
                tokenAddress={row.original.pool.address}
                name={row.original.name}
                token0={row.original.tokens[0]}
                token1={row.original.tokens[1]}
                apy={row.original.apy}
              />
              <LootExpansionUniswapClaimButton
                className="tag-orange ml-3"
                pid={row.original.pid}
                tokenAddress={row.original.pool.address}
              />
            </div>
          );
        },
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

      <div className="bg-gray-100 border-solid border-t-2 border-white rounded-lg rounded-t-none px-3 py-3 shadow-md z-10">
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

export default LootExpansionUniswapPoolsTable;
