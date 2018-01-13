### Create directory
```
mkdir -p $HOME/node
cd $HOME/node
mkdir project
cd project
```
### Express
##### npm init
```
docker run -ti --rm -v $PWD:/root -w /root node:carbon-alpine npm init
```
##### Install Express
```
docker run -ti --rm -v $PWD:/root -w /root node:carbon-alpine npm install express --save
```
##### Files
```
curl -O https://raw.githubusercontent.com/luvres/node/master/app.js
curl -O https://raw.githubusercontent.com/luvres/node/master/index.html
```
##### Run node
```
docker run -d --rm --name Node -h node \
-p 3000:3000 \
-w /root \
-v $PWD:/root \
node:carbon-alpine node app.js
```
### Nodemon
##### install
```
docker run -ti --rm -v $PWD:/root -w /root node:carbon-alpine npm install nodemon --save
```
##### Run nodemon
```
docker run -d --rm --name Node -h node \
-p 3000:3000 \
-w /root \
-v $PWD:/root \
node:carbon-alpine \
/root/node_modules/nodemon/bin/nodemon.js app.js
```
##### Browser
```
http://localhost:3000/
```

### Version
##### Node
```
docker run --rm node:carbon-alpine node -v
```
##### npm
```
docker run --rm node:carbon-alpine npm -v
```

-----
### Http Server
##### Create dir
```
mkdir http-server
cd http-server
```
##### Run http-server
```
docker run -d --rm --name Http \
-p 80:8080 \
-v $PWD:/root \
izone/arm:node-lts ash -c "npm i http-server -g && http-server /root"
```
##### Copy the public dir
```
docker run -ti --rm -v $PWD:/root \
izone/arm:node-lts \
ash -c "npm i http-server -g && cp -a /usr/local/lib/node_modules/http-server/public /root"
```
##### Permition
```
sudo chown -R $USER. public
```
##### Run http-server
```
docker run -d --rm --name Http \
-p 8080:8080 \
-v $PWD:/root \
-w /root izone/arm:node-lts ash -c "npm i http-server -g && http-server"
```
##### Browser
```
http://localhost:8080/
```

