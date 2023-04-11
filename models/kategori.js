module.exports = (sequelize, Sequelize) => {
    const Kategori = sequelize.define("kategori", {
        nama: {
            type: Sequelize.STRING,
          },
    });
    return Kategori;
}