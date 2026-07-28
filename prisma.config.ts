import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema",
  migrations: {
    path: "prisma/schema/migrations",
  },
  datasource: {
    url: process.env["DATABASE_URL"],
  },
});
