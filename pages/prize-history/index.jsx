/* --- Global Modules --- */
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

/* --- Local Modules --- */
import { BalanceRender, Spacer } from "../../src/components";
import {
  AwardedControlledTokensGraphTable,
  PrizeHistoryTable,
} from "@components";

/**
 * @name PageDeposit
 * @param {Object} props
 */
export const PageDeposit = (props) => {
  return (
    <div className="py-20">
      <div className="text-center text-center mb-10">
        <h2 className="font-black text-4xl lg:text-6xl text-teal-600">
          Prize history
        </h2>
        <p className="text-1xl text-white">
          The logged history for all prizes won by pods. Check if your pod has
          won here.
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto">
        <ManageTabs />
      </div>
    </div>
  );
};

export default PageDeposit;

const ManageTabs = (props) => {
  const router = useRouter();
  const { tab } = router.query;
  const [tabIndex, setTabIndex] = useState(Number(tab));

  useEffect(() => {
    if (tab) {
      setTabIndex(Number(tab));
    }
    setTabIndex(0);
  }, [tab]);

  if (process.browser) {
    return (
      <>
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className="flex justify-center">
            <Tab>DAI</Tab>
            <Tab>USDC</Tab>
          </TabList>
          <Spacer className="my-10" />
          <div className="text-left text-white">
            <TabPanel>
              <TableHeader symbol="DAI" image="/tokens/token-dai.png" />
              <PrizeHistoryTable
                first={40}
                orderDirection="asc"
                underlyingCollateralSymbol="DAI"
                decimals={18}
                podAddress="0xaD104c86c0f9A05ed445F858CdE948fE7E0Bbac6"
                symbolColor="text-yellow-400"
              />
            </TabPanel>
            <TabPanel>
              <TableHeader symbol="USDC" image="/tokens/token-usdc.png" />
              <PrizeHistoryTable
                first={40}
                orderDirection="desc"
                underlyingCollateralSymbol="USDC"
                decimals={6}
                podAddress="0x4C8A84387A2ad7a85113e913fb650Def886DCc04"
                symbolColor="text-blue-400"
              />
            </TabPanel>
          </div>
        </Tabs>
        <style global jsx>{`
          div .react-tabs__tab {
            color: #fff;
            cursor: pointer;
            background: rgba(14, 163, 164, 0.3);
            border: 1px solid transparent;
            border-radius: 4px;
            padding: 8px 0;
            margin: 2px 10px;
            text-align: center;
            width: 120px;
          }

          div .react-tabs__tab--selected {
            color: #35f0d0;
            background: rgba(14, 163, 164, 0.4);
            border: 1px solid #0ea3a4;
            border-radius: 4px;
          }
        `}</style>
      </>
    );
  }
  return null;
};

const TableHeader = ({ symbol, image }) => {
  return (
    <div
      className="flex justify-center items-center text-center py-14 rounded-t-xl"
      style={{ backgroundColor: "#1f1236" }}
    >
      <img src={image} width={54} /> <Spacer className="mx-2" />
      <span className="font-bold text-5xl">{symbol} POOL</span>
    </div>
  );
};
