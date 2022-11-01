import { Request, Response, NextFunction } from 'express';
import crypto from 'crypto';

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
//   createUser: async (req, res, next) => {
//     try {
//       const { username, plainPassword, email } = req.body;

//       if (!username || !plainPassword || !email) {
//         return next({
//           log: null,
//           status: 400,
//           message: 'Enter a valid username, email, and/or password',
//         });
//       }

//       return next();
//     } catch (error) {
//       return next({
//         log: `Error caught in userController.createUser ${error}`,
//         status: 409,
//         message: 'User already exists!',
//       });
//     }
//   },
//   verifyUser: async (req, res, next) => {
//     try {
//       const { email, plainPassword } = req.body;

//       if (!email || !plainPassword) {
//         return next({
//           log: null,
//           message: 'Please enter your email and/or password',
//         });
//       }
//       let loggedInUser;
//       try {
//         loggedInUser = await prisma.user.findFirstOrThrow({
//           where: {
//             email,
//           },
//         });
//       } catch {
//         return next({
//           log: null,
//           status: 401,
//           message: 'Invalid email or password',
//         });
//       }

//       const validPassword = await bcrypt.compare(
//         plainPassword,
//         loggedInUser.passwordHash
//       );
//       if (validPassword) {
//         res.locals.user = loggedInUser.username;
//         res.locals.userId = loggedInUser.id;
//         res.locals.depPrefs = loggedInUser.depPrefs;
//       } else {
//         return next({
//           log: 'null',
//           status: 401,
//           message: 'Invalid email and or password',
//         });
//       }

//       return next();
//     } catch (error) {
//       return next({
//         log: `Error caught in userController.verifyUser ${error}`,
//         status: 400,
//         message: `Error has occured in userController.verifyUser. ERROR: invalid email address and/or password ${error}`,
//       });
//     }
//   },
};

export default userController;