const mongoose = require("mongoose");

const connectToDatabase = async () => {
  await mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@bancocusronode.azaky5h.mongodb.net/?appName=bancoCusroNode`,
    (error) => {
      if (error) {
        return console.error("Erro ao conectar ao banco de dados:", error);
      }
      return console.log("Conexão com o banco de dados estabelecida com sucesso!");
    },
  );
};


 
module.exports = connectToDatabase;