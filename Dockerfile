FROM node:8

LABEL Author GoFriendly 2018

RUN mkdir -p /app
WORKDIR /app

ENV NODE_ENV=production

COPY package.json .
RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "start"]
