module.exports = function(sequelize, DataTypes) {
    var Question = sequelize.define("qs", {
     category: DataTypes.STRING,
     question: DataTypes.STRING,
     correct: DataTypes.STRING,
     answer1: DataTypes.STRING,
     answer2: DataTypes.STRING,
     answer3: DataTypes.STRING,
     answer4: DataTypes.STRING,
    }, {
        timestamps: false
     
     
    });
    return Question;
  };