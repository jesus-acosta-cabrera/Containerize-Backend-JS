FROM node:20-alpine3.16

WORKDIR /src/app

COPY . /src/app/

RUN npm install

EXPOSE 5000

CMD ["npm","run","start"]