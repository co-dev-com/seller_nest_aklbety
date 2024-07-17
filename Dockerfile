FROM node:20.12.2

WORKDIR /app/nest_api

RUN npm i -g @nestjs/cli

COPY package.json ./

RUN npm i

COPY . ./

EXPOSE 3000

CMD [ "nest", "start" ]

