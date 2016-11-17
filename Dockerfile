FROM nginx:1.11.3-alpine

ENV APP_PATH /app
RUN mkdir -p $APP_PATH

# add app source code
COPY ./build/ /app
COPY docker/config/nginx.conf /etc/nginx/nginx.conf
