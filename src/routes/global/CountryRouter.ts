import { Express } from 'express';
import { body } from 'express-validator';
export class CountryRouter {
    private app: Express;
    constructor(app: Express) {
        this.app = app;
        this.init();
    }

    private init(): void {
        this.app.get('/api/country')
    }
}