import Image from "next/image";
import { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const style = {
  wrapper:
    "w-screen md:w-full h-[90px] bg-teal-500 flex items-center text-slate-100 fixed",
  logoBox: "flex items-center ml-3 gap-4 grow text-2xl uppercase",
  logo: "w-12 h-12 md:w-[48px] md: h-[48px] rounded-full cursor-pointer",
  logoContainer: "w-12 h-12 md:w-[48px] md:h-[48px] rounded-full",
  menu: "hidden items-center gap-2 mr-4 sm:flex",
  menuItem:
    "uppercase cursor-pointer hover:text-slate-200 tracking-[.1em] hover:bg-teal-700 p-2 rounded-lg transition ease-in duration-300 hover:ease-out",
  menuIcon: "text-slate-100 w-[32px] h-[32px] cursor-pointer",
  mobileMenuContainer:
    "sm:hidden flex-col fixed top-0 right-0 bottom-0 max-w-[370px] w-[250px] bg-white z-auto align-center gap-4 px-2 py-3",
  mobileMenu: "flex flex-grow flex-col align-center gap-4 py-3 overflowX-auto",
  mobileMenuItem:
    "uppercase text-center cursor-pointer hover:text-slate-200 tracking-[.1em] hover:bg-teal-700 p-2 rounded-lg transition ease-in duration-300 hover:ease-out text-teal-700",
  hideMobileMenu: "hidden",
  displayMobileMenu: "flex",
};

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const resizeEventHandler = (event) => {
      if (window.innerWidth >= 634) setOpen(false);
    };
    window.addEventListener("resize", resizeEventHandler);
    return () => {
      window.removeEventListener("resize", resizeEventHandler);
    };
  });
  return (
    <div className={style.wrapper}>
      {/* NAVBAR */}
      <div className={style.logoBox}>
        {/* LOGO */}
        <div className={style.logoContainer}>
          <img
            src="/images/college-logo.png"
            alt="logo"
            className={style.logo}
          />
        </div>
        <div>
          <div>Jibannagar</div>
          <div>Degree College</div>
        </div>
      </div>
      {/* END LOGO */}

      {/* START NAV MENU */}
      <div className={style.menu}>
        {[
          "home",
          "history",
          "gb",
          "notice",
          "teachers/stuf",
          "students services",
          "teacher/stuf services",
          "results",
          "contact",
        ].map((menu) => (
          <div className={style.menuItem} key={menu}>
            {menu}
          </div>
        ))}
      </div>
      {/* END NAV MENU */}
      {/* TODO: DROP DOWN MENU */}
      {/* --------------------------------- */}

      {/* MENU ICON */}
      <div
        className="block sm:hidden mr-3 rounded-full bg-teal-700 hover:bg-teal-600 p-2"
        onClick={() => setOpen(true)}
      >
        <AiOutlineMenu className={style.menuIcon} />
      </div>
      {/* START MOBILE MENU */}
      <div
        className={
          style.mobileMenuContainer +
          " " +
          `${open ? style.displayMobileMenu : style.hideMobileMenu}`
        }
      >
        <div className="flex justify-end px-3">
          <div
            className="rounded-full bg-teal-600 p-2 hover:bg-teal-500 transition-all ease-in hover:ease-out delay-100 cursor-pointer"
            onClick={() => setOpen(false)}
          >
            <AiOutlineClose className="text-white" />
          </div>
        </div>
        <div className={style.mobileMenu}>
          {[
            "home",
            "history",
            "gb",
            "notice",
            "teachers/stuf",
            "students services",
            "teacher/stuf services",
            "results",
            "contact",
          ].map((menu) => (
            <div className={style.mobileMenuItem} key={menu}>
              {menu}
            </div>
          ))}
        </div>

        <div className="text-teal-700 text-center px-3 text-sm">
          &copy; {new Date().getFullYear()} JIBANNAGAR DEGREE COLLEGE. DEVELOPED
          & MAINTAINED BY{" "}
          <a className="hover:underline" href="https://ronyahmmod.com">
            ENG MD. RONY AHMMOD
          </a>
        </div>
      </div>

      {/* END MOBILE MENU */}
    </div>
  );
}
