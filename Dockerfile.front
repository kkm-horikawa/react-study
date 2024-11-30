FROM node:23-alpine3.19

COPY ./front/react-typescript-weather-app /front/react-typescript-weather-app

WORKDIR /front/react-typescript-weather-app
RUN npm install
EXPOSE 5173
ENV CI true
CMD ["npm", "run", "dev", "--", "--port", "5173"]
