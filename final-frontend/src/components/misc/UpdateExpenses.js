import React,{useEffect,useContext,useState} from 'react';
import {useHistory,Link} from "react-router-dom";
import UserContext from "../../context/UserContext";
import DashBoards from "../layout/DashBoards"
import ErrorNotice from "./ErrorNotice";
import Axios from 'axios';

export default function Expense() {
    const [expenseName,setTitle] = useState();
    const [month, setMonth] = useState();
    const [year,setYear] =useState();
    const [expense,setCost] = useState();
    const [error, setError] = useState();
    const {userData,setUserData} = useContext(UserContext);
    const history=useHistory();
    useEffect(()=>{
        if(!userData.user) history.push("/login")
    });
    const submit = async (e) => {
        e.preventDefault();
        
        try {
          const token=localStorage.getItem("auth-token");
          const newExpense={expense,month,year,expenseName};
          console.log(token);
          console.log(newExpense);


          if(expense&&month&&year&&expenseName)
            {
          const checkRecord = await Axios.get("http://localhost:5000/expenses/findExpense",{params:{
            'expenseName':expenseName
          },
            headers: {
              'x-auth-token': `${token}`
            }
          });

          console.log(checkRecord.data[0]._id)

          const response = await Axios.post("http://localhost:5000/expenses/update",newExpense,{params:{
            '_id':checkRecord.data[0]._id
          },
            headers: {
              'x-auth-token': `${token}`
            }
          });
          
        if(response.status === 200)
        {
        
            var dropDown_title = document.getElementById("title");
            setTitle(undefined)
            dropDown_title.selectedIndex = "none";
            var dropDown_month = document.getElementById("month");
            setMonth(undefined)
            dropDown_month.selectedIndex = "none";
            var dropDown_year = document.getElementById("year");
            setYear(undefined)
            dropDown_year.selectedIndex = "none";
            var dropDown_cost = document.getElementById("cost");
            setCost (undefined)
            dropDown_cost.value = "";
  
            alert("Expense added successfully");
          }
        }
        else
        {
            alert("Please enter all the fields")
        }
        } 
        
         catch (err) {
            err.response.data.msg&&setError(err.response.data.msg);
        }
    };
    return (
        <>
        <div className="page">
            {userData.user?(
            <>
            <DashBoards/>
            <h1>Add Expense</h1>
            {error && <ErrorNotice message={error} clearError={() => setError(undefined) }/>}
            <form className="form" onSubmit={submit}>

            <label htmlFor="title">ExpenseName</label>
            <select id="title" onChange={(e) => setTitle(e.target.value)}>
                <option value="none" selected disabled hidden> 
                choose expense
                </option> 
                <option value="Electricity">Electricity</option>
                <option value="Rent">Rent</option>
                <option value="Medicines">Medicines</option>
                <option value="Grocery">Grocery</option>
                <option value="EatOut">EatOut</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Others">Others</option>
            </select>

            <label htmlFor="month">Month</label>
            <select id="month" name="month" onChange={(e) => setMonth(e.target.value)}>
              <option value="none" selected disabled hidden> 
              ---
              </option> 
              <option value="1">January</option>
              <option value="2">February</option>
              <option value="3">March</option>
              <option value="4">April</option>
              <option value="5">May</option>
              <option value="6">June</option>
              <option value="7">July</option>
              <option value="8">August</option>
              <option value="9">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>


            <label htmlFor="year">Year</label>
            <select id="year" name="year" onChange={(e) => setYear(e.target.value)}>
              <option value="none" selected disabled hidden> 
              ---
              </option> 
        	    <option value="1995">1995</option>
              <option value="1996">1996</option>
              <option value="1997">1997</option>
              <option value="1998">1998</option>
              <option value="1999">1999</option>
              <option value="2000">2000</option>
              <option value="2001">2001</option>
              <option value="2002">2002</option>
              <option value="2003">2003</option>
              <option value="2004">2004</option>
              <option value="2005">2005</option>
              <option value="2006">2006</option>
              <option value="2007">2007</option>
              <option value="2008">2008</option>
              <option value="2009">2009</option>
              <option value="2010">2010</option>
              <option value="2011">2011</option>
              <option value="2012">2012</option>
              <option value="2013">2013</option>
              <option value="2014">2014</option>
              <option value="2015">2015</option>
              <option value="2016">2016</option>
              <option value="2017">2017</option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
            </select>

            <label htmlFor="cost">Cost</label>
            <input id="cost" type="text"
            onChange={(e) => setCost(e.target.value)}
            />

            <input type="submit" value="Add Expense" />
      </form>

            </>
            ):
            (<>
                <h2>You are not logged in</h2>
                <Link to="/login">Log in</Link>
            </>
            )}
        </div>
    
        </>
    )
}
