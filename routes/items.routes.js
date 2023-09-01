const { Router } = require("express");
const { check } = require("express-validator");

const {
  createItem,
  deleteItem,
  getItemById,
  getItems,
  updateItem,
} = require("../controllers/item.controller");

const router = Router();

router
  .get("/", getItems)
  .get("/:id", getItemById)
  .post("/", createItem)
  .put("/:id", updateItem)
  .delete("/:id", deleteItem);

module.exports = router;
