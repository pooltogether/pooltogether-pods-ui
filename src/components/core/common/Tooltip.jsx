import classnames from "classnames";
import { useToggle } from "@src/hooks/helpers/useToggle";
import { Popover } from "react-tiny-popover";

/**
 * @name Tooltip
 * @param {Object} props
 */
export const Tooltip = ({ className, children, label }) => {
  const [open, toggle] = useToggle();

  const tooltipClasses = classnames("cursor-pointer inline-flex", className);

  return (
    <Popover
      isOpen={open}
      align="center"
      padding={10}
      positions={["right", "left"]}
      onClickOutside={toggle}
      content={children}
    >
      <span onClick={toggle} className={tooltipClasses}>
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
