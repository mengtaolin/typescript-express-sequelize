import { Table, Column, Model, AllowNull, ForeignKey, BelongsTo, IsEmail, DataType } from 'sequelize-typescript'
import { Country } from '../global/Country'
import { Province } from '../global/Province'
import { City } from '../global/City'

@Table({
    tableName: 'Compony',
    freezeTableName: true,
    timestamps: true
})
export class Compony extends Model {
    @Column({
        primaryKey: true,
        type: DataType.STRING(50),
        unique: true
    })
    public id: string

    @Column({
        type: DataType.STRING(100)
    })
    public name: string

    @AllowNull
    @Column({
        type: DataType.STRING(100)
    })
    public name_en: string

    @Column({
        type: DataType.STRING(500)
    })
    public address: string

    /**
     *  行业
     */
    @Column({
        type: DataType.STRING(100)
    })
    public businessId: string

    /**
     * 国家
     */
    @ForeignKey(() => Country)
    @Column
    public countryId: string

    @BelongsTo(() => Country, { foreignKey: 'countryId', targetKey: 'id' })
    public country: Country

    @ForeignKey(() => Province)
    @Column
    public provinceId: string

    @ForeignKey(() => City)
    @Column
    public citiy?: string

    @Column({
        type: DataType.STRING(20)
    })
    public phoneNum: string

    /**
     * 公司的电话号码
     */
    @Column({
        type: DataType.STRING(20)
    })
    public cellNum: string

    @IsEmail
    @Column
    public email: string

    @Column({
        type: DataType.INTEGER
    })
    public employeeNum?: number

    @Column({
        unique: true,
        type: DataType.STRING(20)
    })
    public componyCode: string

    @Column({
        type: DataType.STRING(20)
    })
    public operationType: string

    @Column({
        type: DataType.STRING(50)
    })
    public ownerId: string

    @AllowNull
    @Column({
        type: DataType.STRING(500)
    })
    public desc: string

    @AllowNull
    @Column({
        type: DataType.STRING(50)
    })
    public other: string

    @AllowNull
    @Column({
        type: DataType.STRING(500)
    })
    public authcode: string

    /**
     * 数据更新时间
     */
    @Column
    public updatedAt?: Date

    /**
     * 创建时间
     */
    @Column
    public createdAt?: Date

    constructor() {
        super()
    }

}