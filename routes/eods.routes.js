const { Router } = require("express");
const { check } = require("express-validator");
const {
  getEOD,
  getEODById,
  createEOD,
  updateEOD,
} = require("../controllers/eod.controller");

const router = Router();

router
  .get("/", getEOD)
  .get("/:id", getEODById)
  .post("/", createEOD)
  .put("/:id", updateEOD);

module.exports = router;
