# fastode

This is a boilerplate is for creating an API server using Fastode, an opinionated web API boilerplate. Yes, you can say this is a boilerplate of a boilerplate.

** Do not use. Work in progress. **

Follow [@techformist](https://twitter.com/techformist) for updates.

Inspired by great frameworks, Fastode builds on great work of smart developers to provide a toolset that let's you focus on building something beautiful right out the box.

The API app comes pre-configured with -

1. Helmet
1. CORS
1. Sensible defaults

## Install

Simply clone this repository and do an install - the end result is the same.

```
git clone https://github.com/techformist/fastode-api-app.git
cd fastode-api-app
npm install
```

Copy `.env.example` to `.env` if it is not already created.

- update paramter values
- validate a valid 16-character random string generated against `APP_KEY`.

## Usage

Monitor and react to changes in development:

```
npm run dev
```

Use [PM2](https://www.npmjs.com/package/pm2) in production to maintain sanity and assure well being of all. Or, you could do -

```
npm run start
```

## License

Licensed under [MIT](https://github.com/techformist/fastode-api-app/blob/master/LICENSE).
