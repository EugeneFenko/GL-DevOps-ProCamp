FROM node:10

WORKDIR ./

COPY package*.json ./

COPY . .

CMD [ "sh", "-c", "node netop.js $SHOW"]