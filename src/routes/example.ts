import { NextFunction, Request, Response } from 'express';
import { logger } from '../logger';
import { AppDataSource } from '../data-source';


export async function updateCourse(request: Request, response: Response, next: NextFunction) {

    try {
        logger.debug(`Called updateCourse()`);
    } catch (error) {
        logger.error(`Error Calling updateCourse()`);
        return next(error);
    }
}

