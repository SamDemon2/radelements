# Используем Node.js как основу для сборки фронтенда
FROM node:20

WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

#RUN chmod +x /app/node_modules/.bin/react-scripts

# Устанавливаем зависимости
RUN npm install

# Копируем все файлы фронтенда
COPY . .

# Собираем фронтенд приложение
CMD npm start
#RUN npm run build
#
## Второй этап Dockerfile на основе nginx для сервера фронта
#FROM nginx:1.21
#
## Копируем собранное фронтенд приложение в nginx
#COPY --from=build /app/build /usr/share/nginx/html
