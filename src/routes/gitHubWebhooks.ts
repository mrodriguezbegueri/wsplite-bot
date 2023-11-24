import { Request, RequestHandler, Response, Router } from 'express'
import { sendMessage } from '../controllers/discordController'

const gitHubWebhooks = Router()

gitHubWebhooks.post('/git/pullRequest', (async (req: Request, res: Response) => {
    const { action, pull_request, repository } = req.body

    try {
        if (pull_request === undefined) {
            return
        }

        if (action === undefined || action !== 'opened') {
            return
        }

        const message = `Nuevo PR en el proyecto ${repository.name} \n PR: ${pull_request.html_url}`
        await sendMessage(message)

        res.json('OK')
    } catch (err) {
        console.log('err', err)
    }

}) as RequestHandler)

export default gitHubWebhooks