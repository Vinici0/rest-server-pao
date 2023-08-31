const { EOD } = require("../models/");

const getEOD = async (req, res) => {
  try {
    const eod = await EOD.findAll();
    res.json({
      eod,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};

const getEODById = async (req, res) => {
  const { id } = req.params;
  try {
    const eod = await EOD.findByPk(id);
    res.json({
      eod,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};

const postEOD = async (req, res) => {
  const { body } = req;
  try {
    const eod = new EOD(body);
    await eod.save();
    res.json(eod);
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
    postEOD,
};