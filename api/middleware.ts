import { NextFunction, Request, Response } from "express";

export default class Middleware {
    constructor() {}

    static authenticate(req: Request, res: Response, next: NextFunction) {
        res.status(403).send({ error: "You are not authorized to access this api"})
    }
}