# Usa una imagen base de Node.js, npm 10.2.4
FROM node:20.11.0

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia el package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto del código del proyecto al directorio de trabajo
COPY . .

# Expone el puerto que Vite usa por defecto
EXPOSE 3000

# Comando por defecto para iniciar la aplicación
CMD ["npm", "run", "dev"]
