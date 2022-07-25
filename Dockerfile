FROM node:16-alpine as dev

WORKDIR /usr/src/app

COPY package*.json ./

CMD npm install && export HTTPS=true&&SSL_CRT_FILE=./cert/cert.pem&&SSL_KEY_FILE=./cert/privkey.pem && npm run start

FROM node:16-alpine as prod

WORKDIR /usr/src/app

COPY package*.json ./
COPY /cert/*.pem ./cert/

CMD npm -g install serve && npm install --production && npm run build && serve -s build --ssl-cert "./cert/cert.pem" --ssl-key "./cert/privkey.pem"
