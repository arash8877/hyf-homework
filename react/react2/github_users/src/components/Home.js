import React, {useContext} from "react";
import "./Home.css";
import Input from "./Input";
import { Context } from "./Context";

const Home = () => {
  const value = useContext(Context);
  const usersList = value.usersList;
  const errorMsg = value.errorMsg;
  const isLoading = value.isLoading;

  // console.log(usersList)

  return (
    <div className="home-container">
      <h1>Github User Searcher</h1>
      <div className="layout">
        <Input />
        { 
        isLoading
        ? <p className="loading">loading ...</p>
        : errorMsg !== ""
          ? <p className="error">{errorMsg}</p>
          :         <ul>
          {
            usersList.length === 0 
            ? <li>No results</li>
            : (usersList.map(user => 
              <li key={user.id}>{(user.url).split('/')[4]}</li>
            ))
          }
        </ul>
        }

      </div>
    </div>
  );
};

export default Home;
