import Link from "next/link";
import { FaMailBulk, FaPhone, FaFacebookF, FaYoutube } from "react-icons/fa";

const style = {
  link: "text-slate-200 hover:underline uppercase text-sm transition-all ease-in-out",
  linkContainer: "flex flex-col gap-3 p-4",
};

export default function Footer() {
  return (
    <div className="bg-black flex justify-around sm:flex-row flex-col min-h-[90px] p-3 sm:p-32 text-slate-50 sm:divide-x items-center gap-7">
      {/* LINK PART */}
      <div className="flex flex-col sm:flex-row">
        <div className={style.linkContainer}>
          {[
            ["home", "/"],
            ["history", "/history"],
            ["gb", "/gb"],
            ["notice", "/notice"],
          ].map(([menu, href], index) => (
            <Link href={href} key={index}>
              <a className={style.link}>{menu}</a>
            </Link>
          ))}
        </div>
        <div className={style.linkContainer}>
          {[
            ["students services", "https://app1.jibannagardegreecollege.com/"],
            [
              "teacher/stuf services",
              "https://app2.jibnannagardegreecollege.com/",
            ],
            ["results", "/results"],
            ["contact", "/contact"],
          ].map(([menu, href], index) => (
            <Link href={href} key={index}>
              <a className={style.link}>{menu}</a>
            </Link>
          ))}
        </div>
      </div>
      {/* END LINK PART */}
      {/* START CONTACT PART */}

      <div className="flex flex-col p-2 gap-2 uppercase items-center justify-center sm:pl-11">
        <h1 className="flex items-center gap-2">
          <FaMailBulk />
          jdcjibannagar@gmail.com
        </h1>
        <h1 className="flex items-center gap-2">
          <FaPhone />
          +8807624-75047
        </h1>
        <h1 className="flex items-center gap-2">
          <FaFacebookF />
          <Link href="https://facebook.com/jdcjc2016">
            <a>jdcjc2016</a>
          </Link>
        </h1>
        <h1 className="flex items-center gap-2">
          <FaFacebookF />
          <Link href="https://www.youtube.com/channel/UC5YJMQ-uXpuAUHcF80wfErg">
            <a>jdc online class room</a>
          </Link>
        </h1>
        <h1 className="flex items-center gap-2">EIIN: 115461</h1>
        <h1 className="flex items-center gap-2">NU CODE: 0807</h1>
        <h1 className="flex items-center gap-2">BM CODE: 29029</h1>
      </div>
      {/* END CONTACT */}

      {/* START MAP */}
      <div>{/* TODO MAP IMPLEMET */}</div>

      {/* DEVELOPER */}
      <div className="flex flex-col p-4 items-center">
        <h1>&copy; {new Date().getFullYear()} JIBANNAGAR DEGREE COLLEGE</h1>
        <h1>
          DEVELOPER:{" "}
          <Link href="https://www.ronyahmmod.com">
            <a className="hover:underline">MD. RONY AHMMOD</a>
          </Link>
        </h1>
      </div>
    </div>
  );
}
