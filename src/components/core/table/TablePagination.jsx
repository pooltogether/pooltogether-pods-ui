import classnames from "classnames";
import Spacer from "../common/Spacer";

/**
 * @name TablePagination
 * @param {Object} props
 */
export const TablePagination = ({
  className,
  canPreviousPage,
  canNextPage,
  pageOptions,
  pageIndex,
  pageSize,
  nextPage,
  previousPage,
  gotoPage,
  setPageSize,
  ...props
}) => {
  const containerClassName = classnames(
    "flex justify-between items-center w-full",
    className
  );
  const containerButton = classnames("text-xl mx-2 text-teal");

  return (
    <div className={containerClassName}>
      <div>
        <span className="mx-4">
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
      </div>
      <div>
        <button
          className={containerButton}
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
        >
          {"<<"}
        </button>{" "}
        <button
          className={containerButton}
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          {"<"}
        </button>{" "}
        <Spacer className="inline-block mx-4" />
        <button
          className={containerButton}
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          {">"}
        </button>{" "}
        <button
          className={containerButton}
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
        >
          {">>"}
        </button>{" "}
      </div>
      <div className="self-end">
        <select
          className="input-default text-gray-700"
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[5, 7, 10, 15, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default TablePagination;
