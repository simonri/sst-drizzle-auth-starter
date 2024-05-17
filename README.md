# SST + Drizzle + Auth Starter

### Features

- [**Next.js**](https://nextjs.org/) - A powerful React framework for web applications.
- [**Drizzle ORM**](https://orm.drizzle.team/) - A modern TypeScript ORM for SQL databases.
- [**Amazon Postgres RDS**](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless-v2.html) - A managed PostgreSQL database service.
- [**Auth.js**](https://authjs.dev/) - A simple authentication library.

### Quick start

Install dependencies:

```bash
bun install
```

Login to AWS:

```bash
bun sso
```

Setup secrets:

```bash
bun run sst set GoogleClientId <id>
bun run sst set GoogleClientSecret <secret>
```

Create and setup AWS:

```bash
bun dev
```

Migrate the database:

```bash
cd packages/frontend
bun db:generate
bun db:migrate
```

Deploy:

```bash
cd ../..
bun run deploy
```

---

For more information, please refer to the [docs](https://ion.sst.dev/docs/).
