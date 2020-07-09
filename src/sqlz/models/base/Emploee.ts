import { Table, Model, Column, AllowNull, BelongsTo, IsEmail, Unique, DataType } from 'sequelize-typescript'
import { GenderEnum } from '../GenderEnum'
import { Compony } from './Compony'

/**
 * 雇员信息
 */
@Table({
    tableName: 'Emploee',
    freezeTableName: true,
    timestamps: true
})
export class Emploee extends Model {

    @Column({
        unique: true,
        primaryKey: true,
        type: DataType.STRING(50)
    })
    public id: string

    @Column({
        type: DataType.STRING(30)
    })
    public name: string

    @AllowNull
    @Column({
        type: DataType.STRING(30)
    })
    public nickName: string

    @Unique
    @Column({
        type: DataType.STRING(20)
    })
    public phoneNum: string

    @Column({
        type: DataType.STRING(20)
    })
    public emergency_phoneNum: string

    @Unique
    @IsEmail
    @Column({
        type: DataType.STRING(50)
    })
    public email: string

    @Column({
        type: DataType.ENUM,
        values: [GenderEnum.female, GenderEnum.male, GenderEnum.other]
    })
    public gender: string

    @AllowNull
    @Column({
        type: DataType.STRING(100)
    })
    public imgPath: string

    @Unique
    @Column({
        type: DataType.STRING(20)
    })
    public emploeeCode: string

    @Column({
        type: DataType.STRING(50)
    })
    public companyId: string

    @BelongsTo(() => Compony, { foreignKey: 'companyId', targetKey: 'id' })
    public Compony: Compony

    @Column({
        type: DataType.STRING(100)
    })
    public authcode: string

    @Column({
        type: DataType.STRING(50)
    })
    public jobTitle: string

    @Column({
        type: DataType.DATE
    })
    public startTime: Date

    @Column({
        type: DataType.BOOLEAN
    })
    public isQuitted: Boolean = false

    @Column({
        type: DataType.STRING(50)
    })
    public departmentId: string

    @Column({
        type: DataType.STRING(200)
    })
    public address: string

    @Column({
        type: DataType.STRING(20)
    })
    public identityId: string

    @Column({
        type: DataType.STRING(50)
    })
    public countryId: string

    @Column({
        type: DataType.STRING(50)
    })
    public provinceId: string
    /**
     * 现居城市
     */
    @Column({
        type: DataType.STRING(50)
    })
    public cityId: string
    /**
     * 籍贯
     */
    @Column({
        type: DataType.STRING(200)
    })
    public native: string

    /**
     * 数据更新时间
     */
    @Column({
        type: DataType.DATE
    })
    public updateDate: Date

    /**
     * 创建时间
     */
    @Column({
        type: DataType.DATE
    })
    public createDate?: Date

    constructor() {
        super()
    }
}