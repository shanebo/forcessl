# ForceSSL

Middleware for Calvin which redirects http requests to https.

## Install

`npm install @calvin/forcessl`

## Usage

``` js
const forcessl = require('@calvin/forcessl');
app.use(forcessl());
```

`http://foo.com` redirects to `https://foo.com`.
