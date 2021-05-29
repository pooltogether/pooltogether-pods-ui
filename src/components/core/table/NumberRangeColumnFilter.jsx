/**
 * @name NumberRangeColumnFilter
 * @param {Object} props
 */
export const NumberRangeColumnFilter = ({
  column: { filterValue = [], preFilteredRows, setFilter, id }
}) => {
  const [min, max] = useMemo(() => {
    let min = preFilteredRows.length ? preFilteredRows[0].values[id] : 0
    let max = preFilteredRows.length ? preFilteredRows[0].values[id] : 0
    preFilteredRows.forEach((row) => {
      min = Math.min(row.values[id], min)
      max = Math.max(row.values[id], max)
    })
    return [min, max]
  }, [id, preFilteredRows])

  return (
    <div className={styles.filterRange}>
      <input
        value={filterValue[0] || ''}
        type='number'
        onChange={(e) => {
          const val = e.target.value
          setFilter((old = []) => [val ? Number(val) : undefined, old[1]])
        }}
        placeholder={`Min`}
      />
      <input
        value={filterValue[1] || ''}
        type='number'
        onChange={(e) => {
          const val = e.target.value
          setFilter((old = []) => [old[0], val ? Number(val) : undefined])
        }}
        placeholder={`Max`}
      />
    </div>
  )
}
export default NumberRangeColumnFilter
