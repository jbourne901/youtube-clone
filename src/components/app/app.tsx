import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import './app.css';
import Header from "../header";
import Sidebar from '../sidebar';
import RecommendedVideos from '../recommended-videos';
import SearchPage from "../search-page";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/search/:searchTerm">
            <SearchPage />
          </Route>
          <Route path="/">            
            <div className="app-page">
              <Sidebar />
              <RecommendedVideos />
            </div>                        
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
