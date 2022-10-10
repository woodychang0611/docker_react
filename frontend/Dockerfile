FROM node:18.9 as dev
# Build args
ARG SERVER_URL
# Environment vars
ENV SERVER_URL=${SERVER_URL}
RUN mkdir /tmp/react
COPY package.json /tmp/react/
RUN cd /tmp/react && npm install
COPY ./src /tmp/react/src/
COPY ./config /tmp/react/config/
RUN cd /tmp/react/config/ && printenv>env && node updateConfig.js>log
COPY ./public /tmp/react/public/
COPY ./webpack.config.js /tmp/react/
RUN cd /tmp/react && npm run build

FROM nginx:1.23.1 as prod
ARG SERVER_URL
# Environment vars
ENV SERVER_URL=${SERVER_URL}
#copy built file from dev
COPY --from=dev /tmp/react/build /usr/share/nginx/html
COPY --from=dev /tmp/react/config /tmp
