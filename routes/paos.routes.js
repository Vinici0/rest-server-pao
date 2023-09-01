const { Router } = require("express");
const { check } = require("express-validator");

const {
  createPAO,
  deletePAO,
  getPAOById,
  getPAOs,
  updatePAO,
} = require("../controllers/pao.controller");

const router = Router();

router
  .get("/", getPAOs)
  .get("/:id", getPAOById)
  .post("/", createPAO)
  .put("/:id", updatePAO)
  .delete("/:id", deletePAO);

module.exports = router;
