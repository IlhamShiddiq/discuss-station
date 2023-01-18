FROM node:latest AS build
WORKDIR /build

COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm i

COPY public/ public
COPY src/ src
RUN npm run build

RUN npm install -g serve
CMD serve -l 3032 -s build
