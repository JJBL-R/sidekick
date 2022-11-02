import express from 'express';
import userController from '../controllers/userController';
const router = express.Router();

router.post('/', userController.verifyUser, userController.createUser, (req, res) => {
  res.status(200).json(res.locals.user);
});

router.patch('/', userController.updateUser, (req, res) => {
  res.status(200).json(res.locals.update);
});

router.delete('/', userController.deleteUser, (req, res) => {
  res.status(200).json(res.locals.delete);
});

export default router;