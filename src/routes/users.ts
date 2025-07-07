import type { Request, Response } from 'express'
import express from 'express'
import { eq } from 'drizzle-orm'
import { db } from '../db'
import { users } from '../db/schema'

const router = express.Router()

router.post('/', async (req: Request, res: Response) => {
  try {
    const { name, email } = req.body
    const newUser = await db.insert(users).values({ name, email })
    res.status(201).json({ id: newUser[0].insertId })
  } catch (error) {
    res.status(500).json({ error: 'Database error' })
  }
})

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const user = await db.select().from(users).where(eq(users.id, Number(id)))

    if (!user.length) {
       res.status(404).json({ error: 'User not found' })
       return
    }

    res.json(user[0])
  } catch (error) {
    res.status(500).json({ error: 'Database error' })
  }
})

export default router