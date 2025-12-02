# Sistema de Siniestros

## Descripción

Sistema web completo para la gestión de siniestros de seguros. Permite a administradores y clientes gestionar, consultar y reportar siniestros de manera eficiente. El sistema incluye autenticación segura, registro de siniestros con asignación automática de recursos, y funcionalidades de consulta y reporte.

## Características

- Autenticación de usuarios con roles (administrador/cliente)
- Registro y gestión de siniestros
- Consulta de siniestros por múltiples criterios
- Asignación automática de liquidador, grúa y taller
- Estados de siniestro: Ingresado, En Evaluación, Finalizado
- Reportes y estadísticas
- Interfaz web responsiva
- API RESTful

## Tecnologías

### Backend

- Node.js con Express.js
- MongoDB con Mongoose
- JWT para autenticación
- bcryptjs para hash de contraseñas
- CORS para manejo de solicitudes cross-origin

### Frontend

- React con Vite
- React Router para navegación
- CSS para estilos

## Instalación

### Prerrequisitos

- Node.js (versión 16 o superior)
- MongoDB (local o en la nube)
- npm o yarn

### Pasos de instalación

1. Clona el repositorio:

   ```
   git clone <url-del-repositorio>
   cd web-main
   ```

2. Instala las dependencias del backend:

   ```
   cd backend/server
   npm install
   ```

3. Instala las dependencias del frontend:
   ```
   cd ../../frontend
   npm install
   ```

## Configuración

### Backend

1. Copia el archivo de configuración de ejemplo:

   ```
   cp config.env.example env
   ```

2. Edita el archivo `env` con tus configuraciones:
   - `MONGODB_URI`: URL de conexión a MongoDB
   - `JWT_SECRET`: Clave secreta para JWT
   - `PORT`: Puerto del servidor (por defecto 3001)
   - `FRONTEND_URL`: URL del frontend (por defecto http://localhost:5173)

### Base de datos

1. Asegúrate de que MongoDB esté ejecutándose
2. Inicializa la base de datos:
   ```
   npm run init-db
   ```
3. Crea usuarios por defecto:
   ```
   npm run insert-data
   ```

## Uso

### Iniciar el sistema completo

Desde la raíz del proyecto:

```
npm run start-full
```

Esto iniciará tanto el backend como el frontend simultáneamente.

### Iniciar componentes individuales

#### Backend

```
cd backend/server
npm run dev
```

#### Frontend

```
cd frontend
npm run dev
```

### Usuarios por defecto

- **Administrador**: usuario: `admin`, contraseña: `Admin2024!`
- **Cliente**: usuario: `cliente`, contraseña: `Cliente2024!`

## Estructura del proyecto

```
web-main/
├── backend/
│   └── server/
│       ├── controllers/
│       │   ├── authController.js
│       │   ├── siniestrosController.js
│       │   └── estadisticasController.js
│       ├── middleware/
│       │   └── auth.js
│       ├── models/
│       │   ├── User.js
│       │   └── Siniestro.js
│       ├── routes/
│       │   ├── auth.js
│       │   └── siniestros.js
│       ├── utils/
│       │   └── assignmentHelpers.js
│       ├── config/
│       │   └── database.js
│       ├── server.js
│       ├── init-database.js
│       ├── package.json
│       └── env
├── frontend/
│   ├── public/
│   │   └── image/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── hooks/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
├── config-verification.js
├── iniciar-sistema.bat
├── start-mongodb-setup.js
├── start-system.js
└── README.md
```

## API Endpoints

### Autenticación

- `POST /api/auth/register` - Registrar nuevo usuario
- `POST /api/auth/login` - Iniciar sesión
- `GET /api/auth/verify` - Verificar token
- `POST /api/auth/create-default-users` - Crear usuarios por defecto

### Siniestros

- `GET /api/siniestros` - Obtener todos los siniestros
- `POST /api/siniestros` - Crear nuevo siniestro
- `GET /api/siniestros/search` - Buscar siniestros
- `GET /api/siniestros/:id` - Obtener siniestro específico
- `PUT /api/siniestros/:id/estado` - Actualizar estado del siniestro

### Salud del sistema

- `GET /api/health` - Verificar estado del servidor

## Scripts disponibles

### Backend

- `npm start` - Iniciar servidor en producción
- `npm run dev` - Iniciar servidor en desarrollo con nodemon
- `npm run init-db` - Inicializar base de datos
- `npm run insert-data` - Insertar datos de ejemplo

### Frontend

- `npm run dev` - Iniciar servidor de desarrollo
- `npm run build` - Construir para producción
- `npm run preview` - Vista previa de la build
- `npm run start-full` - Iniciar backend y frontend

## Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -am 'Agrega nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## Autores

- **Sergio Villegas**
  ![Sergio Villegas](https://avatars.githubusercontent.com/u/78108240?v=4)

- **Jaime Arriagada**
  ![Jaime Arriagada](https://avatars.githubusercontent.com/u/163452202?v=4)

## Licencia

ISC
