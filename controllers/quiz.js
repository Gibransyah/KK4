const db = require("../models");
const Quiz = db.quizzs;

//nambah data quiz
exports.create = async (req, res) => {
  try {
    const data = await Quiz.create(req.body);
    res.json({
      message: "quiz dibuat",
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
    const quizzs = await Quiz.findAll();
    res.json({
      message: "quiz sukses ditampilkan",
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
    const quiz = await Quiz.findByPk(id, { rejectOnEmpty: true })
    quiz.update(req.body, {
      where: { id },
    });
    res.json({
      message: "quiz diupdate",
      data: quiz,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "some error occurred while retrieving quiz",
      data: null,
    });
  }
}
//menghapus quiz

exports.delete = async (req, res) => {
  
  const id = req.params.id;
  
  try {
    
    const quiz = await Quiz.findByPk(id, { rejectOnEmpty: true })
    
    quiz.destroy();

    res.json({
      message: "quiz dihapus",
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
    const quiz = await Quiz.findByPk(id, { rejectOnEmpty: true })
    res.json({
        message: `quiz success  ditemukan dengan id=${id}.`,
        data: quiz,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "some error occurred while retrieving quiz",
      data: null,
    });
  }
};

// view quiz dengan kategori
exports.getByCategoryId = async (req, res) => {
  const id = req.params.id;
  const quizzs = await Quiz.findAll({
    where: {
      categoryId: id,
    },
  });
  res.json({
    message: `quiz retrieved success with id=${id}.`,
    data: quizzs,
  });
};

// view quiz dengan level
exports.getByLevelId = async (req, res) => {
  const id = req.params.id;
  const quizzs = await Quiz.findAll({
    where: {
      levelId: id,
    },
  });
  res.json({
      message: `quiz retrieved success with id=${id}.`,
      data: quizzs,
  });
};
