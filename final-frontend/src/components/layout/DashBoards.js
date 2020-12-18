import React from 'react';
import {Link} from "react-router-dom";


export default function SecondHeader() {
    
  
    return (
        <div>
          <header id ="sheader">
              
           <Link class="button" to="/budget">Add Budget</Link>
            <Link class="button" to="/expense">Add Expense</Link>
            <Link class="button" to="/updateExpenses">UpdateExpenses</Link>
            <Link class="button" to="/updateBudgets">UpdateBudgets</Link>  
          </header>
        </div>
    ) 
}
