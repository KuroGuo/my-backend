import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';
import * as schema from './schema';
import 'dotenv/config';
import { sql } from 'drizzle-orm';

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
});

export const db = drizzle(pool, { schema, mode: 'default' });

// 初始化表
db.execute(sql`
  CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE
  )
`)

// 添加新列
db.execute(sql`ALTER TABLE users ADD COLUMN age INT`).catch(err => {
  console.log(err)
})

// 添加新列
db.execute(sql`ALTER TABLE users ADD COLUMN balance INT`).catch(err => {
  console.log(err)
})