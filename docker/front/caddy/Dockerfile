FROM node:12.11-stretch as builder

ARG PROJECT_DIR
WORKDIR $PROJECT_DIR

ADD web/package.json $PROJECT_DIR/package.json
ADD web/package-lock.json $PROJECT_DIR/package-lock.json
ADD web/package.json $PROJECT_DIR/package.json

RUN npm config set registry http://registry.npmjs.org

RUN npm install


ADD /web/src $PROJECT_DIR/src
ADD /web/.env.production $PROJECT_DIR/.env.production

RUN npm run build-prod

FROM abiosoft/caddy:1.0.0-no-stats as caddy
ARG PROJECT_DIR
COPY --from=builder $PROJECT_DIR/dist/ /srv
COPY web/Caddyfile /etc/Caddyfile

EXPOSE 80
