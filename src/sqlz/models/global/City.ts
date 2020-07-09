import { Table, Model, Column, BelongsTo, AllowNull, DataType } from 'sequelize-typescript'
import { Province } from './Province'
import { IBaseModel } from '../IBaseModel';

@Table({
    tableName: 'City',
    freezeTableName: true,
    timestamps: true
})
export class City extends Model implements IBaseModel {

    @Column({
        primaryKey: true,
        unique: true,
        type: DataType.STRING(50)
    })
    public id: string

    @Column({
        type: DataType.STRING(100)
    })
    public name: string

    @Column({
        type: DataType.STRING(100)
    })
    public name_en: string

    @Column({
        type: DataType.STRING(50)
    })
    public proviceId: string

    @BelongsTo(() => Province, { foreignKey: 'proviceId', targetKey: 'id' })
    public provice: Province

    @AllowNull
    @Column
    public area: number

    @AllowNull
    @Column
    public population: number

    @AllowNull
    @Column
    public desc: string

    constructor() {
        super()
    }

    public async updateModel(body: any): Promise<any> {
    }
}