import { Request, Response, NextFunction } from 'express';
const db = require('../Sidekick_SQL');
/**
 * @typeParam createUser - method that creates a user in the database
 * @typeParam verifyUser - method that logs user in
 * @typeParam assignJwt- method to create a jwt for the user
 * @typeParam verifyJwt - method to verify user login by jwt
 * @typeParam getToken - method to get the user's API token
 */

interface UserController {
  createUser: (req: Request, res: Response, next: NextFunction) => void;
  verifyUser: (req: Request, res: Response, next: NextFunction) => void;
}

const userController: UserController = {
  createUser: async (req, res, next): Promise<void> => {
    try {
      const { first_name, last_name, bio, age, email, zipcode, facebook_id, registered } = req.body;
      const text = 'INSERT INTO public.user(first_name, last_name, bio, age, email, zipcode, facebook_id, registered) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *'
      const params = [first_name, last_name, bio, age, email, zipcode, facebook_id, registered]
      if (!first_name || !last_name || !bio || !age || !email || !zipcode || !facebook_id) {
        return next({
          log: null,
          status: 400,
          message: 'Enter a valid first name, last name, bio, age, email, and/or zipcode.',
        });
      }
        const result = await db.query(text, params);
        res.locals.user = result;
        return next();
    } catch (error) {
      return next({
        log: `Error caught in userController.createUser ${error}`,
        status: 409,
        message: 'User already exists!',
      });
    };
  },
  
  verifyUser: async (req, res, next): Promise<void> => {
    try {
      const { registered } = req.body;
    if (!registered) {
        return next({
          log: null,
          status: 400,
          message: 'Please register before proceeding.',
        })
    } else {
      return next();
      };
    } catch (error) {
      return next({
        log: `Error caught in userController.verifyUser ${error}`,
        status: 400,
        message: `Error has occured in userController.verifyUser. ERROR: invalid email address and/or password ${error}`,
      });
    }
  },
};

export default userController;