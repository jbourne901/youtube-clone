import React from 'react';
import './video-row.css';
import {IVideoRow} from "../../types/video";

interface IProps {
  video: IVideoRow;
}

const VideoRow = (props: IProps) => {
  const {image, title, channel, subs, views, timestamp, description} = props.video;
  return (
    <div className="video-row">
      <img  src={image} 
            alt="" 
            className="video-row-img"
      />
      <div className="video-row-text">
        <h3>{title}</h3>
        <p className="video-row-headline">
          {channel} • 
          <span className="video-row-subs">            
              <span className="video-row-subs-count">
                {subs}
              </span>
              Subscribers
          </span>
          {views} views • {timestamp}
        </p>
        <p className="video-row-description">{description}</p>
      </div>
    </div>
  );
}

export default VideoRow;

