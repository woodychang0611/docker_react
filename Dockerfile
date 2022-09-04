FROM node:18-alpine3.15
Run mkdir /tmp/react
Copy package.json /tmp/react/
Run cd /tmp/react && npm install
Run mkdir /tmp/react/src
Copy ./src /tmp/react/src/
Run mkdir /tmp/react/public
Copy ./public /tmp/react/public/
Run cd /tmp/react &&  npm run build
