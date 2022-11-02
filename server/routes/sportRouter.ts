import express from 'express';
import sportController from '../controllers/sportController';
const router = express.Router();


router.get('/', sportController.getSport, (req, res) => {
  res.status(200).json(res.locals.users);
})

router.post('/', sportController.postSport, (req, res) => {
  res.status(200).json(res.locals.user);
});

router.patch('/', sportController.updateSport, (req, res) => {
  res.status(200).json(res.locals.update);
});

router.delete('/', sportController.deleteSport, (req, res) => {
  res.status(200).json(res.locals.delete);
});

export default router;