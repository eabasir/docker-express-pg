FROM node:8-alpine
RUN mkdir /express_pg
ADD . /express_pg
WORKDIR /express_pg
RUN npm i
EXPOSE 80
CMD ["npm", "start"]
