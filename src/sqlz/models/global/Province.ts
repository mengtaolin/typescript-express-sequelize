import { Table, Model, Column, AllowNull, BelongsTo, DataType } from 'sequelize-typescript';
import { Country } from './Country'
import { IBaseModel } from '../IBaseModel';

@Table({
    tableName: 'Provice',
    freezeTableName: false,
    timestamps: true
})
export class Province extends Model implements IBaseModel {

    @Column({
        primaryKey: true,
        type: DataType.STRING(50),
        unique: true
    })
    public id: string

    @Column({
        type: DataType.STRING(50)
    })
    public countryId: string

    @BelongsTo(() => Country, { foreignKey: 'countryId', targetKey: 'id' })
    public country: Country

    @Column({
        type: DataType.STRING(100)
    })
    public name: string

    @Column({
        type: DataType.STRING(100)
    })
    public name_en: string

    @Column({
        type: DataType.STRING(20)
    })
    public code: string

    @AllowNull
    @Column
    public population: number

    @AllowNull
    @Column
    public area: number

    @AllowNull
    @Column({
        type: DataType.STRING(500)
    })
    public desc: string

    @Column({
        type: DataType.STRING(200)
    })
    public cityIds: string
    /**
     * 数据更新时间
     */
    @Column
    public updatedAt: Date
    /**
     * 创建时间
     */
    @Column
    public createdAt: Date

    public updateModel(body: any): Promise<any> {
        throw new Error("Method not implemented.");
    }
}