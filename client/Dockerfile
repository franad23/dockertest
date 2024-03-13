# Usa una imagen base de Node.js
FROM node:20-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el package.json y el package-lock.json a la imagen
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Compila la aplicación para producción
RUN npm run build

# Expone el puerto 5173 para acceder a la aplicación desde fuera del contenedor
EXPOSE 5173

# Comando para ejecutar la aplicación en un entorno de producción
CMD ["npm", "run", "dev"]
