import express from 'express';
import swipeController from '../controllers/swipeController';
const router = express.Router();

router.get('/', swipeController.getMatches, (req, res) => {
  res.status(200).json(res.locals.likes)
});

router.post('/', swipeController.postLike, (req, res) => {
  res.status(200).json(res.locals.like);
});

router.post('/', swipeController.postDislike, (req, res) => {
  res.status(200).json(res.locals.dislike);
});

export default router;