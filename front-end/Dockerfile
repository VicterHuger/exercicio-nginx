FROM node:16

WORKDIR /app

COPY . .

RUN npm i

RUN npm run build

RUN mkdir -p /var/wwww/html

RUN mv build/* /var/wwww/html

WORKDIR /

RUN rm -rf /app
