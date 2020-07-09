import express from 'express'
import * as winston from 'winston'
import boom from 'express-boom'
import morgan from 'morgan'
import cors from 'cors'
import { json, urlencoded } from 'body-parser'
import { Express } from 'express'
import * as routes from './routes/_index'
import sequelize from './sqlz/models/sqlzIndex'

const PORT: number = 3000

/**
 * Root class of your node server.
 * Can be used for basic configurations, for instance starting up the server or registering middleware.
 */
export class Server {

  private app: Express

  constructor() {
    this.app = express();

    // Express middleware
    this.app.use(cors({
      optionsSuccessStatus: 200
    }))
    this.app.use(urlencoded({
      extended: true
    }))
    this.app.use(json())
    this.app.use(boom())
    this.app.use(morgan('combined'))
    this.app.listen(PORT, () => {
      winston.log('info', '--> Server successfully started at port %d', PORT)
    })
    routes.initRoutes(this.app)
    sequelize.sync({
      force: false
    })
  }

  getApp() {
    return this.app
  }
}
new Server()
