const mongoose = require('mongoose')

async function connectToDatabase() {
  try {
    await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@bancocusronode.azaky5h.mongodb.net/?appName=bancoCusroNode`)
    console.log('✅ Banco conectado com sucesso')
  } catch (error) {
    console.error('❌ Erro ao conectar no banco:', error)
  }
}

module.exports = connectToDatabase

