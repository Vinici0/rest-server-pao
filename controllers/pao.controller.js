const paoService = require("../services/pao.service");

const getPAOs = async (req, res) => {
  try {
    const paos = await paoService.getPAOs();
    res.json({
      ok: true,
      paos,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

const getPAOById = async (req, res) => {
  const { id } = req.params;
  try {
    const pao = await paoService.getPAOById(id);
    pao.ok ? res.json(pao) : res.status(400).json(pao);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: "Hable con el administrador",
      ok: false,
    });
  }
};

const createPAO = async (req, res) => {
  const { body } = req;
  try {
    const pao = await paoService.createPAO(body);
    pao.ok ? res.json(pao) : res.status(400).json(pao);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};

const updatePAO = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  try {
    const pao = await paoService.updatePAO(id, body);
    pao.ok ? res.json(pao) : res.status(400).json(pao);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};

const deletePAO = async (req, res) => {
  const { id } = req.params;
  try {
    const pao = await paoService.deletePAO(id);
    pao.ok ? res.json(pao) : res.status(400).json(pao);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};

module.exports = {
  getPAOs,
  getPAOById,
  createPAO,
  updatePAO,
  deletePAO,
};
