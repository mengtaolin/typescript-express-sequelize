import * as winston from 'winston'
import { Express, Request, Response } from 'express'
import { CountryRouter } from './global/CountryRouter';

export function initRoutes(app: Express) {
  winston.log('info', '--> Initialisations des routes')

  app.get('/api', (req: Request, res: Response) => res.status(200).send({
    message: 'server is running!'
  }))

  // LanguagesRoutes.routes(app)
  // AppUserRoutes.routes(app)
  new CountryRouter(app);

  app.all('*', (req: Request, res: Response) => res.boom.notFound())
}
