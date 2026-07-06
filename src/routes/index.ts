import { Router } from 'express';
import userRouter from './userRoute.js'

const router = Router();

router.get('/users', userRouter);

export default router;