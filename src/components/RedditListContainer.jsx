import React from "react";
import RedditListItem from "./RedditListItem";

function RedditListContainer(props) {
  const { posts } = props;
  return (
    <div className="reddit-list">
      {posts.map((post, index) => {
        return (
          <RedditListItem
            title={post.data.title}
            id={post.data.id}
            thumbnail={post.data.thumbnail}
            name={post.data.subreddit_name_prefixed}
            url={`https://www.reddit.com/${post.data.permalink}`}
            key={index}
          />
        );
      })}
    </div>
  );
}

export default RedditListContainer;
