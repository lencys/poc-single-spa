# Základný obraz, napríklad Node.js
FROM node:20 as build

# Nastavenie pracovného adresára v kontajneri
WORKDIR /app

# Kopírovanie súborov potrebných pre build
COPY package*.json ./
COPY vite.config.ts ./
COPY tsconfig.json ./
COPY index.html ./
COPY src ./src
COPY public ./public

# zmažem nechcený súbor
RUN rm src/importMap.dev.json

# Inštalácia závislostí a build aplikácie
RUN npm install
RUN npm run build

# Nastavenie finálneho obrazu, napríklad s nginx
FROM nginx:alpine-slim

#COPY nginx.conf /etc/nginx/nginx.conf

# Kopírovanie vygenerovaných súborov do obrazu --from=build
COPY --from=build /app/dist /usr/share/nginx/html

# Nastavenie príkazu pre spustenie nginx
CMD ["nginx", "-g", "daemon off;"]
