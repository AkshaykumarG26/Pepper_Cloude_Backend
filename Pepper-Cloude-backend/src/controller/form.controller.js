const express = require("express")

const Form = require("../model/form.model")

const router = express.Router()

router.get("/", async (req, res) => {
  try {
    const form = await Form.find().lean().exec();
    return res.status(200).json(form);
  } catch (e) {
    return res.status(500).json({ status: "something is wrong", message: e.message });
  }
});

router.post("/createforms", async (req, res) => {
  try {
    const form = await Form.create(req.body);
    return res.status(201).json(form);
  } catch (e) {
    return res
      .status(500)
      .json({ status: "something is wrong", message: e.message });
  }
});



module.exports = router

