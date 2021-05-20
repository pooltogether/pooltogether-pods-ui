import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Spacer } from "../../src/components";

import {
  FormPodDepositToMultiple,
  FormPodWithdrawToMultiple,
  FormPodClaimPoolMultiple,
} from "@components/forms/pod";

/**
 * @name PageDeposit
 * @param {Object} props
 */
export const PageDeposit = (props) => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto py-20">
        <div className="text-center mb-10">
          <h2 className="font-thin text-4xl text-teal-600">Manage my funds</h2>
          <Spacer className="my-20" />
        </div>
        <div className="max-w-screen-sm mx-auto">
          <ManageTabs />
        </div>
      </div>
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
};

export default PageDeposit;

const ManageTabs = (props) => {
  const router = useRouter();
  const { tab, token } = router.query;
  const [tabIndex, setTabIndex] = useState(Number(tab));

  useEffect(() => {
    if (tab) {
      setTabIndex(Number(tab));
    } else {
      setTabIndex(0);
    }
  }, [tab]);

  if (process.browser) {
    return (
      <>
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className="grid grid-cols-3">
            <Tab>
              <ManageTab>
                <div className="">Deposit</div>
              </ManageTab>
            </Tab>
            <Tab>Withdraw</Tab>
            <Tab>Claim</Tab>
          </TabList>
          <Spacer className="my-20" />
          <div className="text-left text-white">
            <TabPanel>
              <FormPodDepositToMultiple defaultToken={token} />
            </TabPanel>
            <TabPanel>
              <FormPodWithdrawToMultiple defaultToken={token} />
            </TabPanel>
            <TabPanel>
              <FormPodClaimPoolMultiple defaultToken={token} />
            </TabPanel>
          </div>
        </Tabs>
      </>
    );
  }
  return null;
};

const ManageTab = ({ children, ...props }) => {
  return <div>{children}</div>;
};
