import { defineConfig } from "drizzle-kit";

export default defineConfig({
  driver: "aws-data-api",
  dialect: "postgresql",
  schema: ["./src/db/schema.ts"],
  out: "./migrations",
});
