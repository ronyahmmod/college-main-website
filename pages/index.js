import Head from "next/head";
import Layout, { setTitle } from "../components/layout";
import Slide from "../components/slide";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{setTitle("Home")}</title>
      </Head>
      <Slide
        slides={[
          {
            image: "images/image-1.jpg",
            caption: "This is the oldest building of this college.",
          },
          {
            image: "images/image-2.jpg",
            caption: "Arts building",
          },
          {
            image: "images/image-3.jpg",
            caption: "Science building",
          },
        ]}
      />
    </Layout>
  );
}
