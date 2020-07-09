import { Model } from 'sequelize-typescript'
import sequelize from './sqlzIndex'
import { Language } from './language'
import { DataTypes } from 'sequelize/types'

export class AppUser extends Model {

}

export class AppUserModel {
  id: string
  name: string
  pwd: string
  createdAt: Date
  updatedAt: Date
}

AppUser.init(
  {
    email: DataTypes.STRING(50),
    pwd: DataTypes.STRING(50)
  },
  { sequelize, modelName: 'AppUser' }
)

AppUser.belongsTo(Language, {
  foreignKey: 'languageId'
})
