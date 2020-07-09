import { IController } from '../IController';
import { Request, Response } from 'express';
import { Country } from '../../sqlz/models/global/Country';

export class CountryController implements IController<Country>{
    constructor() { }

    public async getAllModel(req: Request, res: Response): Promise<Country[]> {
        let countries: Country[] = await Country.findAll();
        return countries;
        // return Country.findAll().then((country: Country) => res.status(200).send(country))
        //     .catch(error => res.boom.badRequest(error));
    }
    public async getOneById(req: Request, res: Response): Promise<Country> {
        let countryId: string = req.query?.id as string;
        let country: Country = await Country.findOne({
            where: { id: countryId }
        })
        return country
    }
    public async getOneByName(req: Request, res: Response): Promise<Country> {
        let countryName: string = req.query?.name as string;
        var country: Country = await Country.findOne({
            where: { name: countryName }
        })
        return country
    }

    public async createModel(req: Request, res: Response): Promise<any> {
        let vo: Country = new Country();
        var result = await Country.create(vo, { validate: true })
        return result;
    }
    public async deleteModel(req: Request, res: Response) {
        let countryId: string = req.query?.id as string;
        let result = await Country.destroy({
            where: { id: countryId }
        })
        return result;
    }
    public async updateMode(req: Request, res: Response) {
        let countryId: string = req.query?.id as string;
        let country: Country = await this.getOneById(req, res);
        let result = country.updateModel(req.body);
        return result;
    }
}