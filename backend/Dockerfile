# Imagen base de Node.js
FROM node:20

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar archivos del backend al contenedor
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del c�digo
COPY . .

# Exponer el puerto en el que corre el backend
EXPOSE 5000

# Comando para ejecutar el backend
CMD ["npm", "start"]
