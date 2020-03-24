FROM node

WORKDIR /root/app

RUN npm i -g @ionic/cli cordova @angular/cli --verbose

RUN apt-get update -y && apt-get install -y openjdk-8-jdk 

EXPOSE 8100