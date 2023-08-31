const { PROY } = require("../models");

const getPROYs = async () => {
  try {
    const proys = await PROY.findAll();
    return proys;
  } catch (error) {
    throw error;
  }
};

const getPROYById = async (id) => {
  try {
    const proy = await PROY.findByPk(id);

    return {
        ok: true,
        proy,
        msg: `PROY con el id ${id}`,
    }
  } catch (error) {
    return {
        ok: false,
        msg: `No existe un PROY con el id ${id}`,
    }
  }
};

const createPROY = async (proyData) => {
  try {
    const newPROY = new PROY(proyData);
    await newPROY.save();
    return {
      msg: "PROY creado con éxito",
      proy: newPROY,
      ok: true,
    };
  } catch (error) {
    console.error(error);
    throw new Error("Error en la creación de PROY");
  }
};

const updatePROY = async (id, proyData) => {
  try {
    const proy = await PROY.findByPk(id);
    if (!proy) {
      return {
        msg: `No existe un PROY con el ID ${id}`,
        ok: false,
      };
    }
    await proy.update(proyData);
    return {
      msg: "PROY actualizado con éxito",
      proy,
      ok: true,
    };
  } catch (error) {
    console.error(error);
    throw new Error("Error en la actualización de PROY");
  }
};

const deletePROY = async (id) => {
  try {
    const proy = await PROY.findByPk(id);
    if (!proy) {
      return {
        msg: `No existe un PROY con el ID ${id}`,
        ok: false,
      };
    }
    await proy.destroy();
    return {
      msg: "PROY eliminado con éxito",
      ok: true,
    };
  } catch (error) {
    console.error(error);
    throw new Error("Error en la eliminación de PROY");
  }
};

module.exports = {
  getPROYs,
  getPROYById,
  createPROY,
  updatePROY,
  deletePROY,
};
