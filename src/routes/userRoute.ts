import { Router } from 'express';
import { userController } from '../controllers/user/userController.js';
import { UserService } from '../services/userService.js';
import { validateSchema } from '../middlewares/validateSchema.js';
import { createUserSchema } from '../schemas/userSchema.js';

const userService = new UserService()
const user = new userController(userService);

const router = Router();

router.post('/', validateSchema(createUserSchema), user.create);
router.put('/:id', user.update);

export default router;