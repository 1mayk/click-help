FROM node:18.14-alpine

WORKDIR /frontend

COPY package*.json ./

EXPOSE 5173

COPY . .

RUN ["npm", "install"]

CMD ["npm", "start"]
