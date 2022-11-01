import express from 'express';
import userController from '../controllers/userController';

const router = express.Router();

// signup route
router.post(
  '/facebook/login',
  (req, res) => {
    res.status(200).json('success');
  }
);

export default router;
