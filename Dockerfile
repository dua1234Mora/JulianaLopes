FROM node:14.17.0-alpine as build-step
RUN mkdir -p /home/app
WORKDIR /home/app
COPY package.json /home/app
RUN npm install
COPY . /home/app

RUN npm build --prod


FROM nginx:1.20.1
COPY --from=build-step /home/app /usr/share/nginx/html
EXPOSE 4200:80
