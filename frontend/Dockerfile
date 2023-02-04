FROM node:18.14-alpine

WORKDIR /frontend

COPY package*.json ./

COPY . .

RUN npm install

EXPOSE 3000

CMD [ "npm", "run", "dev"]
