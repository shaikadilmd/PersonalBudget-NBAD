import React,{useEffect,useContext,useState} from 'react';
import { Line } from "react-chartjs-2";
import axios from 'axios';

/*var data = {
  labels: [],
  datasets: [
    {
      label: 'Budgets',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'orange',
      borderWidth: 2,
      data: [],
    },
    {
      label: 'Expenses',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'rgba(155,231,91,0.2)',
      borderColor: 'red',
      borderWidth: 2,
      data: [],
    }
  ]
};*/

export default function BarChart() {
  const [budgetNames, setBudgetNames] = useState();
  const [budgetData, setBudgetData] = useState();
  const [expenseData, setExpenseData] = useState();  


    useEffect(() => {
        const token=localStorage.getItem("auth-token");

        axios.get('http://localhost:5000/budgets/all',{
            headers: {
              'x-auth-token': `${token}`
            }
          })
        .then(res => {
          let bNames = [];
          let bData = [];
            for (var i = 0; i < res.data.length; i++) {
              bNames.push(res.data[i].budgetName);
              bData.push(res.data[i].budget);
            }
            // console.log(data);
            setBudgetData(bData);
            setBudgetNames(bNames);
            })

        axios.get('http://localhost:5000/expenses/all',{
              headers: {
                'x-auth-token': `${token}`
              }
          })
        .then(res => {
              let eData = [];
              for (var i = 0; i < res.data.length; i++) {
                eData.push(res.data[i].expense);
              }
              // console.log(data);
              setExpenseData(eData);
              })  
          })
    return (
        <div className="line">
        <Line data={{
  labels: budgetNames,
  datasets: [
    {
      label: 'Budgets',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'orange',
      borderWidth: 2,
      data: budgetData,
    },
    {
      label: 'Expenses',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'rgba(155,231,91,0.2)',
      borderColor: 'red',
      borderWidth: 2,
      data: expenseData,
    }
  ]
}} options={{
          responsive: true,
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            }
          }} title="Personal Budget"/>
      </div>
    )
}
