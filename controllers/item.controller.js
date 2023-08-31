const itemService = require("../services/item.service");
const getItems = async (req, res) => {
  try {
    const items = await itemService.getItems();
    res.json({
      ok: true,
      items,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

const getItemById = async (req, res) => {
  const { id } = req.params;
  try {
    const item = await itemService.getItemById(id);
    item.ok ? res.json(item) : res.status(400).json(item);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: "Hable con el administrador",
      ok: false,
    });
  }
};

const createItem = async (req, res) => {
  const { body } = req;
  try {
    const item = await itemService.createItem(body);
    item.ok ? res.json(item) : res.status(400).json(item);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};

const updateItem = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  try {
    const item = await itemService.updateItem(id, body);
    item.ok ? res.json(item) : res.status(400).json(item);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};

const deleteItem = async (req, res) => {
  const { id } = req.params;
  try {
    const item = await itemService.deleteItem(id);
    item.ok ? res.json(item) : res.status(400).json(item);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};

module.exports = {
  getItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
};
