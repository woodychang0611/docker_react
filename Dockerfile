FROM node:18.9 as dev
Run mkdir /tmp/react
Copy package.json /tmp/react/
Run cd /tmp/react && npm install
Copy ./src /tmp/react/src/
Copy ./public /tmp/react/public/
Copy ./webpack.config.js /tmp/react/
ENV REACT_APP_ENV_VAR="some build time variable"
Run cd /tmp/react &&  npm run build


FROM nginx:1.23.1 as prod
#copy built file from dev
Copy --from=dev /tmp/react/build /usr/share/nginx/html 
