const eodService = require("../services/eod.service");

const getEOD = async (req, res) => {
  try {
    const eod = await eodService.getEOD();
    res.json({
      ok: true,
      eod,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

const getEODById = async (req, res) => {
  const { id } = req.params;
  try {
    const eod = await eodService.getEODById(id);
    res.json({
      eod: eod.eod,
      ok: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hable con el administrador",
      ok: false,
    });
  }
};

const createEOD = async (req, res) => {
  const { body } = req;
  try {
    const eod = await eodService.createEOD(body);
    eod.ok ? res.json(eod) : res.status(400).json(eod);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};

const updateEOD = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  try {
    const eod = await eodService.updateEOD(id, body);
    eod.ok ? res.json(eod) : res.status(400).json(eod);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};

const deleteEOD = async (req, res) => {
  const { id } = req.params;
  try {
    const eod = await eodService.deleteEOD(id);
    eod.ok ? res.json(eod) : res.status(400).json(eod);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};

module.exports = {
  getEOD,
  getEODById,
  createEOD,
  updateEOD,
  deleteEOD,
};
