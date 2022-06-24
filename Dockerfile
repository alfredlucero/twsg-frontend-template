# See latest Node tags here: https://hub.docker.com/_/node?tab=tags&page=1&ordering=last_updated
FROM node:14.18.0

RUN mkdir -p /opt/frontend
WORKDIR /opt/frontend


COPY package.json /opt/frontend
COPY package-lock.json /opt/frontend
RUN npm ci

COPY . /opt/frontend

EXPOSE 3000

CMD ["npm", "run", "build", "npm", "run", "export"]
