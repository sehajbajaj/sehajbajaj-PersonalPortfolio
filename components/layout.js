import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Header from "./header";
import Footer from "./footer";

const name = "Sehajpreet Kaur";
export const siteTitle = "Personal Portfolio";

const Layout = ({ children, home }) => {
  return (
    <div className="container lg:max-w-7xl md:max-w-3xl mx-auto">
      <Head>
        <link rel="icon" href="/favicon/favicon.ico" />
        <meta
          name="description"
          content="Sehajpreet Kaur - Personal Portfolio"
        />
        {/* <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        /> */}
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header />
      {home ? (
        <div className="grid justify-items-center p-2">
          <Image
            priority
            src="/images/avataaars.png"
            className=""
            height={200}
            width={200}
            alt=""
          />
          <h1 className="text-4xl font-semibold p-4">Hi, I'm {name} 👋🏻</h1>
          <p className="text-xl indent-8 text-center font-medium leading-relaxed mt-4">
            A third-year engineering student pursuing a bachelor's degree in
            Computer Science from Guru Tegh Bahadur Institute of Technology
            (GGSIPU). Presently, my tech stack revolves around Full-Stack web
            development, making it my preferred area of specialization.❤️
          </p>
        </div>
      ) : (
        <></>
      )}
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
