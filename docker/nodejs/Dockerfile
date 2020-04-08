FROM node:12.16.1-alpine

RUN apk update && apk add python make g++ && rm -rf /var/cache/apk/*

RUN mkdir -p /api
WORKDIR /api
COPY . /api

RUN chown node:node /api
USER node

RUN npm install

EXPOSE 3000/tcp

CMD [ "npm", "start" ]
