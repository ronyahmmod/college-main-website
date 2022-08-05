import React from "react";
import Layout, { setTitle } from "../components/layout";
import Head from "next/dist/shared/lib/head";

const Contact = () => {
  return (
    <Layout>
      <Head>
        <title>{setTitle("Contuct Us")}</title>
      </Head>

      <section className="p-3 sm:p-32 flex justify-center flex-col items-center gap-4 my-32 sm:my-10">
        <h1 className="text-2xl bg-teal-500 p-2 hover:skew-y-2 text-slate-50 uppercase rounded-2xl transition-all shadow-lg ease-linear animate-pulse">
          Contact with us
        </h1>

        <div className="max-w-screen md:max-w-[50%] overflow-x-auto">
          <table className="table-auto border-collapse border border-slate-200">
            <caption className="text-xl my-2">
              In order to contact with us please see the information.
            </caption>
            {/* <thead>
              <tr>
                <th>Address</th>
              </tr>
            </thead> */}
            <tbody>
              <tr className="border">
                <td className="border p-3">Address</td>
                <td className="border p-3">
                  Shapla Koli Para, Word No-07, Post Office: Jibannagar-7230,
                  Jibannagar Pouroshova, Upazila-Jibannagar, District-Chuadanga,
                  Division: Khulna.
                </td>
              </tr>
              <tr className="border">
                <td className="border p-3">Telephone</td>
                <td className="border p-3">(+88)07624-75047</td>
              </tr>
              <tr className="border">
                <td className="border p-3">Email</td>
                <td className="border p-3">jdcjibannagar@gmail.com</td>
              </tr>
              <tr className="border">
                <td className="border p-3">EIIN</td>
                <td className="border p-3">115461</td>
              </tr>
              <tr className="border">
                <td className="border p-3">Principal</td>
                <td className="border p-3">Md. Jasim Uddin Ahmed</td>
              </tr>
              <tr className="border">
                <td className="border p-3">Principal Mobile Number</td>
                <td className="border p-3">+8801715-684742</td>
              </tr>
              <tr className="border">
                <td className="border p-3">Computer Operator</td>
                <td className="border p-3">Md. Rony Ahmmod</td>
              </tr>
              <tr className="border">
                <td className="border p-3">Computer Operator Mobile Number</td>
                <td className="border p-3">+8801914-090085</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
