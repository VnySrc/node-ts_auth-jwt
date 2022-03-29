import {Request, Response, NextFunction} from "express"
import JWT from "jsonwebtoken"
import dotenv from 'dotenv'

dotenv.config()

export const Auth = {
    private: (req: Request, res: Response, next: NextFunction) => {
        let acess: boolean = false;

        //validação
        if (req.headers.authorization) {
        const [authType, token] = req.headers.authorization.split(" ")

        try{
            if (authType === "Bearer"){
            JWT.verify(
                token, 
                process.env.JWT_SECRET_KEY as string
            )
            acess = true
            }
        }
        catch(err){}
        }

        if (acess) {
            next()
        }
        else {
            res.status(403)
            res.json({status: "Acesso negado"})
        }
    }
}