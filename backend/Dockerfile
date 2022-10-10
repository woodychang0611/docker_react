FROM node:18.9 as prod
Run mkdir /tmp/node
Copy package.json /tmp/node/
Run cd /tmp/node && npm install
Copy server.js /tmp/node/.

EXPOSE ${ServerPort}
CMD [ "node", "/tmp/node/server.js" ]
