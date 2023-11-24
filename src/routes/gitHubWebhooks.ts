import {Request, RequestHandler, Response, Router} from 'express'

const gitHubWebhooks = Router()

gitHubWebhooks.post('/git/pullRequest', (async (req: Request, res: Response) => {
    console.log('### BODY ###', req.body)
    res.json('OK')
  }) as RequestHandler)

export default gitHubWebhooks