import type { Config } from 'drizzle-kit';
import 'dotenv/config';

export default {
  schema: './db/schema.ts',
  out: './db/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
    // host: process.env.POSTGRES_HOST!,
    // user: process.env.POSTGRES_USER!,
    // password: process.env.POSTGRES_PASSWORD!,
    // database: process.env.POSTGRES_DATABASE!,
    // ssl: { rejectUnauthorized: false }
  },
} satisfies Config;