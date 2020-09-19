import React from 'react';
import './recommended-videos.css';
import VideoCard from "../video-card";
import IVideo from "../../types/video";

const RecommendedVideos = () => {
  const v1: IVideo = {
    title: "Become a web developer in 10 minutes | 2019/2020",
    views: "2.3M Views",
    timestamp: "3 days ago",
    channel: "Chris Sean",
    image: "https://i.ytimg.com/vi/UaB_FtsdlYk/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLAk4vDJdxYSGCF9Bw0fhMLut7k5lA",
    channelImage: "https://yt3.ggpht.com/a/AATXAJwZb7ISkj4HCUqig8ffgXasADOPIFnla1ZPHcl73Q=s88-c-k-c0xffffffff-no-rj-mo"
  };

  const v2: IVideo = {
    title: "Become a web developer in 10 minutes | 2019/20205 uses for Cloud Functions | Get to know Cloud Firestore #12",
    views: "10,812 views",
    timestamp: "Premiered Jul 29, 2020",
    channel: "Firebase",
    image: "https://i.ytimg.com/vi/6NegFl9p_sE/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLBu7X46C4vTXRyN3Uv4XvbL6ANkmQ",
    channelImage: "https://yt3.ggpht.com/a/AATXAJy6miqWZBH_MHS3hyOTL5fg_SmYxu5bzt1myibk6w=s88-c-k-c0xffffffff-no-rj-mo"
  };

  const v3: IVideo = {
    title: "WHETHER WE LIKE IT OR NOT",
    views: "156,366 views",
    timestamp: "Jul 29, 2020",
    channel: "Christian Guzman",
    image: "https://i.ytimg.com/vi/dBkiZV6g420/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLDO1YsX5wGsG_xj0d5Oar7ihMgpTg",
    channelImage: "https://yt3.ggpht.com/a/AATXAJxTcyC0gXq6OAi10gPDE51KiTDpzJvayEAEgd7oKA=s88-c-k-c0xffffffff-no-rj-mo"
  };

  const v4: IVideo = {
    title: "Elon Musk Says Teslas Are Too Expensive",
    views: "170,853 views",
    timestamp: "Jul 29, 2020",
    channel: "LaterClips",
    image: "https://i.ytimg.com/vi/bisyZJ-VCkc/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLA541oENAhacfn7h4PESTZSv8f_fw",
    channelImage: "https://yt3.ggpht.com/a/AATXAJzvbI9ffQr56zl8U8Z5jTUd2RCbVgP0QQIClOJ9=s88-c-k-c0xffffffff-no-rj-mo"
  };

  const v5: IVideo = {
    title: "The truth about OnePlys Nord!",
    views: "3M views",
    timestamp: "1 month ago",
    channel: "Marques Brownlee",
    image: "https://i.ytimg.com/vi/Xzh8BdaaAvs/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLCD9Jot2YCmRraWKEXzC3lIAeGLjw",
    channelImage: "https://yt3.ggpht.com/a/AATXAJxuvwdB2H7bQQyQk8Aqu28rYXWmz_WJWjbwgcBD=s88-c-k-c0xffffffff-no-rj-mo"
  };
  

  return (
    <div className="recommended-videos">
      <h2 className="recommended-videos-header">Recommended Videos</h2>
      <div className="recommended-videos-videos">
        <VideoCard video={v1} />
        <VideoCard video={v2} />
        <VideoCard video={v3} />
        <VideoCard video={v4} />
        <VideoCard video={v5} />
      </div>
    </div>
  );
}

export default RecommendedVideos;
