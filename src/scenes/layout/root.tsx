import { NavLink, Outlet } from "react-router-dom";
import ctf from "@/assets/logo.png";
import Footer from "../../scenes/footer";
import useMediaQuery from "../../hooks/useMediaQuery";
import { Icon } from "@iconify/react";
import { useState } from "react";

function Root() {
  const isAbove = useMediaQuery("(min-width: 1060px)");
  
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const [isCloseIcon, setIsCloseIcon] = useState<boolean>(false); // State to manage which icon to display

  const toggleMenu = () => {
    setIsMenuToggled(!isMenuToggled);
    setIsCloseIcon(!isCloseIcon); // Toggle between close and menu icon
  };

  const closeMenu = () => {
    setIsMenuToggled(false);
    setIsCloseIcon(false); // Toggle between close and menu icon
  };

  return (
    <div className="flex flex-col min-h-screen overflow-y-hidden ">
      <nav className="flex items-center justify-between py-3 shadow-sm shadow-white ">
        <div className="mx-auto w-full px-[7%] flex items-center justify-between">
          <NavLink to="/" className="flex items-center">
            <img src={ctf} className="w-10 h-auto mr-2 lg:w-12" alt="CTF Logo" />
            <h1 className="text-2xl md:text-xl lg:text-3xl">Crypto Trading Flow</h1>
          </NavLink>
          {isAbove ? (
            <div className="flex items-center justify-between ml-auto gap-7">
              <NavLink
                to="/"
                className="block px-3 py-1 rounded-full lg:py-3 lg:px-7 hover:bg-slate-300 hover:bg-opacity-30"
              >
                Home
              </NavLink>
              <NavLink
                to="HowToInstall"
                className="block px-3 py-1 rounded-full lg:py-3 lg:px-7 hover:bg-slate-300 hover:bg-opacity-30"
              >
                Getting Started
              </NavLink>
              <NavLink
                to="faq"
                className="block px-3 py-1 rounded-full lg:py-3 lg:px-7 hover:bg-slate-300 hover:bg-opacity-30"
              >
                FAQ
              </NavLink>
              <a
                href="https://discord.gg/fxNe2x8SCD"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-1 bg-indigo-500 rounded-full lg:py-3 lg:px-7 hover:bg-indigo-600"
              >
                Join Discord
              </a>
            </div>
          ) : (
            <div className="pt-1 transition duration-100 ">
              <button
                onClick={toggleMenu}
                className="transition duration-700"
              >
                <Icon
                  icon={
                    isCloseIcon
                      ? "line-md:menu-to-close-alt-transition"
                      : "line-md:close-to-menu-alt-transition"
                  }
                  width="2em"
                />
              </button>
              {/* MOBILE MENU */}
              {!isAbove && isMenuToggled && (
                <div className="fixed left-0 right-0 bg-zinc-950 z-50 flex flex-col items-center p-5 mt-3 space-y-5 transition duration-700 h-[50%] justify-center">
                  <NavLink
                    to="/"
                    className="block py-3 rounded-full px-7 hover:bg-slate-300 hover:bg-opacity-30"
                    onClick={() => closeMenu()}
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="HowToInstall"
                    className="block py-3 rounded-full px-7 hover:bg-slate-300 hover:bg-opacity-30"
                    onClick={() => closeMenu()}
                  >
                    Getting Started
                  </NavLink>
                  <NavLink
                    to="faq"
                    className="block py-3 rounded-full px-7 hover:bg-slate-300 hover:bg-opacity-30"
                    onClick={() => closeMenu()}
                  >
                    FAQ
                  </NavLink>
                  <a
                    href="https://discord.gg/fxNe2x8SCD"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-3 bg-indigo-500 rounded-full px-7 hover:bg-indigo-600"
                    onClick={() => closeMenu()}
                  >
                    Join Discord
                  </a>
                </div>
              )}
            </div>
          )}
        </div>
      </nav>
      <main className="flex-grow w-full md:px-[10%]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Root;
