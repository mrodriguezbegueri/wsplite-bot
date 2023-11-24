import {Request, RequestHandler, Response, Router} from 'express'
import { sendMessage } from '../controllers/discordController'

const triggerRoutes = Router()

triggerRoutes.post('/newAuth', (async (req: Request, res: Response) => {
    const count = req.body.count

    const message = `Hay ${count} conexiones activas`

    await sendMessage(message)
    res.json('OK')
  }) as RequestHandler)

export default triggerRoutes