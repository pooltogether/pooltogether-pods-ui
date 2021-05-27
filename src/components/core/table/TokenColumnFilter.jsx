/**
 * @name TokenColumnFilter
 * @param {Object} props
 */
const TokenColumnFilter = ({ column: { filterValue, preFilteredRows, setFilter }, ...props }) => {
  const sortingRows = (value) => {
    setFilter(value || undefined) // Set undefined to remove the filter entirely
  }

  return (
    <>
      <input
        className={styles.tokenFilter}
        value={filterValue || ''}
        onChange={(e) => sortingRows(e.target.value)}
        placeholder={`Token Sent`}
      />
      <input
        className={styles.tokenFilter}
        value={filterValue || ''}
        onChange={(e) => {
          setFilter(e.target.value || undefined) // Set undefined to remove the filter entirely
        }}
        placeholder={`Token Recieved`}
      />
    </>
  )
}

export default TokenColumnFilter
