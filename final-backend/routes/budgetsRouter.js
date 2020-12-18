const budgetRouter = require("express").Router();
const auth = require("../middleware/auth");
const Budget = require("../Models/budgetsModel");

budgetRouter.post("/", auth, async (req, res) => {
  try {
    console.log(req.body)
    const { budget, month, year,budgetName } = req.body;

    // validation

    if (!budget||!budgetName|| !month || !year)
      return res.status(400).json({ msg: "Not all fields have been entered." });

    const newBudget = new Budget({
      budget,
      month,
      year,
      budgetName,
      userId: req.user,
    });
    const savedBudget = await newBudget.save();
    res.json(savedBudget);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



budgetRouter.get("/getTimedBudgets",auth,async(req,res)=>{
  const budgets=await Budget.find({userId: req.user, month:req.query.month , year:req.query.year});
  res.json(budgets);
});




budgetRouter.get("/findBudget", auth, async (req, res) => {
  const budgets = await Budget.find({ userId: req.user, budgetName:req.query.budgetName});
  res.json(budgets);
});


budgetRouter.put("/update",auth, async (req, res) => {
  const budget = await Budget.findOne({ userId: req.user, _id: req.query._id });

  if (!budget)
    return res.status(400).json({
      msg: "No Budget found with this ID that belongs to the current user.",
    });
      
  const updatedBudget = await Budget.updateOne({"_id":req.query._id }, {$set: req.body});
  res.json(updatedBudget);
})


module.exports = budgetRouter;