const express = require("express");

const cors = require("cors")

const formController = require("./controller/form.controller");

const app = express();

app.use(express.json());

app.use(cors())

app.use("/", formController);

module.exports = app;
