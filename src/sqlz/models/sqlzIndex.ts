import { Sequelize } from 'sequelize-typescript'
import { Country } from './global/Country'
import { Province } from './global/Province'
import { City } from './global/City'
import { Compony } from './base/Compony'
import { Emploee } from './base/Emploee'

const config = require('../config/config.json')

const dbConfig = config[process.env.NODE_ENV]
const sequelize = new Sequelize(
  dbConfig['database'],
  dbConfig['username'],
  dbConfig['password'],
  dbConfig
)

sequelize.addModels([Country, Province, City, Compony, Emploee]);
sequelize.sync({
  force: true
})

export default sequelize
