import React, { useState, useContext } from 'react';
import axios from 'axios';
import Chart from 'chart.js';
import { Bar,Line } from "react-chartjs-2";
const SERVER_URL = require('../../config/config').SERVER_URL;
export default function PieChart() {
    const [month,setMonth] =useState();
    const [year, setYear] = useState();
    const [graph,setGraph] =useState();
    const [graphExp,setGraphExp] =useState();
    const [error, setError] = useState();
    
    const [budgetNames, setBudgetNames] = useState();
    const [budgetData, setBudgetData] = useState();
    const [expenseData, setExpenseData] = useState();


    var dataSource = {
        datasets: [
            {
                data: [],
                backgroundColor: ["#2ecc71",
                "#3498db",
                "#95a5a6",
                "#9b59b6",
                "#f1c40f",
                "#e74c3c",
                "#34495e"
                ]
            }],
        labels: []
    };

    var dataSourceExp = {
      datasets: [
          {
              data: [],
              backgroundColor: ["#2ecc71",
              "#3498db",
              "#95a5a6",
              "#9b59b6",
              "#f1c40f",
              "#e74c3c",
              "#34495e"
              ]  
          }],
      labels: []
    };



    const submit = async (e) => {
        e.preventDefault();
        
        try {
            const token=localStorage.getItem("auth-token");
            
            axios.get(SERVER_URL+'/budgets/getTimedBudgets',{params:{
                'month':month,
                'year':year
              }, headers: {
                'x-auth-token': `${token}`
              }})
            .then(res=>{
              let bNames = [];
              let bData = [];
                for (var i = 0; i < res.data.length; i++) {
                    dataSource.datasets[0].data[i] = res.data[i].budget;
                    dataSource.labels[i] = res.data[i].budgetName;
                    //dataSource.datasets[0].backgroundColor[i]='#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
                    bNames.push(res.data[i].budgetName);
                    bData.push(res.data[i].budget);
                }
                
                setBudgetData(bData);
                setBudgetNames(bNames);
                console.log(dataSource)
                if(res){
                    setGraph(true);
                    createChart();
                }
               
            }).catch(err=>{
              if (err.response) {
                err.response.data.msg&&setError(err.response.data.msg);
              }
            })
        
            function createChart() {
                var ctx = document.getElementById("myChart").getContext("2d");
                var myPieChart = new Chart(ctx, {
                    type: 'pie',
                    data: dataSource,
                    options: {
                      title: {
                        display: true,
                        text: 'Budgets'
                      }
                    }
                });
            }



            axios.get(SERVER_URL+'/expenses/getTimedExpenses',{params:{
                      'month':month,
                      'year':year
                    },
                        headers: {
                          'x-auth-token': `${token}`
                        }
                    })
                  .then(res => {
                    let eData = [];
                    for (var i = 0; i < res.data.length; i++) {
                      eData.push(res.data[i].expense);
                      dataSourceExp.labels[i] = res.data[i].expenseName;
                      //dataSourceExp.datasets[0].backgroundColor[i]='#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
                      dataSourceExp.datasets[0].data[i] = res.data[i].expense;
                    }
                      //dataSourceExp.datasets[0].backgroundColor = dataSource.datasets[0].backgroundColor
                    setExpenseData(eData);
                  //console.log(data);
                  console.log(dataSourceExp)
                  if(res){
                    setGraphExp(true);
                    createChartExp();
                  } 
                  
                }).catch(err=>{
                  if (err.response) {
                    err.response.data.msg&&setError(err.response.data.msg);
                  }
                })

            function createChartExp() {
                  var ctx = document.getElementById("myChartExp").getContext("2d");
                  var myPieChart = new Chart(ctx, {
                      type: 'pie',
                      data: dataSourceExp,
                      options: {
                        title: {
                          display: true,
                          text: 'Expenses'
                        }
                      }
                  });
            }


          }catch (err) {
                      err.response.data.msg&&setError(err.response.data.msg);
          }

          };
          console.log("budget data: ", budgetData);
      return (

        <div>
        
        <form className="form" onSubmit={submit}>
            <div>

                <label htmlFor="expense-month">Month Of Expense</label>
                <input
                id="expense-month"
                type="text"
                onChange={(e) => setMonth(e.target.value)}/>
            </div>
            
            <div>

                <label htmlFor="expense-year">Year of Expense</label>
                <input
                id="expense-year"
                type="text"
                onChange={(e) => setYear(e.target.value)}/>
            </div>
            <input type="submit" value="submit" />
        </form>

        {graph?(<><canvas id="myChart"></canvas></>):(<><h2>..</h2></>)}
        {graphExp?(<><canvas id="myChartExp"></canvas></>):(<><h2>No Expenses and Budgets for current Month and Year</h2></>)}
        {budgetData === undefined ?null:
        <>
        <Bar data={{
        labels: budgetNames,
        datasets: [
          {
            label: 'Budgets',
            backgroundColor: 'orange',
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            borderWidth: 1,
            data: budgetData,
          },
          {
            label: 'Expenses',
            backgroundColor: 'red',
            hoverBackgroundColor: 'rgba(155,231,91,0.4)',
            borderWidth: 1,
            data: expenseData,
          }
        ]
    }} 
            width={null}
            height={null}
            options={{
              responsive: true,
              scales: {
                yAxes: [{ticks: { beginAtZero: true}}]
              }
            }} 
            title="Personal Budget" redraw />


        <Line data={{
  labels: budgetNames,
  datasets: [
    {
      label: 'Budgets',
      fill: false,
      lineTension: 0,
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'orange',
      borderWidth: 2,
      data: budgetData,
    },
    {
      label: 'Expenses',
      fill: false,
      lineTension: 0,
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
</>
}
        </div>
    )
}
