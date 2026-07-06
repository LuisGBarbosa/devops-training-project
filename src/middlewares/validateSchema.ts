import { type Request, type Response, type NextFunction } from 'express';
import { ZodError, ZodType } from 'zod';

export const validateSchema = (schema: ZodType) => 
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            await schema.parseAsync({
                body: req.body,
                query: req.query,
                params: req.params
            })

            return next();
        } catch (error) {
            if(error instanceof ZodError) {
                res.status(400).json({
                    error: "Erro na validação de dados.",
                    details: error.issues.map((issue) => ({ //percorrendo as mensagens de erros definidos no schema
                        field: issue.path.slice(1).join("."),
                        message: issue.message
                    }))
                })
            }
        };

        res.status(500).json({
            error: "Internal server error"
        });
    };