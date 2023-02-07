FROM node:18.14-alpine

WORKDIR /frontend

COPY package*.json ./

COPY . .

RUN npm install

EXPOSE 5173

CMD ["npm", "start"]
