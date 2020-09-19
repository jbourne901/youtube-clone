import React from 'react';
import './video-card.css';
import IVideo from '../../types/video';
import {Avatar} from "@material-ui/core";

interface IProps {
  video: IVideo;
}
const VideoCard = (props: IProps) => {
  return (
    <div className="video-card">
      <img  src={props.video.image} 
            alt="" 
            className="video-card-img"
      />
      <div className="video-card-info">
        <Avatar className="video-card-avatar"
          alt={props.video.channel}
          src={props.video.channelImage}
        />
        <div className="video-card-text">
            <h4 className="video-card-title">{props.video.title}</h4>
            <p className="video-card-channel">{props.video.channel}</p>
            <p className="video-card-views">{props.video.views} • {props.video.timestamp}</p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
