import React from 'react';
import {Avatar} from "@material-ui/core";
import {CheckCircleOutlineOutlined} from "@material-ui/icons";
import './channel-row.css';

interface IProps {
  image: string;
  channel: string;
  verified: boolean;
  subs: string;
  noOfVideos: number;
  description: string;
}

const ChannelRow = (props: IProps) => {
  return (
    <div className="channel-row">
      <Avatar className="channel-row-logo"
        alt={props.channel}
        src={props.image}
      />
      <div className="channel-row-text">
        <h4 className="channel-row-info">
            {props.channel}
            {props.verified && <CheckCircleOutlineOutlined />}
        </h4>
        <p>        
          {props.subs} subscribers • {props.noOfVideos} videos
        </p>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default ChannelRow;
