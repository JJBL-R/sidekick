import { Request, Response, NextFunction } from "express";
const db = require('../Sidekick_SQL');

interface SportController {
  getSport: (req: Request, res: Response, next: NextFunction) => void;
  postSport: (req: Request, res: Response, next: NextFunction) => void;
  updateSport: (req: Request, res: Response, next: NextFunction) => void;
  deleteSport: (req: Request, res: Response, next: NextFunction) => void;
}

const sportController: SportController = {

  getSport: async (req, res, next): Promise<void> => {
    try {
      const text = 'SELECT * FROM public.sport'
      const result = await db.query(text);
      res.locals.sport = result;
      return next();
    } catch (error) {
      return next({
        log: `Error caught in sportController.getSport ${error}`,
        status: 409,
        message: `Error has occured in sportController.getSport. ERROR: Unable to get sport, and/or ${error}`,
      });
    }
  },
  postSport: async (req, res, next): Promise<void> => {
    try {
      const { sport_name } = req.body;
      const text = 'INSERT INTO public.sport(sport_name, registered) VALUES($1, $2) RETURNING *'
      const params = [sport_name, true]
      if (!sport_name) {
        return next({
            log: null,
          status: 400,
          message: 'Enter a valid sport name',
        })
      };
      const result = await db.query(text, params);
      res.locals.sport = result;
      return next();
    } catch (error) {
      return next({
        log: `Error caught in sportController.postSport ${error}`,
        status: 409,
        message: `Error has occured in sportController.postSport. ERROR: Unable to post sport, and/or ${error}`,
      });
    }
    
  },
  updateSport: async (req, res, next): Promise<void> => {
    try {
      const { sport_name, _id } = req.query;
      const text = 'UPDATE public.sport SET sport_name=$1 WHERE _id=$2 RETURNING *'
      const params = [sport_name, _id]
      const result = db.query(text, params);
      res.locals.sport = result;
      return next();
    } catch (error) {
      return next({
        log: `Error caught in sportController.updateSport ${error}`,
        status: 409,
        message: `Error has occured in sportController.updateSport. ERROR: Unable to update sport, and/or ${error}`,
      });
    }
  },

    deleteSport: async (req, res, next): Promise<void> => {
    try {
      const { _id } = req.query;
      const text = 'DELETE from public.sport WHERE _id=$1'
      const params = [_id];
      const result = db.query(text, params);
      res.locals.delete = result;
      return next();
    }catch (error) {
      return next({
        log: `Error caught in sportController.deleteSport ${error}`,
        status: 400,
        message: `Error has occured in sportController.deleteSport. ERROR: invalid deletion ${error}`,
      });
    }
  },

};

export default sportController;