FROM node:18.9 as prod
RUN mkdir /tmp/node
COPY package.json /tmp/node/
RUN cd /tmp/node && npm install
COPY *.js /tmp/node/.
ENV DB="http://mongo"
EXPOSE ${ServerPort}
CMD [ "node", "/tmp/node/server.js" ]


FROM mongo:6.0.2 as db