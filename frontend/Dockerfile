# Imagen base de Node.js
FROM node:20

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar archivos del frontend al contenedor
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código
COPY . .

# Construir el frontend
RUN npm run build

# Servir el frontend usando un servidor web
RUN npm install -g serve
CMD ["serve", "-s", "build"]

# Exponer el puerto en el que correrá el frontend
EXPOSE 3000
