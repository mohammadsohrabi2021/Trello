FROM node:alpine
RUN mkdir -p /app
WORKDIR /app
COPY package*.json /app
RUN npm install
COPY . /app
RUN yarn build
EXPOSE 80
CMD [ "yarn", "start" ]