# Usa una imagen base de Node.js
FROM node:18

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el package.json y el package-lock.json a la imagen
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Expone el puerto 3000 para acceder a la aplicación desde fuera del contenedor
EXPOSE 5000

# Comando para ejecutar la aplicación cuando se inicie el contenedor
CMD ["npm", "run", "start"]
