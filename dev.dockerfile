FROM node:14.15.4

ENV PORT 3000

# Create app directory
RUN mkdir -p /app
WORKDIR /app

# Installing dependencies
COPY package*.json /app/
RUN rm -rf node_modules && npm cache clear --force && yarn

# Copying source files
COPY next.config.js .
COPY . /app

# Building app
RUN npm run build
EXPOSE 3000

# Running the app
CMD "npm" "run" "next-dev"