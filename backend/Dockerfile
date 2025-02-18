# Imagen base de Node.js
FROM node:20

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar archivos del backend al contenedor
COPY package*.json ./

# Instalar dependencias
RUN npm install
RUN apt-get update && apt-get install -y default-mysql-client



# Copiar el resto del código
COPY . .

# Exponer el puerto en el que corre el backend
EXPOSE 5000

# Comando para ejecutar el backend
CMD ["npm", "start"]
