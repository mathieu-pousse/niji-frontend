FROM mhart/alpine-node:6
WORKDIR /opt/app
ADD . .
RUN npm install
CMD ["npm","test"]
