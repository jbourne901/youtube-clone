import React  from 'react';
import {TuneOutlined} from "@material-ui/icons";
import './search-page.css';
import ChannelRow from "../channel-row";
import VideoRow from "../video-row";
import {IVideoRow} from "../../types/video";

const SearchPage = () => {
  const v1: IVideoRow = {
    views: "1.4M",
    subs: "659K",
    description: "Do you want a FREE one hour training... check out now",
    timestamp: "59 seconds ago",
    channel: "Clever Programmer",
    title: "Let's build a Youtube clone with REACT JS ",
    image: "https://i.ytimg.com/vi/NT299zIk2JY/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLBaOzBVVqEKF-03ghz5YaunELWCGQ"
  };

  return (
    <div className="search-page">
      <div className="search-page-filter">
        <TuneOutlined />
        <h2 className="search-page-header">FILTER</h2>
      </div>
      <hr />
      <ChannelRow 
        image="https://yt3.ggpht.com/a/AATXAJydjgDHqK3vz4iHkrPZjHSsjwh1aPsqOwxHCZ_ISA=s176-c-k-c0x00ffffff-no-rj"
        channel="Clever Programmer"
        verified={true}
        subs="659K"
        noOfVideos={382}
        description="You can find awesome videos here"
      />
      <hr />
      <VideoRow video = {v1} />
    </div>
  );
}

export default SearchPage;
