import { useToggle } from "@src/hooks/helpers/useToggle";
import { Popover } from "react-tiny-popover";
useToggle;

/**
 * @name Tooltip
 * @param {Object} props
 */
export const Tooltip = ({ children, label }) => {
  const [open, toggle] = useToggle();

  return (
    <Popover
      isOpen={open}
      align="center"
      padding={10}
      positions={["right", "left"]}
      onClickOutside={toggle}
      content={children}
    >
      <span onClick={toggle} className="cursor-pointer">
        {label ? (
          label
        ) : (
          <img className="inline-block" src="/images/info.png" width={12} />
        )}
      </span>
    </Popover>
  );
};

export default Tooltip;
