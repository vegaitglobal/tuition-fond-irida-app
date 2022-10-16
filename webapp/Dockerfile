ARG LIBRARY=docker.io
ARG DOCKER_TAG=16.11-alpine
ARG PLATFORM=linux/x86_64
ARG PORT=3000
ARG NODE_ENV=development

FROM --platform=${PLATFORM} ${LIBRARY}/node:${DOCKER_TAG} as build-step
ENV NODE_ENV=${NODE_ENV}
WORKDIR /src
COPY package.json /src
RUN npm install --quiet
COPY . /src
RUN npm run build

FROM --platform=${PLATFORM} ${LIBRARY}/node:${DOCKER_TAG}
WORKDIR /src
COPY --from=build-step /src /src
ENV NODE_ENV=${NODE_ENV}
EXPOSE ${PORT}
CMD [ "yarn", "start" ]