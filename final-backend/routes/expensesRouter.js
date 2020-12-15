const expenseRouter = require("express").Router();
const auth = require("../middleware/auth");
const Expense = require("../models/expensesModel");

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

expenseRouter.get("/all", auth, async (req, res) => {
  const expenses = await Expense.find({ userId: req.user });
  res.json(expenses);
});

expenseRouter.get("/getTimedExpenses",auth,async(req,res)=>{
  const expenses=await Expense.find({userId: req.user, month:req.query.month , year:req.query.year});
  res.json(expenses);
});

expenseRouter.delete("/:id", auth, async (req, res) => {
  const expense = await Expense.findOne({ userId: req.user, _id: req.params.id });
  if (!expense)
    return res.status(400).json({
      msg: "No expense found with this ID that belongs to the current user.",
    });
  const deletedExpense = await Expense.findByIdAndDelete(req.params.id);
  res.json(deletedExpense);
});

module.exports = expenseRouter;