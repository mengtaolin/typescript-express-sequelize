import { Request, Response } from "express";

export interface IController<T> {

    getAllModel(req: Request, res: Response): Promise<T[]>;
    getOneById(req: Request, res: Response): Promise<T>;
    getOneByName(req: Request, res: Response): Promise<T>;

    createModel(req: Request, res: Response);
    deleteModel(req: Request, res: Response);
    updateMode(req: Request, res: Response);
}