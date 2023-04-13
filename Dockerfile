FROM node:alpine

ENV NODE_ENV=production
ENV PORT=4000
ENV DATABASE_URL="${DATABASE_URL}"
ENV OPENAI_API_KEY="${OPENAI_API_KEY}"

WORKDIR /usr/src/app

COPY package.json ./
COPY apps/server/package.json ./apps/server/package.json
COPY packages/api/package.json ./packages/api/package.json
COPY packages/db/package.json ./packages/db/package.json
COPY yarn.lock ./

RUN apk add --no-cache ffmpeg yt-dlp curl
RUN npm install -g turbo
RUN yarn install

COPY . .

RUN yarn build --filter server

EXPOSE 4000

CMD [ "yarn", "workspace", "server", "start" ]

