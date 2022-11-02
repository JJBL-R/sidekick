import express from 'express';
import userController from '../controllers/userController';
const router = express.Router();

router.post('/', userController.createUser, (req, res) => {
  res.status(200).json(res.locals.user);
});


module.exports = router;