import { Province } from '../../sqlz/models/global/Province';
import { Request, Response } from 'express';
import { IController } from '../IController';

class ProvinceController implements IController<Province> {
    constructor() { }

    public async getAllModel(req: Request, res: Response): Promise<Province[]> {
        let provinces: Province[] = await Province.findAll();
        return provinces;
        // return Country.findAll().then((country: Country) => res.status(200).send(country))
        //     .catch(error => res.boom.badRequest(error));
    }
    public async getOneById(req: Request, res: Response): Promise<Province> {
        let provinceId: string = req.query?.id as string;
        let province: Province = await Province.findOne({
            where: { id: provinceId }
        })
        return province
    }
    public async getOneByName(req: Request, res: Response): Promise<Province> {
        let provinceName: string = req.query?.name as string;
        var province: Province = await Province.findOne({
            where: { name: provinceName }
        })
        return province
    }

    public async createModel(req: Request, res: Response): Promise<any> {
        let province: Province = new Province();
        var result = await Province.create(province, { validate: true })
        return result;
    }
    public async deleteModel(req: Request, res: Response) {
        let provinceId: string = req.query?.id as string;
        let result = await Province.destroy({
            where: { id: provinceId }
        })
        return result;
    }
    public async updateMode(req: Request, res: Response) {
        let province: Province = await this.getOneById(req, res);
        let result = province.updateModel(req.body);
        return result;
    }
}