import { drizzle } from 'drizzle-orm/mysql2'
import mysql from 'mysql2/promise'
import * as schema from './schema'
import 'dotenv/config'
import { migrate } from 'drizzle-orm/mysql2/migrator'

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
  // waitForConnections: true,
  // connectionLimit: 10,
})

export const db = drizzle(pool, { schema, mode: 'default' })

if (process.env.NODE_ENV === 'production') {
  migrate(db, { migrationsFolder: 'drizzle/migrations' })
}