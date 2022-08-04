import Head from "next/head";
import Link from "next/link";
import Layout, { setTitle } from "../components/layout";
import SlideShow from "../components/slideShow";
import { FaFacebook } from "react-icons/fa";

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
      {/* START SECTION  */}
      <section className="min-h-screen max-w-screen bg-[url('/images/image-1.jpg')] bg-teal-900 flex py-32 sm:p-9 sm:flex-wrap flex-col-reverse md:flex-row justify-items-center gap-6">
        <div className="md:text-xl px-7 md:px-40 flex flex-col justify-center basis-[1/2] w-full sm:w-1/2 text-sm text-slate-200 bg-primary sm:bg-transparent sm:text-slate-800 p-3">
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
          <div className="bg-slate-50 h-[300px] rounded-md relative flex flex-col opacity-95 animate-fade">
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
                <a className="mt-6 uppercase flex gap-2 items-center bg-slate-300 px-3 py-1 rounded-md animate-pulse">
                  <FaFacebook className="text-teal-700" />
                  facebook
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
