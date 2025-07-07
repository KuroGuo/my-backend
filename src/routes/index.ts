import { Router } from 'express'
import users from './users'

const router = Router()
const apiRouter = Router()

apiRouter.use('/users', users)

router.use('/api', apiRouter)
export default router