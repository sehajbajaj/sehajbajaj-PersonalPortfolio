import Layout from "../components/layout";
import { NextSeo } from "next-seo";
import { seo } from "../config";

export default function Home() {
  const title = "Home";
  const description = seo.description;

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={seo.canonical}
        openGraph={{
          title,
          description,
          images: [
            {
              url: `${seo.canonical}/images/avataaars.png`,
              width: "350px",
              height: "350px",
              alt: "avatar",
            },
          ],
        }}
      />
      <Layout home></Layout>
    </>
  );
}
