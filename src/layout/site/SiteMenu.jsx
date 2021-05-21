import Link from "next/link";

/**
 * @name SiteMenu
 */
export const SiteMenu = () => {
  return (
    <div className="grid grid-cols-3 gap-x-4 my-3">
      <Link href="/deposit">
        <a className="text-sm text-teal-300 hover:text-teal-600 font-medium text-center">
          Deposit
        </a>
      </Link>
      <Link
        href={`/manage?tab=0&token=0xaD104c86c0f9A05ed445F858CdE948fE7E0Bbac6`}
      >
        <a className="text-sm text-teal-300 hover:text-teal-600 font-medium text-center">
          Manage
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
