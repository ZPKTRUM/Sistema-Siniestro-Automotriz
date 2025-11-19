#!/usr/bin/env node

/**
 * Script para inicializar y verificar la base de datos MongoDB
 */

import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './models/User.js';
import Siniestro from './models/Siniestro.js';

// Cargar variables de entorno
dotenv.config({ path: './env' });

const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/sistema_siniestros';

async function initializeDatabase() {
  try {
    console.log('Conectando a MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('Conectado a MongoDB exitosamente');

    // Verificar usuarios existentes
    const userCount = await User.countDocuments();
    console.log(`Total de usuarios en la base de datos: ${userCount}`);

    // Crear o actualizar usuarios por defecto
    console.log('Creando/actualizando usuarios por defecto...');

    const defaultUsers = [
      {
        username: 'admin',
        password: 'Admin2024!',
        userType: 'admin',
        email: 'admin@sistema.com',
        nombre: 'Administrador'
      },
      {
        username: 'cliente',
        password: 'Cliente2024!',
        userType: 'cliente',
        email: 'cliente@sistema.com',
        nombre: 'Cliente Demo'
      }
    ];

    for (const userData of defaultUsers) {
      // Buscar usuario existente
      let user = await User.findOne({ username: userData.username });
      if (user) {
        // Actualizar contraseña y otros datos
        user.password = userData.password; // Se hasheará automáticamente por el pre-save hook
        user.userType = userData.userType;
        user.email = userData.email;
        user.nombre = userData.nombre;
        user.activo = true;
        await user.save();
        console.log(`Usuario actualizado: ${userData.username} (${userData.userType})`);
      } else {
        // Crear nuevo usuario
        user = new User(userData);
        await user.save();
        console.log(`Usuario creado: ${userData.username} (${userData.userType})`);
      }
    }

    console.log('Usuarios por defecto listos');

    // Verificar siniestros existentes
    const siniestroCount = await Siniestro.countDocuments();
    console.log(`Total de siniestros en la base de datos: ${siniestroCount}`);

    console.log('\nCredenciales para acceder al sistema:');
    console.log('   Admin: admin / Admin2024!');
    console.log('   Cliente: cliente / Cliente2024!');

    console.log('\nAccede a tu aplicación en:');
    console.log(`   Backend: http://localhost:${PORT}`);
    console.log(`   Frontend: http://localhost:5173`);

  } catch (error) {
    console.error('Error al inicializar la base de datos:', error.message);
    process.exit(1);
  } finally {
    await mongoose.connection.close();
    console.log('Conexión a MongoDB cerrada');
  }
}

// Ejecutar la inicialización
initializeDatabase();