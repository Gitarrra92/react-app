import React from "react";
import "./StoryReel.css";
import Story from "./Story";

const StoryReel = () => {
  return (
    <div className="storyReel">
      <Story
        title="Janusz"
        profileSrc="https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg"
        image="https://upload.wikimedia.org/wikipedia/commons/8/8f/Bachalpsee_reflection.jpg"
      />
      <Story
        title="Andrzej"
        profileSrc="https://upload.wikimedia.org/wikipedia/commons/a/a0/Andrzej_Person_Kancelaria_Senatu.jpg"
        image="https://upload.wikimedia.org/wikipedia/commons/8/89/Expn7398_%2839695069782%29.jpg"
      />
      <Story
        title="Janusz"
        profileSrc="https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg"
        image="https://upload.wikimedia.org/wikipedia/commons/8/8f/Bachalpsee_reflection.jpg"
      />
      <Story
        title="Andrzej"
        profileSrc="https://upload.wikimedia.org/wikipedia/commons/a/a0/Andrzej_Person_Kancelaria_Senatu.jpg"
        image="https://upload.wikimedia.org/wikipedia/commons/8/89/Expn7398_%2839695069782%29.jpg"
      />
      <Story
        title="Janusz"
        profileSrc="https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg"
        image="https://upload.wikimedia.org/wikipedia/commons/8/8f/Bachalpsee_reflection.jpg"
      />
    </div>
  );
};

export default StoryReel;
