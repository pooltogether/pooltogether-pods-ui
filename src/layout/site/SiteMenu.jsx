import Link from "next/link";

/**
 * @name SiteMenu
 * @param {Object} props
 */
export const SiteMenu = (props) => {
  return (
    <div className="grid grid-cols-3 gap-x-4 my-3">
      <Link href="/deposit">
        <a className="text-sm text-teal-300 hover:text-teal-600 font-medium text-center">
          Deposit
        </a>
      </Link>
      <Link href="/prize-history">
        <a className="text-sm text-teal-300 hover:text-teal-600 font-medium text-center">
          Prize History
        </a>
      </Link>
    </div>
  );
};
export default SiteMenu;
