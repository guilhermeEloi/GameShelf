FROM node:22-slim

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY . .

RUN npx prisma generate

EXPOSE 3333

CMD ["yarn", "dev"]
