import {Response, Request} from 'express';
import {AppDataSource} from '../db/datasource';
import {User} from '../db/models/user';

const userRepo = AppDataSource.getRepository(User);

export const queryUserById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);

  const user = await userRepo.findOne({
    where: {
      id,
    },
  });
  if (user) {
    user.salt = '';
    user.hash = '';
  }

  res.json({
    status: true,
    user: user,
  });
  res.end();
};
