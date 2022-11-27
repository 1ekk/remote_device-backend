FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN mkdir /config

VOLUME /config

COPY . .

ENV PORT=8080

EXPOSE 8080

CMD ["npm", "start"]