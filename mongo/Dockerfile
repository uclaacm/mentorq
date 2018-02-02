# start with a lightweight linux image
FROM node:alpine

# add necessary packages
RUN apk update && \
    apk upgrade && \
    apk add bash curl mongodb && \
    rm -rf /var/cache/apk/*

# persist db data
RUN mkdir -p /data/db
VOLUME /data/db

# configure database container for security
RUN rm -rf /usr/bin/mongoperf

# open ports
EXPOSE 27017 28017

CMD ["mongod"]