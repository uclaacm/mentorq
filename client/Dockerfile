FROM node:alpine

# set working directory
RUN mkdir -p /src/app
WORKDIR /src/app

# add `/src/app/node_modules/.bin` to $PATH
ENV PATH /src/app/node_modules/.bin:$PATH

ADD . /src/app

# start app
CMD ["npm", "start"]
