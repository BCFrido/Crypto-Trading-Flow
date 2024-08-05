import { TypeAnimation } from "react-type-animation";
import logo from "@/assets/logo.png";
import { Icon } from "@iconify/react";
import wt from "@/assets/wt.png";
import wtblack from "@/assets/wt_black.png";
import { Outlet } from "react-router-dom";
import useMediaQuery from "../../hooks/useMediaQuery";

const Home = () => {
  const isAbove = useMediaQuery("(min-width: 1060px)");

  return (
    <div className="">
      {/* Large Screen View */}
      {isAbove ? (
        <div className="w-full flex justify-between py-6 lg:py-24">
          {/* Left Container */}
          <div className="w-1/2 flex flex-col items-start text-left">
            <h1 className="title-font text-6xl lg:text-8xl mb-4">Automated Trading Bots</h1>
            <p className="md:text-xl lg:text-2xl mb-8 leading-relaxed">
              <TypeAnimation
                sequence={[
                  "Your Path to Passive Income.",
                  1000,
                  "Automate Your Trades, Amplify Your Gains.",
                  1000,
                  "Bots Do the Work, You Reap the Rewards.",
                  1000,
                  "Effortless Investing, Maximum Returns.",
                  1000,
                  "Next-Gen Trading for Savvy Investors.",
                  1000,
                  "Stay Ahead with Automated Trades.",
                  1000,
                  "Set, Forget, and Profit.",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ display: "inline-block" }}
                repeat={Infinity}
              />
            </p>

            <div className="flex flex-col">
              <p className="text-sm mb-3 w-full">Platforms</p>
              <button className="bg-black inline-flex md:py-1 lg:py-2 border border-white px-3 w-48 rounded-lg items-center hover:bg-gray-200 hover:text-black focus:outline-none mb-8 group">
                <a
                  href="https://wundertrading.com/en/trader/register?ref=wbt82e47df7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center w-full"
                >
                  <img
                    src={wt}
                    className="w-8 transition-opacity duration-300 opacity-100 group-hover:opacity-0"
                    alt="WunderTrading"
                  />
                  <img
                    src={wtblack}
                    alt="WunderTrading"
                    className="absolute w-8 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                  />
                  <span className="flex items-center justify-center">
                    <p className="md:flex md:text-sm lg:text-base ml-1">WunderTrading</p>
                  </span>
                </a>
              </button>
              <p className="text-sm mb-3 w-full">Exchanges</p>
              <button className="bg-black inline-flex md:py-2 lg:py-3 px-4 w-48 border border-white rounded-lg items-center hover:bg-gray-200 hover:text-black focus:outline-none mb-8 mr-3">
                <a
                  href="https://accounts.binance.com/register?ref=DWHURPU7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center w-full"
                >
                  <Icon
                    icon="simple-icons:binance"
                    width="1.5em"
                    className="mr-2"
                  />
                  <div className="md:text-sm lg:text-base">Binance</div>
                </a>
              </button>
            </div>
            <p className="text-sm mb-3 w-full">Supported Currencies</p>
            <button className="bg-black border border-white inline-flex md:py-2 lg:py-3 px-4 w-48 rounded-lg items-center cursor-default mb-8 mr-3">
              <Icon
                icon="akar-icons:bitcoin-fill"
                width="1.5em"
                className="mr-2 text-white"
              />
              <div className="text-white">Bitcoin</div>
            </button>
          </div>

          {/* Right Container */}
          <div className="flex self-center">
            <img
              className="object-cover object-center rounded-full max-w-full max-h-full"
              alt="Crypto Trading Flow"
              src={logo}
            />
          </div>
        </div>
      ) : (
        <>
          {/* Small Screen View */}
          <section className="flex flex-col justify-between text-center min-h-screen mt-7">
            <h1 className="title-font text-6xl xs:text-7xl sm:text-9xl mb-7">Automated Trading Bots</h1>
            <p className="text-xl mb-6 leading-relaxed xs:text-3xl px-5">
              <div className="h-9 xs:h-3 pb-7">
                <TypeAnimation
                  sequence={[
                    "Your Path to Passive Income.",
                    1000,
                    "Automate Your Trades, Amplify Your Gains.",
                    1000,
                    "Bots Do the Work, You Reap the Rewards.",
                    1000,
                    "Effortless Investing, Maximum Returns.",
                    1000,
                    "Next-Gen Trading for Savvy Investors.",
                    1000,
                    "Stay Ahead with Automated Trades.",
                    1000,
                    "Set, Forget, and Profit.",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ display: "inline-block" }}
                  repeat={Infinity}
                />
              </div>
            </p>

            <div className="self-center pb-24">
              <img
                className="object-cover object-center rounded max-w-full max-h-full"
                alt="Crypto Trading Flow"
                src={logo}
              />
            </div>
          </section>

          <section className="flex flex-col pb-12 px-12 w-full">
            <div className="border-l p-3 mb-12">
      <p className="title-font text-2xl mb-6 w-full">Platforms</p>
      <button className="bg-white inline-flex py-4 px-2 w-full rounded-lg items-center mb-6 group">
        <a
          href="https://wundertrading.com/en/trader/register?ref=wbt82e47df7"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center w-full"
        >
          <img
            src={wtblack}
            alt="WunderTrading"
            className="w-16"
          />
          <span className="flex items-center justify-center">
            <p className="flex text-black text-2xl">WunderTrading</p>
          </span>
        </a>
      </button>
      </div>
      <div className="border-l p-3 mb-12">
      <p className="title-font text-2xl mb-6 w-full right-0">Exchanges</p>
      <button className="bg-white inline-flex py-6 px-4 w-full rounded-lg items-center mb-6 mr-3">
        <a
          href="https://accounts.binance.com/register?ref=DWHURPU7"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center w-full"
        >
          <Icon
            icon="simple-icons:binance"
            width="3em"
            className="mr-2 text-black"
          />
          <div className="text-2xl text-black">Binance</div>
        </a>
      </button>
      </div>
      <div className="border-l p-3 mb-12">
      <p className="title-font text-2xl mb-6 w-full">Supported Currencies</p>
      <button className="bg-white inline-flex py-6 px-4 w-full rounded-lg items-center cursor-default mb-6 mr-3">
        <Icon
          icon="akar-icons:bitcoin-fill"
          width="3em"
          className="mr-2 text-black"
        />
        <div className="text-2xl text-black">Bitcoin</div>
      </button>
      </div>
</section>


        </>
      )}
      <Outlet />
    </div>
  );
};

export default Home;
