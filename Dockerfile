FROM node:8.9.1

WORKDIR /usr/src/app

# Install app dependencies
COPY package.json .
# For npm@5 or later, copy package-lock.json as well
# COPY package.json package-lock.json ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

COPY . .

EXPOSE 9999

CMD [ "npm", "start" ]