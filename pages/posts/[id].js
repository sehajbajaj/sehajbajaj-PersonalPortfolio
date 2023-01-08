import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import dayjs from "dayjs";
import TagComponent from "../../components/tag";
import Head from "next/head";
import { NextSeo } from "next-seo";
import { seo } from "../../config";

export default function Post({ postData }) {
  const title = postData.title;
  const description = postData.summary;
  const url = `${seo.canonical}/posts/${postData.id}`;

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          title,
          description,
          url,
          type: "article",
          article: {
            publishedAt: postData.publishedAt,
            tags: postData.tags?.map((tag) => tag),
          },
        }}
      />

      <Layout>
        <Head>
          <link
            href={
              "https://unpkg.com/prism-theme-night-owl@1.4.0/build/style.css"
            }
            rel="stylesheet"
          />
        </Head>
        <div className="prose text-justify px-10 md:container md:mx-auto">
          <h1 className="text-center mt-6 text-5xl">{postData.title}</h1>
          <div className="flex flex-col items-center">
            <div className="text-base my-auto py-1">
              {postData.author} •{" "}
              {dayjs(postData.publishedAt).format("MMMM DD, YYYY")} •{" "}
              {postData.readingTime}
            </div>
            <div className="my-auto py-1">
              {postData.tags.map((tag) => {
                return <TagComponent key={tag}>{tag}</TagComponent>;
              })}
            </div>
          </div>
          <br />
          <div
            className="text-lg"
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          />
        </div>
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
