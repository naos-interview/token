FROM node:18.7 AS development
WORKDIR /usr/src/app
COPY . .
RUN yarn install
RUN yarn run build
CMD yarn run start:prod

# FROM node:18.7 AS production
# ENV NODE_ENV=production
# WORKDIR /usr/src/app
# COPY package*.josn ./
# RUN yarn install
# COPY . .
