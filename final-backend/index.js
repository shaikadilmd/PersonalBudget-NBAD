const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// setup express

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static('./client/build'));
const PORT = process.env.PORT || 5000

app.listen((PORT),() => console.log(`The server has started on ports:${PORT}`));

//setup mongoose

mongoose.connect(process.env.MONGODB_CONNECTION_STRING,
,{
useNewUrlParser:true,
useUnifiedTopology:true,
useCreateIndex:true,
},(err)=>{
    if(err) throw err;
    console.log("MongoDB Connection Successfully Established");
});

//setup routes 
app.use("/users", require("./routes/UserRouter"));
app.use("/expenses", require("./routes/expensesRouter"));
app.use("/budgets", require("./routes/budgetsRouter"));
