import { Request, Response, NextFunction } from 'express';
const db = require('../Sidekick_SQL');

/**
 * @typeParam getUser - method that grabs users from the database
 * @typeParam createUser - method that creates a user in the database
 * @typeParam verifyUser - method that logs user in
 * @typeParam updateUser - method that updates user info
 * @typeParam deleteUser - method that deletes a user
 */

interface UserController {
  getUser: (req: Request, res: Response, next: NextFunction) => void;
  createUser: (req: Request, res: Response, next: NextFunction) => void;
  verifyUser: (req: Request, res: Response, next: NextFunction) => void;
  updateUser: (req: Request, res: Response, next: NextFunction) => void;
  deleteUser: (req: Request, res: Response, next: NextFunction) => void;
}

const userController: UserController = {

  getUser: async (req, res, next): Promise<void> => {
    try {
      const text = 'SELECT * FROM public.user'
      const result = await db.query(text)
      res.locals.users = result;
      return next();
    } catch (error) {
      return next({
        log: `Error caught in userController.getUser ${error}`,
        status: 409,
        message: `Error has occured in userController.getUser. ERROR: Unable to get user, and/or ${error}`,
      });
    };
  },

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
        message: `Error has occured in userController.verifyUser. ERROR: invalid registration and/or ${error}`,
      });
    }
  },

  updateUser: async (req, res, next): Promise<void> => {
    try {
      const { first_name, last_name, bio, age, email, zipcode, _id } = req.query;
      const text = 'UPDATE public.user SET first_name=$1 last_name=$2 bio=$3 age=$4 email=$5 zipcode=$6 WHERE _id=$7 RETURNING *'
      const params = [first_name, last_name, bio, age, email, zipcode, _id]
      const result = await db.query(text, params);
      res.locals.update = result;
      return next();
    } catch (error) {
      return next({
        log: `Error caught in userController.updateUser ${error}`,
        status: 400,
        message: `Error has occured in userController.updateUser. ERROR: invalid update ${error}`,
      });
    }
  },

  deleteUser: async (req, res, next): Promise<void> => {
    try {
      const { _id } = req.query;
      const text = 'DELETE from public.user WHERE _id=$1'
      const params = [_id];
      const result = db.query(text, params);
      res.locals.delete = result;
      return next();
    }catch (error) {
      return next({
        log: `Error caught in userController.deleteUser ${error}`,
        status: 400,
        message: `Error has occured in userController.deleteUser. ERROR: invalid deletion ${error}`,
      });
    }
  },

};


export default userController;