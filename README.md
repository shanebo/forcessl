# ForceSSL

Middleware for Dylan which redirects http requests to https.

## Install

`npm install @dylan/forcessl`

## Usage

``` js
const forcessl = require('@dylan/forcessl');
app.use(forcessl());
```

`http://foo.com` redirects to `https://foo.com`.
