# Construire l'application frontend
FROM node:latest as builder

# Définir le répertoire de travail dans le conteneur pour la phase de build
WORKDIR /app

# Copier les fichiers du frontend dans le conteneur
COPY . /app

# Installer les dépendances et construire l'application
RUN npm install && npm run build

# Utiliser Nginx pour servir l'application
FROM nginx:latest as runtime

# Copier les fichiers construits dans le répertoire par défaut de Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Copier le fichier de configuration Nginx si nécessaire
# COPY nginx.conf /etc/nginx/nginx.conf

CMD ["nginx", "-g", "daemon off;"]