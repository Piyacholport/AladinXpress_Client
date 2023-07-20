FROM node:19 
WORKDIR /usr/src/app/client
COPY package*.json ./
RUN yarn
COPY . .
EXPOSE 8080
CMD ["yarn", "preview"]