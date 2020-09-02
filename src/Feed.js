import React from "react";
import "./Feed.css";

import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";

const Feed = () => {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        profilePic="https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg"
        message="My first post"
        timestamp="My timestamp"
        username="Janusyz"
        image="https://upload.wikimedia.org/wikipedia/commons/4/42/Shaqi_jrvej.jpg"
      />
      <Post
        profilePic="https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg"
        message="My first post"
        timestamp="My timestamp"
        username="Janusyz"
        image="https://upload.wikimedia.org/wikipedia/commons/8/8f/Bachalpsee_reflection.jpg"
      />
      <Post
        profilePic="https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg"
        message="My first post"
        timestamp="My timestamp"
        username="Janusyz"
        image="https://upload.wikimedia.org/wikipedia/commons/8/8f/Bachalpsee_reflection.jpg"
      />
    </div>
  );
};

export default Feed;
