# Verwende das Node.js-Image als Basis
FROM node:latest

# Setze das Arbeitsverzeichnis innerhalb des Containers
WORKDIR /api

# Installiere die Abhängigkeiten
COPY ./package*.json ./

# Kopiere den gesamten Inhalt der "api"-Ordnerstruktur in den Container
COPY ./api ./

# Führe den Befehl `npm run start` aus, um die App zu starten
CMD ["npm", "run", "start"]
