# stage 1

FROM node:12.7-alpine AS build

WORKDIR /app
COPY . .
RUN npm install && npm run build

# stage 2

FROM nginx:alpine

COPY --from=build /app/dist/firstApp /usr/share/nginx/html

EXPOSE 80


