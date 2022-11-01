import express from 'express';
import userController from '../controllers/userController';
import passport from 'passport';

const router = express.Router();

// signup route
router.get(
  '/facebook/login', passport.authenticate('facebook'),
  (req, res) => {
    res.status(200).json('success');
  }
);

// handle Facebook auth
router.get('/redirect/facebook',
  passport.authenticate('facebook', { failureRedirect: '/', failureMessage: true }),
  function(req, res) {
    res.redirect('/home');
  });

export default router;
