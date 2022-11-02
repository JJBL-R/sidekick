import { Request, Response, NextFunction } from 'express';
const db = require('../Sidekick_SQL');

/**
 * @typeParam getMatches - method that gets list of liked users
 * @typeParam postLike - method that creates a like/match in the database
 * @typeParam postDislike - method that creates a dislike memory in database
 */

interface SwipeController {
  getMatches: (req: Request, res: Response, next: NextFunction) => void;
  postLike: (req: Request, res: Response, next: NextFunction) => void;
  postDislike: (req: Request, res: Response, next: NextFunction) => void;
}

const swipeController: SwipeController = {
  getMatches: async (req, res, next): Promise<void> => {
    try {
      const text = 'SELECT * FROM public.like_user'
      const result = await db.query(text);
      res.locals.likes = result;
      return next();
    } catch (error) {
      return next({
        log: `Error caught in swipeController.getMatches ${error}`,
        status: 409,
        message: `Error has occured in swipeController.getMatches. ERROR: Unable to get matches, and/or ${error}`,
      });
    };
  },
  postLike: async (req, res, next): Promise<void> => {
    try {
      const { like } = req.body;
      const text = 'INSERT INTO public.like_user(like) VALUES($1)'
      const params = [like]
      const result = await db.query(text, params);
      res.locals.like = result;
      return next();
    } catch (error) {
      return next({
        log: `Error caught in swipeController.postLike ${error}`,
        status: 409,
        message: `Error has occured in swipeController.postLike. ERROR: Unable to get post like, and/or ${error}`,
      });
    };
  },

  postDislike: async (req, res, next): Promise<void> => {
    try {
      const { dislike } = req.body;
      const text = 'INSERT INTO public.dislike_user(dislike) VALUES($1)'
      const params = [dislike];
      const result = await db.query(text, params);
      res.locals.dislike = result;
      return next();
    } catch (error) {
      return next({
        log: `Error caught in swipeController.postDislike ${error}`,
        status: 409,
        message: `Error has occured in swipeController.postDislike. ERROR: Unable to get post dislike, and/or ${error}`,
      });
    };
  },
}

export default swipeController;