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

app.listen((PORT),() => console.log(`The server has started on port:${PORT}`));

//setup mongoose





mongoose.connect("mongodb+srv://adil:ab99087@main.ugjn9.mongodb.net/<dbname>?retryWrites=true&w=majority"
,{
useNewUrlParser:true,
useUnifiedTopology:true,
useCreateIndex:true,
},(err)=>{
    if(err) throw err;
    console.log("MongoDB Connection Established");
});

//setup routes 
app.use("/users", require("./routes/UserRouter"));
app.use("/expenses", require("./routes/expensesRouter"));
app.use("/budgets", require("./routes/budgetsRouter"));
