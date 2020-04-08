FROM node:12 as builder

RUN mkdir -p /app
WORKDIR /app
COPY . /app

RUN npm install

ARG REACT_APP_ENV=${EBSI_ENV}
RUN npm run build

# Front
FROM nginx:alpine

RUN mkdir -p /app
WORKDIR /app

RUN chown -R nginx:nginx /app && chmod -R 755 /app && \
  chown -R nginx:nginx /var/cache/nginx && \
  chown -R nginx:nginx /var/log/nginx && \
  chown -R nginx:nginx /etc/nginx/conf.d
RUN touch /var/run/nginx.pid && \
  chown -R nginx:nginx /var/run/nginx.pid

USER nginx

COPY --from=builder /app/build /app

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
