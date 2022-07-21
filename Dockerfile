FROM node:16-alpine as dev

WORKDIR /usr/src/app

COPY package*.json .

CMD npm install && npm run start
