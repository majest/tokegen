FROM node:alpine
COPY . /app
WORKDIR /app
RUN npm install
ENTRYPOINT ["/usr/local/bin/node","/app/index.js"]