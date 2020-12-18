const expenseRouter = require("express").Router();
const auth = require("../middleware/auth");
const Expense = require("../Models/expensesModel");

expenseRouter.post("/", auth, async (req, res) => {
  try {
    const { expense, month, year, expenseName } = req.body;

    // validation

    if (!expense|| !expenseName|| !month || !year)
      return res.status(400).json({ msg: "Not all fields have been entered." });

    const newExpense = new Expense({
      expense,
      month,
      year,
      expenseName,
      userId: req.user,
    });
    const savedExpense = await newExpense.save();
    res.json(savedExpense);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});







expenseRouter.get("/getTimedExpenses",auth,async(req,res)=>{
  const expenses=await Expense.find({userId: req.user, month:req.query.month , year:req.query.year});
  res.json(expenses);
});



expenseRouter.get("/findExpense", auth, async (req, res) => {
  const expenses = await Expense.find({ userId: req.user, expenseName:req.query.expenseName});
  res.json(expenses);
});


expenseRouter.put("/update",auth, async (req, res) => {
  const expense = await Expense.findOne({ userId: req.user, _id: req.query._id });

  if (!expense)
    return res.status(400).json({
      msg: "No Expense found with this ID that belongs to the current user.",
    });
      
  const updatedExpense = await Expense.updateOne({"_id":req.query._id }, {$set: req.body});
  res.json(updatedExpense);
})






module.exports = expenseRouter;