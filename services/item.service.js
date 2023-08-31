const { ITEM } = require("../models");

const getItems = async () => {
  try {
    const items = await ITEM.findAll();
    return items;
  } catch (error) {
    throw error;
  }
};

const getItemById = async (id) => {
  try {
    const item = await ITEM.findByPk(id);
    return {
      ok: true,
      item,
      msg: `ITEM con el id ${id}`,
    };
  } catch (error) {
    return {
      ok: false,
      msg: `No existe un ITEM con el id ${id}`,
    };
  }
};

const createItem = async (itemData) => {
  try {
    const newItem = new ITEM(itemData);
    await newItem.save();
    return {
      msg: `ITEM creado con éxito`,
      item: newItem,
      ok: true,
    };
  } catch (error) {
    console.error(error);
    throw new Error("Error en la creación del ITEM");
  }
};

const updateItem = async (id, itemData) => {
  try {
    const item = await ITEM.findByPk(id);
    if (!item) {
      return {
        msg: `No existe un ITEM con el id ${id}`,
        ok: false,
      };
    }
    await item.update(itemData);
    return {
      msg: `ITEM actualizado con éxito`,
      item,
      ok: true,
    };
  } catch (error) {
    console.error(error);
    throw new Error("Error en la actualización del ITEM");
  }
};

const deleteItem = async (id) => {
  try {
    const item = await ITEM.findByPk(id);
    if (!item) {
      return {
        msg: `No existe un ITEM con el id ${id}`,
        ok: false,
      };
    }
    await item.destroy();
    return {
      msg: `ITEM eliminado con éxito`,
      ok: true,
    };
  } catch (error) {
    console.error(error);
    throw new Error("Error en la eliminación del ITEM");
  }
};

module.exports = {
  getItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
};
