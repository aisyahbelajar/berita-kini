import React from "react";

interface Post {
  pubDate: string;
}

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const formatter = new Intl.DateTimeFormat("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  return formatter.format(date);
};

const PostComponent: React.FC<{ post: Post }> = ({ post }) => {
  return <p>{formatDate(post.pubDate)}</p>;
};

export default PostComponent;
