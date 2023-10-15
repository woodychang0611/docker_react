FROM node:18.9 as prod
RUN mkdir /tmp/node
WORKDIR /tmp/node/
COPY package.json .
RUN cd /tmp/node && npm install
COPY *.js .
COPY *.json .
ENV DB="http://mongo"
EXPOSE ${ServerPort}
CMD [ "node", "server.js" ]


FROM mongo:6.0.2 as db