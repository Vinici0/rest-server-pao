const { PAO } = require("../models/");

const getPAOs = async () => {
  try {
    const paos = await PAO.findAll();
    return paos;
  } catch (error) {
    throw error;
  }
};

const getPAOById = async (id) => {
  try {
    const pao = await PAO.findByPk(id);

    return {
      ok: true,
      pao,
      msg: `PAO con el id ${id}`,
    };
  } catch (error) {
    return {
      ok: false,
      msg: `No existe un PAO con el id ${id}`,
    };
  }
};

const createPAO = async (paoData) => {
  try {
    const newPAO = new PAO(paoData);
    await newPAO.save();
    return {
      msg: `PAO creado con éxito`,
      pao: newPAO,
      ok: true,
    };
  } catch (error) {
    console.error(error);
    throw new Error("Error en la creación del PAO");
  }
};

const updatePAO = async (id, paoData) => {
  try {
    const pao = await PAO.findByPk(id);
    if (!pao) {
      return {
        msg: `No existe un PAO con el ID ${id}`,
        ok: false,
      };
    }
    await pao.update(paoData);
    return {
      msg: `PAO actualizado con éxito`,
      pao,
      ok: true,
    };
  } catch (error) {
    console.error(error);
    throw new Error("Error en la actualización del PAO");
  }
};

const deletePAO = async (id) => {
  try {
    const pao = await PAO.findByPk(id);
    if (!pao) {
      return {
        msg: `No existe un PAO con el ID ${id}`,
        ok: false,
      };
    }
    await pao.destroy();
    return {
      msg: `PAO eliminado con éxito`,
      ok: true,
    };
  } catch (error) {
    console.error(error);
    throw new Error("Error en la eliminación del PAO");
  }
};

module.exports = {
  getPAOs,
  getPAOById,
  createPAO,
  updatePAO,
  deletePAO,
};
