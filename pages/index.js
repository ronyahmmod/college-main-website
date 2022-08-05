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
      {/* START SLIDE SHOW */}
      <SlideShow
        slides={[
          {
            image: "images/fiftinth-aug.jpg",
            caption: "১৫ আগস্ট, ইতিহাসের কালো দিন।",
          },
          {
            image: "images/image-4.jpg",
            caption:
              "জাতীয় শিক্ষা সপ্তাহ-২০২২ এ বিভিন্ন ক্যাটেগরিতে সেরা হওয়া শিক্ষার্থীদের পুরস্কার বিতরণ অনুষ্টান",
          },
          {
            image: "images/image-5.jpg",
            caption: "সপ্নের পদ্মা সেতু উদ্বোধন উপলক্ষ্যে আলোচনা সভা",
          },
          {
            image: "images/image-6.jpg",
            caption:
              "কলেজের উপাধ্যক্ষ জনাব মোঃ জসীম উদ্দীন আহমেদ ভারপ্রাপ্ত অধ্যক্ষের দায়িত্ব পাওয়ায় কর্মচারীগণের পক্ষ থেকে ফুলেল শুভেচ্ছা প্রদান করা হয়।",
          },
          {
            image: "images/image-7.jpg",
            caption:
              "কলেজের উপাধ্যক্ষ জনাব মোঃ জসীম উদ্দীন আহমেদ ভারপ্রাপ্ত অধ্যক্ষের দায়িত্ব পাওয়ায় শিক্ষকগণের পক্ষ থেকে ফুলেল শুভেচ্ছা প্রদান করা হয়।",
          },
        ]}
      />

      {/* END SLIDE SHOW */}
      {/* START GB PRECIDENT SECTION  */}
      <section className="max-w-screen bg-[url('/images/image-2.jpg')] sm:mb-4 bg-teal-900 flex py-32 sm:py-48 sm:p-9 sm:flex-wrap flex-col-reverse sm:flex-row-reverse justify-items-center gap-6">
        <div className="md:text-xl px-7 md:px-12 flex flex-col justify-center basis-[1/2] w-full sm:w-1/2 text-sm text-slate-200 bg-primary sm:bg-slate-200 sm:text-sky-900 p-3 ">
          জীবননগর ডিগ্রি কলেজ জীবননগর উপজেলার একটি প্রাচীন শিক্ষা প্রতিষ্ঠান।
          শিক্ষা প্রতিষ্ঠানটি উপজেলার প্রাণকেন্দ্রে অবস্থিত। কলেজটিতে বৃহৎ
          ক্যাম্পাস রয়েছে। কলেজটির চারিদিকে সবুজ গাছ থাকায় একটি নির্মল পরিবেশ
          তৈরি হয়েছে। প্রশাসনিক কার্যক্রম ও অ্যাাকাডেমিক কার্যক্রম সুন্দরভাবে
          পরিচালনার জন্য রয়েছে দক্ষ জনবল। প্রতিবছর এ কলেজ থেকে শিক্ষার্থীরা
          উত্তীর্ণ হয়ে দেশের বিভিন্ন সেক্টরে আত্মনিয়োগ করছে। এ কলেজে সভাপতি
          হিসেবে দায়িত্ব পালন করার সুযোগ পাওয়ায় আমি গর্বিত । কলেজটিতে প্রশাসনিক
          কার্যক্রম আরোও সুন্দর ও দ্রুত সময়ে সম্পাদনের জন্য অনালাইনের মাধ্যমে
          সকল সার্ভিস প্রদানের উদ্যোগ গ্রহণ করেছে। এ কারণে আমি আনন্দিত। আমি
          কলেজটির উত্তরোত্তর মঙ্গল কামনা করি।
        </div>
        <div className="flex flex-col justify-center basis-[1/2]">
          <div className="py-4 bg-slate-50 rounded-md relative flex flex-col opacity-95">
            <div className="w-32 h-32 rounded-full flex justify-center mx-auto -translate-y-1/2 absolute right-1/2 left-1/2 -translate-x-1/2 z-50">
              <img
                src="/images/precident.jpg"
                alt="principal"
                className="h-32 w-32 rounded-full"
              />
            </div>
            <div className="mt-[90px] sm:p-6 flex justify-center flex-col items-center">
              <h1>MD. ABDUL HANNAN</h1>
              <h1>PRECIDENT,GOVERNING BODY</h1>
              <h1>JIBANNAGAR DEGREE COLLEGE</h1>
              <h1>JIBANNAGAR, CHUADAANGA</h1>
              <Link
                href="https://www.facebook.com/profile.php?id=100009941685274"
                target="_self"
              >
                <a className="mt-2 sm:mt-6 uppercase flex gap-2 items-center justify-center bg-slate-300 px-3 py-2 rounded-md animate-pulse text-center w-full">
                  <FaFacebook className="text-teal-700" />
                  facebook
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* END GB PRECIDENT */}

      {/* START SECTION  */}
      <section className="max-w-screen bg-[url('/images/image-1.jpg')] bg-teal-900 flex py-32 sm:py-48 sm:p-9 sm:flex-wrap flex-col-reverse md:flex-row justify-items-center gap-6">
        <div className="md:text-xl px-7 md:px-12 flex flex-col justify-center basis-[1/2] w-full sm:w-1/2 text-sm text-slate-200 bg-primary sm:bg-transparent sm:text-slate-800 p-3">
          জীবননগর ডিগ্রি কলেজ জীবননগর উপজেলার একটি প্রাচীন শিক্ষা প্রতিষ্ঠান। এ
          প্রতিষ্ঠানের সম্মানীত শিক্ষকগণ অত্যন্ত দক্ষ। তারা শিক্ষার্থীদের
          মানুষের মত মানুষ হিসেবে গড়ে ওঠার জন্য সুন্দর গাইড লাইন প্রদান করেন।
          অত্র কলেজের শিক্ষক, কর্মকর্তা, কর্মচারীগণের ঐকান্তিক প্রচেষ্টার ফলে আজ
          এই প্রতিষ্ঠানটি সুনামের সাথে তার শিক্ষা কার্যক্রম চালিয়ে যাচ্ছে।
          বর্তমানে উচ্চ মাধ্যমিক শাখা ছাড়াও স্নাতক (পাস), অনার্স কোর্সে বাংলা ও
          রাষ্ট্রবিজ্ঞান এবং উন্মুক্ত বিশ্ববিদ্যালয়ের অধীন উচ্চ মাধ্যমিক ও
          বিএ/বিএসএস কোর্স চালু রয়েছে। কলেজটিতে প্রশাসনিক কার্যক্রম আরোও সুন্দর
          ও দ্রুত সময়ে সম্পাদনের জন্য অনালাইনের মাধ্যমে সকল সার্ভিস প্রদানের
          উদ্যোগ গ্রহণ করেছে। এ কারণে আমি আনন্দিত এবং একইসাথে গর্বিত।
        </div>
        <div className="flex flex-col justify-center basis-[1/2]">
          <div className="py-4 bg-slate-50 rounded-md relative flex flex-col opacity-95">
            <div className="w-32 h-32 rounded-full flex justify-center mx-auto -translate-y-1/2 absolute right-1/2 left-1/2 -translate-x-1/2 z-50">
              <img
                src="/images/principal.jpg"
                alt="principal"
                className="h-32 w-32 rounded-full"
              />
            </div>
            <div className="mt-[90px] sm:p-6 flex justify-center flex-col items-center">
              <h1>MD. JASIM UDDIN AHMED</h1>
              <h1>PRINCIPAL (ACTING)</h1>
              <h1>JIBANNAGAR DEGREE COLLEGE</h1>
              <h1>JIBANNAGAR, CHUADAANGA</h1>
              <Link
                href="https://www.facebook.com/profile.php?id=100011428182261"
                target="_self"
              >
                <a className="mt-2 sm:mt-6 uppercase flex gap-2 items-center justify-center bg-slate-300 px-3 py-2 rounded-md animate-pulse text-center w-full">
                  <FaFacebook className="text-teal-700" />
                  facebook
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

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
