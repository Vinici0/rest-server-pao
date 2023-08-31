const proyService = require("../services/proy.service");

const getPROYs = async (req, res) => {
  try {
    const proys = await proyService.getPROYs();
    res.json({
      ok: true,
      proys,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

const getPROYById = async (req, res) => {
  const { id } = req.params;
  try {
    const proy = await proyService.getPROYById(id);
    proy.ok ? res.json(proy) : res.status(400).json(proy);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: "Hable con el administrador",
      ok: false,
    });
  }
};

const createPROY = async (req, res) => {
  const { body } = req;
  try {
    const proy = await proyService.createPROY(body);
    proy.ok ? res.json(proy) : res.status(400).json(proy);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};

const updatePROY = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  try {
    const proy = await proyService.updatePROY(id, body);
    proy.ok ? res.json(proy) : res.status(400).json(proy);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};

const deletePROY = async (req, res) => {
  const { id } = req.params;
  try {
    const proy = await proyService.deletePROY(id);
    proy.ok ? res.json(proy) : res.status(400).json(proy);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};

module.exports = {
  getPROYs,
  getPROYById,
  createPROY,
  updatePROY,
  deletePROY,
};
