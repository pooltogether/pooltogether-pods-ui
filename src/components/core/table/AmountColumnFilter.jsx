/**
 * @name AmountColumnFilter
 * @param {Object} props
 */
const AmountColumnFilter = ({
  column: { filterValue, preFilteredRows, setFilter },
}) => {
  const count = preFilteredRows.length;

  return (
    <input
      value={filterValue || ""}
      onChange={(e) => {
        setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
      }}
      placeholder={`USD ${count} Amount`}
    />
  );
};
export default AmountColumnFilter;
