const { Router } = require("express");
const { check } = require("express-validator");

const {
  createPROY,
  deletePROY,
  getPROYById,
  getPROYs,
  updatePROY,
} = require("../controllers/proy.controller");

const router = Router();

router
  .get("/", getPROYs)
  .get("/:id", getPROYById)
  .post("/", createPROY)
  .put("/:id", updatePROY)
  .delete("/:id", deletePROY);

module.exports = router;
