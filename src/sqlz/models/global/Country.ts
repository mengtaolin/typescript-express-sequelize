import { Model, Table, Column, DataType } from 'sequelize-typescript'
import { IBaseModel } from '../IBaseModel';

@Table({
    tableName: 'Country',
    freezeTableName: true,
    timestamps: true
})
export class Country extends Model implements IBaseModel {

    public async updateModel(body: any): Promise<any> {
        this.name = body.name;
        this.name_en = body.name_en;
        this.code = body.code;
        let result = await this.save();
        return result;
    }

    @Column({
        primaryKey: true,
        unique: true,
        type: DataType.STRING(50)
    })
    public id: string

    @Column
    public name: string

    @Column
    public name_en: string

    @Column({
        unique: true
    })
    public code: string

    private _proviceIds: string
    public proviceIdList: string[]
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

    public set provinceIds(value: string) {
        this._proviceIds = value
        if (this._proviceIds.length > 0) {
            this.proviceIdList = this._proviceIds.split(',')
        }
        else {
            this.proviceIdList = new Array<string>()
        }
    }

    @Column
    public get provinceIds(): string {
        return this._proviceIds
    }
}