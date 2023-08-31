const { EOD } = require("../models/");

const getEOD = async () => {
  try {
    const eod = await EOD.findAll();
    return eod;
  } catch (error) {
    throw error;
  }
};

const getEODById = async (id) => {
  try {
    const eod = await EOD.findByPk(id);
    return eod;
  } catch (error) {
    throw error;
  }
};

const createEOD = async (eodData) => {
  try {
    const existeCodigo = await EOD.findOne({
      where: {
        CODIGO: eodData.CODIGO,
      },
    });

    if (existeCodigo) {
      return {
        msg: `Ya existe un EOD con el código ${eodData.CODIGO}`,
        ok: false,
      };
    }
    const eod = new EOD(eodData);
    await eod.save();
    return {
      msg: `EOD creado con éxito`,
      eod,
      ok: true,
    };
  } catch (error) {
    console.error(error);
    throw new Error("Error en la creación de EOD");
  }
};

const updateEOD = async (id, eodData) => {
  try {
    const eod = await EOD.findByPk(id);
    if (!eod) {
      return {
        msg: `No existe un EOD con el id ${id}`,
        ok: false,
      };
    }
    await eod.update(eodData);
    return {
      msg: `EOD actualizado con éxito`,
      eod,
      ok: true,
    };
  } catch (error) {
    console.error(error);
    throw new Error("Error en la actualización del EOD");
  }
};

const deleteEOD = async (id) => {
  try {
    const eod = await EOD.findByPk(id);
    if (!eod) {
      return {
        msg: `No existe un EOD con el id ${id}`,
        ok: false,
      };
    }
    await eod.destroy();
    return {
      msg: `EOD eliminado con éxito`,
      ok: true,
    };
  } catch (error) {
    console.error(error);
    throw new Error("Error en la eliminación del EOD");
  }
};

module.exports = {
  getEOD,
  getEODById,
  createEOD,
  updateEOD,
  deleteEOD,
};
