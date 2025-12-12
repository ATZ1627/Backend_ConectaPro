const mongoose = require('mongoose');
const Service = require('../models/Service');

const connectDB = async () => {
    try {
        // En Mongoose v6+ (y v8), useNewUrlParser y useUnifiedTopology son true por defecto
        // y están deprecados si se pasan explícitamente.
        const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/conecta_pro');

        console.log(`MongoDB Connected: ${conn.connection.host}`);
        console.log('Sincronizando índices...');
        console.log('¡Índices de Service sincronizados correctamente!');
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;
