/**
 * @name LoadingBox
 * @param {Object} props
 */
export const LoadingBox = ({ title, label }) => {
  return (
    <div className='card flex-center flex-col p-10 max-w-7xl max-w-xl relative'>
      <span>
        <svg
          className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
          xmlns='http://www.w3.org/2000/svg'
          fill='#000'
          viewBox='0 0 24 24'
        >
          <circle
            className='opacity-25'
            cx='12'
            cy='12'
            r='10'
            stroke='#000'
            strokeWidth='4'
          ></circle>
          <path
            className='opacity-75'
            fill='#000'
            d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
          ></path>
        </svg>
      </span>
      <div className='text-xl pb-3 text-center mt-4'>
        <h3 className='block text-xl'>{title}</h3>
        {label && <span className='text-sm'>{label}</span>}
      </div>
    </div>
  )
}

LoadingBox.defaultProps = {
  title: 'Loading',
  label: 'Fetching Data'
}

export default LoadingBox
