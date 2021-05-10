import { TokenImage } from "@src/components";

/* ------------------------------- */
/* ------- File Interfaces ------- */
/* ------------------------------- */
interface TokenOptionProps {
  label: string;
  data: Object;
  innerProps: Object;
}

/**
 * @name TokenOption
 * @param {Object} props
 */
export const TokenOption = ({ label, data, innerProps }: TokenOptionProps) => {
  return (
    <div
      {...innerProps}
      className="flex items-center p-2 cursor-pointer hover:bg-teal-300 hover:bg-opacity-20"
    >
      <img src={data.image} width={22} /> <span className="ml-2">{label}</span>
    </div>
  );
};
