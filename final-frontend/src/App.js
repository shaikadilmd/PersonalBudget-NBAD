import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Axios from "axios";
import Home from "./components/pages/Home";
import Header from "./components/layout/Header";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import UserContext from "./context/UserContext";

import "./style.css";

import Budgets from './components/misc/Budgets';
import Expenses from './components/misc/Expenses';
import updateBudgets from './components/misc/UpdateBudgets';
import updateExpenses from './components/misc/UpdateExpenses';
import Dashboard from './components/misc/DashBoard';

const SERVER_URL = require('./config/config').SERVER_URL;



function App() {


  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await Axios.post(
        SERVER_URL+"/users/tokenIsValid",
        null,
        { headers: { "x-auth-token": token } }
      );
      if (tokenRes.data) {
        const userRes = await Axios.get(SERVER_URL+"/users/", {
          headers: { "x-auth-token": token },
        });
        
        setUserData({
          token,
          user: userRes.data,
        });
      }  
    };
    checkLoggedIn();


  }, []);

  return (
    <>
      <BrowserRouter>
      <UserContext.Provider value={{ userData, setUserData }}>
            <Header />
        <aside class="as1">
        <h4>Important steps to follow for charts</h4>
        <p> 1) Enter Month and Year for each item Budget <br></br><br></br>
            2) Enter Month and Year for each item Expense <br></br><br></br>
            3) For each item, please add both Budget,Expense<br></br><br></br>
            4) Enter same Month and Year for new item <br></br>
               and check in Dashboard by using Month <br></br>
               and year to see corresponding charts  <br></br>
               of the Loggedin User and his items budgets <br></br>
               and Expenses.
        </p>
        </aside>
            <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route path="/budget" component={Budgets}></Route>
              <Route path="/expense" component={Expenses}></Route>
              <Route path="/dashboard" component={Dashboard}></Route>
              <Route path="/updateBudgets" component={updateBudgets}></Route>
              <Route path="/updateExpenses" component={updateExpenses}></Route>
            </Switch> 
            </div>
      </UserContext.Provider>
      </BrowserRouter> 
    </>
  );
}

export default App;
