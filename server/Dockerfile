FROM node as builder
WORKDIR /usr/app
COPY package*.json ./
RUN npm install
COPY . .
CMD npm run build

FROM node
WORKDIR /usr/app
COPY package*.json ./
RUN npm install --production
COPY --from=builder /usr/app/dist ./dist
CMD node dist/src/index.js