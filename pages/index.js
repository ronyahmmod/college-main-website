import Head from "next/head";
import Link from "next/link";
import Layout, { setTitle } from "../components/layout";
import SlideShow from "../components/slideShow";
import { FaFacebook } from "react-icons/fa";

const style = {
  affilitedItem:
    "flex flex-col border border-teal-700 rounded-lg p-4 border gap-4 align-center min-w-[300px]",
  label:
    "bg-teal-700 p-3 rounded-lg text-sm text-slate-50  hover:bg-teal-600 transition-all ease-linear uppercase text-center",
};

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{setTitle("Home")}</title>
      </Head>
      {/* START GB PRECIDENT SECTION  */}

      {/* AFFILIATED SUBJECTS */}
      <section className="flex flex-col  sm:p-32 p-4 pt-8 justify-center gap-8">
        <h1 className="text-center text-md md:text-2xl text-sky-600 uppercase underline tracking-wider">
          Affiliated Groups/Trades/Subjects
        </h1>
        <div className="flex flex-col sm:flex-row sm:p-6 p-4 justify-center gap-8">
          {[
            ["hsc general", ["science", "humanities", "business studies"]],
            ["hsc bm", ["computer operation", "human resource management"]],
            ["degree pass", ["ba", "bss", "bbs"]],
            ["honours", ["bangla", "political science"]],
            ,
            ["bou", ["HSC", "ba/bss"]],
          ].map(([course, groups], index) => (
            <div key={index} className={style.affilitedItem}>
              <div className={style.label}>{course}</div>
              {groups.map((group, index) => (
                <div
                  key={index}
                  className="bg-white divide-y divide-slate-200 uppercase text-center p-2"
                >
                  {group}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
