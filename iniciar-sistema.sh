#!/bin/bash

echo "==============================================="
echo "   SISTEMA DE DESARROLLO - CONTROL DE SINIESTROS"
echo "==============================================="
echo ""
echo "Iniciando servicios del sistema..."
echo ""

# Verificar si Node.js está instalado
if ! command -v node &> /dev/null; then
    echo "ERROR: Node.js no está instalado o no está en el PATH"
    echo "Por favor instala Node.js desde https://nodejs.org"
    exit 1
fi

echo "[OK] Node.js encontrado"
echo ""

# Iniciar Backend en segundo plano
echo "Iniciando Backend (Puerto 3001)..."
(cd backend/server && npm start) &

# Esperar un momento para que el backend inicie
sleep 3

# Iniciar Frontend en segundo plano
echo "Iniciando Frontend (Puerto 5173)..."
(cd frontend && npm run dev) &

echo ""
echo "==============================================="
echo "   SERVICIOS INICIADOS EXITOSAMENTE"
echo "==============================================="
echo ""
echo "Backend:    http://localhost:3001"
echo "Frontend:   http://localhost:5173"
echo ""
echo "IMPORTANTE:"
echo "- No cierres esta terminal hasta que hayas terminado de usar el sistema"
echo "- Para cerrar el sistema, presiona Ctrl+C aqui o cierra los procesos manualmente"
echo ""
echo "Presiona Enter para continuar..."
read

echo ""
echo "Los servicios siguen activos en segundo plano."