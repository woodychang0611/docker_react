FROM node:18-alpine3.15 as dev
Run mkdir /tmp/react
Copy package.json /tmp/react/
Run cd /tmp/react && npm install
Run mkdir /tmp/react/src
Copy ./src /tmp/react/src/
Run mkdir /tmp/react/public
Copy ./public /tmp/react/public/
Run cd /tmp/react &&  npm run build
Run chmod -R 777 /tmp/react/build

FROM nginx:1.23.1-alpine as prod
Copy --from=dev /tmp/react/build /usr/share/nginx/html 
#Run service nginx start
#Run nginx
#STOPSIGNAL SIGTERM
#CMD ["nginx", "-g", "daemon off;"]