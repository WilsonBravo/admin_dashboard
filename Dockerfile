FROM node:23-alpine AS builder

WORKDIR /app

COPY package*.json ./
COPY tsconfig*.json ./
COPY . .

RUN npm install

EXPOSE 4200

CMD ["npm", "run", "start"]
