FROM node:14-alpine AS build-deps
ENV NODE_OPTIONS=--max_old_space_size=3072
ENV GENERATE_SOURCEMAP=false
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --force
COPY .env* ./
COPY src/ ./src/
COPY public/ ./public/
RUN npm run build

FROM nginx:alpine

ENV PUBLIC_HTML=/usr/share/nginx/html/

COPY --from=build-deps /usr/src/app/build ${PUBLIC_HTML}
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]