module.exports = function(sequelize, DataTypes) {
    var Questions = sequelize.define("Questions", {
      text: DataTypes.STRING,
      complete: DataTypes.BOOLEAN
    });
    return Questions;
  };
  