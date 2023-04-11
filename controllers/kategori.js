const db = require("../models");
const Kategori = db.kategori;

//nambah data ktgr
exports.create = async (req, res) => {
    try {
      const data = await Kategori.create(req.body);
      res.json({
        message: "kategori dibuat",
        data: data,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
        data: null,
      });
    }
  }

  //view all quiz
exports.getAll = async (req, res) => {
    try {
      const quizzs = await Kategori.findAll();
      res.json({
        message: "kategori sukses ditampilkan",
        data: quizzs,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
        data: null,
      });
    }
  }

  //ubah quiz
exports.update = async (req, res) => {
    const id = req.params.id
    try {
      const kategori = await Kategori.findByPk(id, { rejectOnEmpty: true })
      kategori.update(req.body, {
        where: { id },
      });
      res.json({
        message: "kategori diupdate",
        data: kategori,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message || "some error occurred while retrieving kategori",
        data: null,
      });
    }
  }

  //menghapus quiz

exports.delete = async (req, res) => {
  
    const id = req.params.id;
    
    try {
      
      const kategori = await Kategori.findByPk(id, { rejectOnEmpty: true })
      
      kategori.destroy();
  
      res.json({
        message: "kategori dihapus",
      });
    } catch (error) {
      
      res.status(500).json({
        message: error.message || "some error occurred while retrieving quiz",
        data: null,
      });
    }
  };

  //menampilkan quiz dengan id
exports.findOne = async (req, res) => {
    const id = req.params.id;
    try {
      const kategori = await Kategori.findByPk(id, { rejectOnEmpty: true })
      res.json({
          message: `kategori success  ditemukan dengan id=${id}.`,
          data: kategori,
      });
    } catch (error) {
      res.status(500).json({
        message: error.message || "some error occurred while retrieving quiz",
        data: null,
      });
    }
  };