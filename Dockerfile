FROM node:18-alpine3.15 as dev
Run mkdir /tmp/react
Copy package.json /tmp/react/
Run cd /tmp/react && npm install
Copy ./src /tmp/react/src/
Copy ./public /tmp/react/public/
Run cd /tmp/react &&  npm run build

FROM nginx:1.23.1-alpine as prod
#copy built file from dev
Copy --from=dev /tmp/react/build /usr/share/nginx/html 
