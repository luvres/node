# NodeJS

```
git clone https://github.com/luvres/node.git
cd node

mkdir $HOME/node 2>/dev/null

cp app.js index.html $HOME/node
```

```
docker run --rm --name NodeJS -h nodejs \
-w /root \
-v $HOME/node:/root \
-p 3000:3000 \
-ti node:6-alpine ash
```

```
node app.js

http://localhost:3000/
```

