import {Request, RequestHandler, Response, Router} from 'express'
import { sendMessage } from '../controllers/discordController'

const triggerRoutes = Router()

triggerRoutes.post('/newAuth', (async (req: Request, res: Response) => {
    const count = req.body.count
    await sendMessage(count)
    res.json('OK')
  }) as RequestHandler)

export default triggerRoutes