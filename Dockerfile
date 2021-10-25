FROM node:14.17.0-alpine as build-step
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install 
COPY . /app
RUN npm run build 


FROM nginx:1.20.1
COPY ./default.conf /etc/nginx/conf.d/default.conf
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build-step /app/build /usr/share/nginx/html
EXPOSE 80:80