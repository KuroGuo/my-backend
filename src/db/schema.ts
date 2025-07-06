import { mysqlTable, serial, varchar, int, text, boolean, timestamp } from 'drizzle-orm/mysql-core'

const timestamps = {
  created_at: timestamp().defaultNow().notNull(),
  updated_at: timestamp().onUpdateNow(),
  deleted_at: timestamp()
}

export const users = mysqlTable('users', {
  id: serial().primaryKey().autoincrement(),
  name: varchar({ length: 100 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  ...timestamps
})

export const posts = mysqlTable('posts', {
  id: serial().primaryKey().autoincrement(),
  title: varchar({ length: 255 }).notNull(),
  content: text(),
  author_id: int(),
  deleted: boolean(),
  ...timestamps
})