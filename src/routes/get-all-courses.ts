import { NextFunction, Request, Response } from 'express';
import { logger } from '../logger';
import { AppDataSource } from '../data-source';
import { Course } from '../models/course';

export async function getAllCourses(request: Request, response: Response, next: NextFunction) {

    logger.debug(`Called getAllCourses()`);

    try {

        const courses = await AppDataSource
            .getRepository(Course)
            .createQueryBuilder("courses")
            // .leftJoinAndSelect("courses.lessons", "LESSONS") // 沒有這行 不會跑出 Lessons
            .orderBy("courses.seqNo")
            .getMany();

        response.status(200).json({ courses });

    } catch (error) {
        logger.error(`Error calling getAllCourses()`);
        return next(error);
    }

}