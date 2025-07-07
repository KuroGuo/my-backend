import express from 'express'
import dotenv from 'dotenv'
import routes from './routes'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.use(routes)

app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack)
  res.status(500).json({ error: 'Internal Server Error' })
})

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))