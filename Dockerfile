FROM alpine:3.18

ENV NODE_VERSION 18.19.1

WORKDIR /app

COPY . .

RUN npm install

CMD ["npm", "run", "start", "air-freight"]