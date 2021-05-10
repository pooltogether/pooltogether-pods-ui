/**
 * @name
 * @param {Object} props
 */
export const TokenSingleValue = ({ innerProps, ...props }) => {
  return (
    <div
      {...innerProps}
      className="flex items-center p-2 cursor-pointer text-white"
    >
      <img src={props.data.image} width={22} />
      <span className="ml-2">{props.data.label}</span>
    </div>
  );
};
