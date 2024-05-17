import { migrate as mig } from "drizzle-orm/aws-data-api/pg/migrator";
import { db } from "./client";

export async function migrate(migrationsPath: string) {
  return mig(db, { migrationsFolder: migrationsPath });
}

migrate("migrations");
