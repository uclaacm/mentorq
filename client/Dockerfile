FROM node:alpine

# set working directory
RUN mkdir -p /src/app
WORKDIR /src/app

# add `/src/app/node_modules/.bin` to $PATH
ENV PATH /src/app/node_modules/.bin:$PATH

# install and cache app dependencies
ADD package.json /src/app/package.json
RUN npm install
RUN npm install react-scripts@0.9.5 -g
ADD . /src/app

# start app
CMD ["npm", "start"]