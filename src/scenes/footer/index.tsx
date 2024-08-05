import { Icon } from "@iconify/react";
import useMediaQuery from "../../hooks/useMediaQuery";
import { NavLink } from "react-router-dom";

const Footer = () => {

  const isAbove = useMediaQuery("(min-width: 1060px)");

  return (
    <footer className="w-full body-font ">
       {isAbove ? (
        <>
      <div className="flex items-center px-5 mx-auto mb-4 sm:flex-row">
      <NavLink className="text-xs" to="/termsandconditions" >Terms and Conditions</NavLink>
        <span className="mx-3 opacity-30">|</span>
        <NavLink className="text-xs" to="/PrivacyPolicy">Privacy Policy</NavLink>
        <span className="inline-flex justify-center mt-4 sm:ml-auto sm:mt-0 sm:justify-start">
          <a href="https://t.me/cryptotradingflow"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-full">
            <Icon icon="pajamas:twitter" width="1.65em" className="mr-2 " />
          </a>
          <a href="https://t.me/cryptotradingflow"
                target="_blank"
                rel="noopener noreferrer"
                className="block ml-3 rounded-full">
            <Icon icon="bi:facebook" width="1.65em" className="mr-2 " />
          </a>
          <a href="https://t.me/cryptotradingflow"
                target="_blank"
                rel="noopener noreferrer"
                className="block ml-3 rounded-full">
            <Icon
              icon="teenyicons:instagram-solid"
              width="1.65em"
              className="mr-2 "
            />
          </a>
          <a href="https://discord.gg/wqjw4aZq"
                target="_blank"
                rel="noopener noreferrer"
                className="block ml-3 rounded-full">
            <Icon icon="simple-icons:discord" width="1.65em" className="mr-2 " />
          </a>
          <a href="https://t.me/cryptotradingflow"
                target="_blank"
                rel="noopener noreferrer"
                className="block ml-3 rounded-full">
            <Icon icon="mingcute:telegram-fill" width="1.65em" className="" />
          </a>
        </span>
      </div>
      </>
       ) : (
          <div className="w-screen">
            <span className="flex items-center justify-center my-4">
            <a href="https://t.me/cryptotradingflow"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-full">
              <Icon icon="pajamas:twitter" width="1.65em" className="mr-2 " />
            </a>
            <a href="https://t.me/cryptotradingflow"
                target="_blank"
                rel="noopener noreferrer"
                className="block ml-3 rounded-full">
              <Icon icon="bi:facebook" width="1.65em" className="mr-2 " />
            </a>
            <a href="https://t.me/cryptotradingflow"
                target="_blank"
                rel="noopener noreferrer"
                className="block ml-3 rounded-full">
              <Icon
                icon="teenyicons:instagram-solid"
                width="1.65em"
                className="mr-2 "
              />
            </a>
            <a href="https://discord.gg/wqjw4aZq"
                target="_blank"
                rel="noopener noreferrer"
                className="block ml-3 rounded-full">
              <Icon icon="ic:baseline-discord" width="1.65em" className="mr-2 " />
            </a>
            <a href="https://t.me/cryptotradingflow"
                target="_blank"
                rel="noopener noreferrer"
                className="block ml-3 rounded-full">
              <Icon icon="mingcute:telegram-fill" width="1.65em" className="" />
            </a>
          </span>
        <div className="bottom-0 flex items-center justify-center px-5 mx-auto">
          <NavLink className="text-xs" to="/termsandconditions" >Terms and Conditions</NavLink>
          <span className="mx-3 opacity-30">|</span>
          <NavLink className="text-xs" to="/PrivacyPolicy">Privacy Policy</NavLink>
        </div>
        </div>
       )}
    </footer>
  );
};

export default Footer;
