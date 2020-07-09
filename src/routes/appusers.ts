import { Express } from 'express'
import { AppUserController } from '../endpoints/_index'
import { body, validationResult, Result, ValidationError } from 'express-validator/check'

export function routes(app: Express) {

  app.get('/api/appUsers', AppUserController.AppUserGet.list)
  app.post('/api/appUsers', [
    body('email').not().isEmpty().trim().normalizeEmail(),
    body('pwd').not().isEmpty().trim().escape(),
  ], (req, res) => {
    let errors: Result<ValidationError> = validationResult(req)
    if (errors.isEmpty() === false) {
      res.status(422).json({ errors: errors.array() })
      return
    }
    AppUserController.AppUserPost.create(req, res)
  })
  app.post('/api/appUsers/login', [
    body('pwd').not().isEmpty().trim().escape(),
    body('email').not().isEmpty().trim().normalizeEmail()
  ], AppUserController.AppUserPost.login)

}
