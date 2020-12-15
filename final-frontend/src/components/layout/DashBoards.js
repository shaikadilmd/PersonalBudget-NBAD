import React from 'react';
import {Link} from "react-router-dom";


export default function SecondHeader() {
    
  
    return (
        <div>
          <header id ="sheader">
              
           <Link class="button" to="/budget">Budget</Link>
            <Link class="button" to="/expense">Expense</Link>
            <Link class="button" to="/updateExpenses">updateExpenses</Link>
            <Link class="button" to="/updateBudgets">updateBudgets</Link>  
          </header>
        </div>
    ) 
}
