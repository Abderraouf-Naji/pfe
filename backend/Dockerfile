# Utilisez une image de base qui prend en charge Node.js
FROM node:latest

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers du backend dans le conteneur
COPY . .

# Installer les dépendances du backend
RUN npm install

# Exposer le port sur lequel le backend écoute
EXPOSE 5000

# Définir une variable d'environnement pour la connexion à la base de données MongoDB
ENV MONGODB_URL=mongodb+srv://root:1234@ccluster0.hsgng0p.mongodb.net/EStore

# Commande pour démarrer le serveur backend
CMD ["node", "index.js"]