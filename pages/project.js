import Layout from "../components/layout";
import React, { useState } from "react";
import { getSortedPostsData } from "../lib/posts";
import PostComponent from "../components/postComponent";
import { NextSeo } from "next-seo";
import { seo } from "../config";

const Project = ({ allPostsData }) => {
  const [post, setPost] = useState(allPostsData);

  const title = "Projects";
  const description = seo.description;
  const url = `${seo.canonical}/projects`;

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
        }}
      />

      <Layout>
        <br />
        <br />
        {post.length > 0 ? (
          <PostComponent posts={post} />
        ) : (
          <div className="alert alert-error shadow-lg mt-5">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current flex-shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>No post has been found!</span>
            </div>
          </div>
        )}
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default Project;
