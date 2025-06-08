import * as express from 'express';
import { Request, Response } from 'express';

const router = express.Router();

router.post('/', (req: Request, res: Response) => {
  const { name, position, appliedDate, status, note, link } = req.body;

  if (!name || !position || !appliedDate || !status) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const newCompany = {
    id: Date.now(),
    name,
    position,
    appliedDate,
    status,
    note,
    link,
  };

  res.status(201).json(newCompany);
});

export default router;
