FROM node:23-alpine AS builder

WORKDIR /app

COPY package*.json ./
COPY tsconfig*.json ./
COPY . .

RUN npm install

RUN npm run build:shared && npm run build:client

EXPOSE 4200

CMD ["npm", "run", "start"]
