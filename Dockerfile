# Step 1: Use the official Node.js image as the base image
FROM node:20.19.4-slim

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

EXPOSE 3000

CMD ["node", "build/server.js"]
