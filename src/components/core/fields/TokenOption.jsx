/**
 * @name
 * @param {Object} props
 */
export const TokenOption = ({ label, image, data, innerProps, ...props }) => {
  return (
    <div
      {...innerProps}
      className="flex items-center p-2 cursor-pointer hover:bg-teal-300 hover:bg-opacity-20"
    >
      <img src={data.image} width={22} /> <span className="ml-2">{label}</span>
    </div>
  );
};
