module.exports = function(sequelize, DataTypes) {
    var hiScore = sequelize.define("hiScore", {
      user: DataTypes.STRING,
      correct: DataTypes.INTEGER,
      incorrect: DataTypes.INTEGER
      // paranoid: true

    });
    return hiScore;
  };
