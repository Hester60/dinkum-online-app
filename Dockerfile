FROM node:16-alpine as dev

WORKDIR /usr/src/app

COPY package*.json .

CMD npm install && npm run start

FROM node:16-alpine as prod

WORKDIR /usr/src/app

COPY package*.json .

CMD npm -g install serve && npm install --production && npm run build && serve -s build
