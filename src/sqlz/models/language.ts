import { Model } from 'sequelize-typescript'
import sequelize from './sqlzIndex'
import { AppUser } from './appuser'
import { DataTypes } from 'sequelize/types'

export class Language extends Model {
}

export class LanguageModel {
  id: string
  label: string
  name: string
  createdAt: Date
  updatedAt: Date
}

Language.init(
  {
    label: DataTypes.STRING(255),
    name: DataTypes.STRING(50)
  },
  { sequelize, modelName: 'Language' }
)


