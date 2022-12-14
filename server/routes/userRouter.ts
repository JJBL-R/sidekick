import express from 'express';
import userController from '../controllers/userController';
const router = express.Router();


router.get('/', userController.getUser, (req, res) => {
  res.status(200).json(res.locals.users);
})

router.post('/', userController.createUser, (req, res) => {
  res.status(200).json(res.locals.user);
});

router.post('/verify', userController.verifyUser, (req, res) => {
  res.status(200).json(res.locals.verify);
});

router.patch('/', userController.updateUser, (req, res) => {
  res.status(200).json(res.locals.update);
});

router.delete('/', userController.deleteUser, (req, res) => {
  res.status(200).json(res.locals.delete);
});

export default router;