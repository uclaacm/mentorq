FROM node:alpine

ADD package.json /app/package.json
RUN cd /app && npm install
RUN mkdir -p /opt/app && cp -a /app/node_modules /opt/app/

WORKDIR /opt/app
ADD . /opt/app

CMD npm run dev