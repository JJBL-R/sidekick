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
      const text = 'INSERT INTO user(first_name, last_name, bio, age, email, zipcode, facebook_id, registered) VALUES($1, $2, $3, $4, $5, $6, $7, $8)'
      const params = [first_name, last_name, bio, age, email, zipcode, facebook_id, registered]
      if (!first_name || !last_name || !bio || !age || !email || !zipcode || !facebook_id) {
        return next({
          log: null,
          status: 400,
          message: 'Enter a valid first name, last name, bio, age, email, and/or zipcode.',
        });
      } else if (!registered) {
        return next({
          log: null,
          status: 400,
          message: 'Please register before proceeding.'
        })
      } else {
        const result = await db.query(text, params);
        res.locals.user = result;
        return next();
      };
    } catch (error) {
      return next({
        log: `Error caught in userController.createUser ${error}`,
        status: 409,
        message: 'User already exists!',
      });
    }
  },
  verifyUser: async (req, res, next) => {
    try {
      const { email, plainPassword } = req.body;

      if (!email || !plainPassword) {
        return next({
          log: null,
          message: 'Please enter your email and/or password',
        });
      }
      let loggedInUser;
      try {
        loggedInUser = await prisma.user.findFirstOrThrow({
          where: {
            email,
          },
        });
      } catch {
        return next({
          log: null,
          status: 401,
          message: 'Invalid email or password',
        });
      }

      const validPassword = await bcrypt.compare(
        plainPassword,
        loggedInUser.passwordHash
      );
      if (validPassword) {
        res.locals.user = loggedInUser.username;
        res.locals.userId = loggedInUser.id;
        res.locals.depPrefs = loggedInUser.depPrefs;
      } else {
        return next({
          log: 'null',
          status: 401,
          message: 'Invalid email and or password',
        });
      }

      return next();
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