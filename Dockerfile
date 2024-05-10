FROM pwncollege-challenge

USER root
WORKDIR /

RUN curl -fsSL https://deb.nodesource.com/setup_20.x | /bin/bash /dev/stdin
RUN apt-get install -y mongodb nodejs
RUN npm install -g nodemon bcrypt body-parser cors dotenv express gridfs-stream helmet jsonwebtoken mongoose morgan multer multer-gridfs-storage

USER hacker
WORKDIR /home/hacker
