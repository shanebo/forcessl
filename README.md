# ForceSSL

Middleware for Dylan which redirects http requests to https.

## Install

`npm install @dylanjs/forcessl`

## Usage

``` js
const forcessl = require('@dylanjs/forcessl');
app.use(forcessl());
```

`http://foo.com` redirects to `https://foo.com`.
