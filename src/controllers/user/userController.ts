import { type Request, type Response } from 'express';
import { UserService } from '../../services/userService.js';

class userController {
    private userService: UserService;

    constructor(userService: UserService){
        this.userService = userService;
    };

    create = async (req: Request, res: Response) => {
        const { email, password } = req.body;
        const result = await this.userService.create(email, password)
        res.json(result);
    };

    update = async (req: Request, res: Response) => {
        console.log('Teste')
    };

};

export { userController };