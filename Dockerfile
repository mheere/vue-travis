FROM node:lts-alpine

# set the current working directory
WORKDIR /app

# install the simple http server for serving static content
RUN npm install -g http-server

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies
RUN npm install

# copy project files and folders to the current working directory 
COPY . .

# build app for production
RUN npm run build

# expose a port to the outside
EXPOSE 5000

# execute this command when a container is created from this image
CMD [ "http-server", "-p 5000", "dist" ]
