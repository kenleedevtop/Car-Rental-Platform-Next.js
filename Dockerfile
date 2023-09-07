FROM node as build

RUN apt update && apt upgrade -y
RUN apt install -y nano telnet net-tools procps

COPY . /app

WORKDIR /app

RUN npm install --force
RUN npm run build
CMD npm start

#RUN npm run export
#CMD sleep 99999
#FROM nginx
#
#
#COPY --from=build /app/out /app
#COPY app.conf /etc/nginx/conf.d/app.conf





