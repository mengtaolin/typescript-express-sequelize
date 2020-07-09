import { Request } from "express";

export interface IBaseModel {
    updateModel(body: any): Promise<any>;
}