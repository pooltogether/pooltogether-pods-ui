import { TokenImage } from '@src/components'

/* ------------------------------- */
/* ------- File Interfaces ------- */
/* ------------------------------- */
interface TokenOptionProps {
  data: {
    image: string
    value: string
  }
  innerProps: Object
}

/**
 * @name
 * @param {Object} props
 */
export const TokenSingleValue = ({ innerProps, data, ...props }: TokenOptionProps) => {
  return (
    <div {...innerProps} className='flex items-center p-2 cursor-pointer text-white'>
      <img src={data.image} width={22} />
      <span className='ml-2'>{data.label}</span>
    </div>
  )
}
