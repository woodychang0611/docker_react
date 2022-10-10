FROM node:18.9 as prod
Run mkdir /tmp/node
Copy package.json /tmp/node/
Run cd /tmp/node && npm install
Copy server.js /tmp/node/.
ENV DB="http://mongo"
EXPOSE ${ServerPort}
CMD [ "node", "/tmp/node/server.js" ]


FROM mongo:6.0.2 as db