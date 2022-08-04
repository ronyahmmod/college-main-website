import Head from "next/head";
import Navbar from "./navbar";

const siteTitle = "JDC";
export const setTitle = (title) => `${siteTitle} || ${title}`;

const style = {
  wrapper: "flex flex-[1] flex-col bg-slate-100 min-w-screen min-h-screen",
  main: "pt-[90px]",
};

export default function Layout({ children }) {
  return (
    <div className={style.wrapper}>
      <Head>
        <meta name="title" content="Jibannagar Degree College" />
        <meta name="description" content="Welcome to JDC" />
        <title>{siteTitle}</title>
        <link rel="icon" href="/college-logo.ico" />
      </Head>
      <header>
        <Navbar />
      </header>

      <main className={style.main}>{children}</main>
      <footer>{/* Footer is go here */}</footer>
    </div>
  );
}
