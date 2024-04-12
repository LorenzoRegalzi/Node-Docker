# Usa un'immagine di Node.js leggera
FROM node:16-alpine

# Imposta la directory di lavoro all'interno del container
WORKDIR /app

# Copia i file del package.json e del package-lock.json per installare le dipendenze
COPY package*.json ./

# Esegui npm install per installare le dipendenze
RUN npm install

# Copia il resto del codice dell'applicazione
COPY . .

# Espone la porta su cui l'applicazione Node.js sarà in ascolto (assumendo che l'applicazione ascolti sulla porta 3000)
EXPOSE 3000

# Comando per avviare l'applicazione Node.js
CMD ["node", "index.js"]