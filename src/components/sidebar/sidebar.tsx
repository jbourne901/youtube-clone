import React from 'react';
import './sidebar.css';
import SidebarRow from "./sidebar-row";
import {Home, VideoLibrary, OndemandVideo, WatchLater, ThumbUpAltOutlined, ExpandMoreOutlined, History} from "@material-ui/icons";
import {Whatshot} from "@material-ui/icons";
import {Subscriptions} from "@material-ui/icons";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarRow selected title="Home" icon={Home}/>
      <SidebarRow title="Trending"  icon={Whatshot}/>
      <SidebarRow title="Subscription"  icon={Subscriptions}/>
      <hr className="sidebar-hr"/>
      <SidebarRow selected title="Library" icon={VideoLibrary}/>
      <SidebarRow title="History"  icon={History}/>
      <SidebarRow title="Your Videos"  icon={OndemandVideo}/>
      <SidebarRow title="Watch Later" icon={WatchLater}/>
      <SidebarRow title="Liked Videos"  icon={ThumbUpAltOutlined}/>
      <SidebarRow title="Show More"  icon={ExpandMoreOutlined}/>
      <hr className="sidebar-hr"/>
    </div>
  );
}

export default Sidebar;
