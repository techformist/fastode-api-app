# fastode

This is a boilerplate is for creating an API server using Fastode, an opinionated web API server based on Fastify.

** Work in progress. **

Follow [@techformist](https://twitter.com/techformist) for updates.

Inspired by Laravel, AdonisJS and Fastify - Fastode builds on great work of smart developers to provide a toolset that let's you focus on building something beautiful.

The API app comes pre-configured with -

1. Authentication
2. CORS
3. Knex ORM
4. Migrations

## Install

Use `fastode` CLI to install.

```
fastode new my-app
```

Or, simply clone this repository and do an install - the end result is the same.

```
git clone https://github.com/techformist/fastode-api-app.git
npm install
```

## Usage

Copy `.env.example` to `.env`, and update parameter values.

Monitor and react to changes (in development, yes):

```
npm run dev
```

Use [PM2](https://www.npmjs.com/package/pm2) in production to maintain sanity and assure well being of all. Or, do -

```
npm run start
```

## License

Licensed under [MIT](https://github.com/techformist/fastode-api-app/blob/master/LICENSE).
