import Link from "next/link";
import { Spacer } from "../src/components/";

/**
 * @name HomePage
 * @param {Object} props
 */
const HomePage = (props) => {
  return (
    <>
      <HeroSection />
    </>
  );
};

const HeroSection = (props) => {
  return (
    <div className="px-6 pb-40 pt-40 flex flex-col min-h-screens text-teal relative shadow-lg z-10">
      <div className="absolute inset-y-0 right-0 w-full opacity-10 z-0"></div>
      <div className="flex-col flex-center flex-1 py-1 mt-12 relative z-10">
        <div className="mb-10">
          <div className="text-center">
            <h2 className="font-black text-3xl lg:text-5xl text-teal">
              Play Together, Win Together
            </h2>
            <p className="text-xl text-teal">
              PowerPod is a low gas fee deposit pod built on PoolTogether
              protocol. <br /> The pod helps increase winning chances and lower
              gas fee for <br /> individual player using batched deposits.
            </p>
            <Spacer className="my-4" />
            <Link href="/deposit">
              <button className="btn btn-teal btn-large uppercase px-6">
                Deposit In A Pod
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
