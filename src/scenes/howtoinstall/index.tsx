import { Icon } from "@iconify/react";
import HowToInstallItems from "../../scenes/howtoinstall/hti";
import { Outlet } from "react-router-dom";
import wt from "@/assets/wt.png";
import useMediaQuery from "../../hooks/useMediaQuery";

const HowtoInstall = () => {
  const isAbove = useMediaQuery("(min-width: 1060px)");

  return (
    <div className="flex justify-center mx-auto items-center md:py-24 w-3/4">
      {isAbove ? (
        <>
          {/* Left Vertical Div */}
          <div className="p-4 rounded flex flex-col w-full">
            <h2 className="text-lg font-bold mb-2 border-b">
              Crypto Trading Bot Platform
            </h2>
            <div className="flex flex-col items-center">
              <div className="w-full border-b p-7 flex items-center">
                <img src={wt} alt="Wundertrading" className="w-10 mr-2" />
                <h2 className="text-lg title-font">Wundertrading</h2>
              </div>
            </div>
          </div>

          <div>
            <p className="mx-7 mt-7 flex flex-col justify-center items-center text-4xl font-thin">
              +
            </p>
          </div>

          {/* Right Vertical Div */}
          <div className="p-4 rounded flex flex-col w-full">
            {/* Title */}
            <h2 className="text-lg font-bold mb-2 border-b">
              Cryptocurrency Exchanges
            </h2>

            {/* Content */}
            <div className="flex flex-col items-center">
              {HowToInstallItems.slice(0, 3).map((item, index) => (
                <div key={index} className="w-full border-b p-7 flex items-center">
                  <Icon icon={item.icon} width="1.65em" className="mr-4" />
                  <h2 className="text-lg title-font">{item.title}</h2>
                  <button className="ml-auto">
                    <a
                      href={item.link}
                      className="flex text-black bg-gray-100 border-0 py-2 px-6 justify-center items-center focus:outline-none hover:bg-gray-200 rounded md:w-48 lg:w-64"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Setup Manual
                    </a>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="flex-col w-screen mt-7">
          {/* Left Vertical Div */}
          <div className="rounded flex flex-col w-full">
            <h2 className="text-lg  md:font-bold  border-b">
              Crypto Trading Bot Platform
            </h2>
            <div className="flex flex-col items-center">
              <div className="w-full border-b p-3 flex items-center justify-center ">
                <img src={wt} alt="Wundertrading" className="w-10 mr-2" />
                <h2 className="text-lg title-font">Wundertrading</h2>
              </div>
            </div>
          </div>

          <div>
            <p className="mx-7 my-3 flex flex-col justify-center items-center text-4xl font-thin">
              +
            </p>
          </div>

          {/* Right Vertical Div */}
          <div className="rounded flex flex-col w-full">
            {/* Title */}
            <h2 className="text-lg  md:font-bold mb-2 border-b">
              Cryptocurrency Exchanges
            </h2>

            {/* Content */}
            <div className="flex flex-col items-center">
              {HowToInstallItems.slice(0, 3).map((item, index) => (
                <div key={index} className="w-full border-b pt-3 pb-5 flex items-center">
                  <Icon icon={item.icon} width="1.65em" className="mr-4" />
                  <h2 className="text-lg title-font mr-4">{item.title}</h2>
                  <button className="ml-auto">
                    <a
                      href={item.link}
                      className="flex text-black bg-gray-100 border-0 py-2 px-6 justify-center items-center focus:outline-none hover:bg-gray-200 rounded w-full"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Setup Manual
                    </a>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      <Outlet />
    </div>
  );
};

export default HowtoInstall;
