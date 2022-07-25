FROM node:16-alpine as dev

WORKDIR /usr/src/app

COPY package*.json ./

CMD npm install && export HTTPS=true&&SSL_CRT_FILE=.${SSL_VOLUME}/cert.pem&&SSL_KEY_FILE=${SSL_VOLUME}/privkey.pem && npm run start

FROM node:16-alpine as prod

WORKDIR /usr/src/app

COPY package*.json ./
COPY ${SSL_VOLUME}/*.pem ./cert/

CMD npm -g install serve && npm install --production && npm run build && serve -s build --ssl-cert "${SSL_VOLUME}/cert.pem" --ssl-key "${SSL_VOLUME}/privkey.pem"
