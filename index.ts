import express, { Application, NextFunction, Request, Response } from 'express';
import { connect } from "mongoose";
import bodyParser from 'body-parser';
import APIRouter from '@api/index';

class App {
    public app: Application;
    private port = Number(process.env.PORT || 8080);
    constructor() {
        this.app = express();
        this.config();
        this.routes();
        this.dbConnect();
        this.app.listen(this.port, () => {
            console.log(`App Started on ${this.port}`);
        });
    }

    private config(): void {
        // this.app.use((req: Request, res: Response, next: NextFunction) => {
        //     next();
        // });

        this.app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
            console.error(err, true);
            return res.status(400).json({
                error: err.message,
            });
        });

        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    private routes(): void {
        this.app.use('/api', APIRouter);
    }

    private dbConnect() {
        connect('mongodb://localhost:27017/ecommerce', {
            keepAlive: true,
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true
        }, (error) => {
            if(error) {
                console.log("Error in connecting to mongodb", error)     
            }
            else {
                console.log("Connected to mongodb")
            }
        });
    }
}

new App().app;

