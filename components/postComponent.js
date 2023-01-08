import React from "react";
import NextLink from "next/link";
import TagComponent from "./tag";
import dayjs from "dayjs";

const PostComponent = ({ posts }) => {
  let year = 0;
  return (
    <>
      {posts.map((post) => {
        const { id, title, summary, tags, publishedAt } = post;
        const thisYear = publishedAt.substring(0, 4);

        const YearComponent = thisYear !== year && (
          <div className="text-accent-focus text-5xl font-bold">{thisYear}</div>
        );
        year = thisYear;

        return (
          <div className="my-3 py-1 px-4">
            {YearComponent}

            <div className="flex justify-between">
              <h3 className="text-3xl text-secondary-focus font-bold">
                <NextLink href={`/posts/${id}`}>
                  <a>{title}</a>
                </NextLink>
              </h3>
              <p className="text-lg font-semibold text-secondary">
                {dayjs(publishedAt).format("MMMM DD, YYYY")}
              </p>
            </div>

            <p className="text-lg font-normal py-1">{summary}</p>

            {tags.map((tag) => {
              return <TagComponent key={tag}>{tag}</TagComponent>;
            })}
          </div>
        );
      })}
    </>
  );
};

export default PostComponent;
