import React, { useEffect,useContext } from "react";
import {useHistory,Link } from "react-router-dom";
import {BrowserRouter, Switch,Route} from "react-router-dom";   
import UserContext from "../../context/UserContext";

import DashBoards from "../layout/DashBoards";
import Dashboard from "../misc/DashBoard";

import "../../style.css";

export default function Home() {

  const { userData } = useContext(UserContext);
  const history=useHistory();
  useEffect(()=>{
    if(!userData.user) history.push("/login")
});

  return (
    <>
    <div className="page">
    {userData.user?(
    <>
        <DashBoards/>
        <Dashboard/>
        </>
      ) : (
        <>
          <h2>You are not logged in</h2>
          <Link to="/login">Log in</Link>
        </>
      )}
    </div>
    </>
  );
}
