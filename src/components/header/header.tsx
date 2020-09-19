import React, {useState} from 'react';
import './header.css';
import {Menu, Search, VideoCall, Apps, Notifications} from "@material-ui/icons";
import {Avatar} from "@material-ui/core";
import {Link} from "react-router-dom";

const Header = () => {
  const [inputSearch, setInputSearch] = useState<string>("");
  return (
    <div className="header">

      <div className="header-left">
        <Menu />
        <Link to="/">
            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" 
                alt="" 
                className="header-logo"
            />
        </Link>        
      </div>

      <div className="header-input-container">
        <input  value={inputSearch}
                type="text"  
                placeholder="Search"
                className="header-input" 
                onChange = {(e) => setInputSearch(e.target.value)}
        />
        <Link to={`/search/${inputSearch}`}>
          <Search className="header-search-icon" />
        </Link>        
      </div>

      <div className="header-icons">
        <VideoCall className="header-icon"/>
        <Apps className="header-icon"/>
        <Notifications className="header-icon"/>
        <Avatar 
          alt="Remy Sharp"
          src = "https://avatars2.githubusercontent.com/u/24712956"
        />        
      </div>   

    </div>
  );
}

export default Header;
