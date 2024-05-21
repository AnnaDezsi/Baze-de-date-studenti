import { Request, Response } from "express";
import { createUser, findUser } from "../services/user.service";
import { User } from "@prisma/client";
import { hash, compare } from "bcrypt";
import jwt from 'jsonwebtoken'

export const register = async (req: Request<User>, res: Response) => {
  const { password, ...rest } = req.body;
  try {
    const hashedPassword = await hash(password, 10);
    const user = await createUser({ ...rest, password: hashedPassword });
    if(user){
      return res.status(200).json({
        message: "User created",
      });
    }    
    res.status(400).json({
      message: "Te rugam sa introduci toate datele",
    });
  } catch (e: any) {
    res.status(500).json({
      message: "Ceva nu a functionat cum trebuie",
    });
  }
};

export const login = async(req: Request<User>, res: Response) => {
  const {email, password} = req.body;
  try{
    const user = await findUser({email});
    
    if(user && await compare(password, user.password)){
      const SECRET_JWT =  process.env.SECRET_JWT;

      if(!SECRET_JWT){
        throw new Error("Ceva nu a functionat cum trebuie")
      }

      const token = jwt.sign({email: user.email}, SECRET_JWT as string, { expiresIn: '1h' })
      return res.status(200).json({
        nume: user.nume,
        prenume: user.prenume,
        email: user.email,
        token,
      })
    }
    res.status(400).json({
      message: "Adresa de email sau parola sunt incorecte",
    });
  }catch(error: any){
    console.log(error.message);
    
    res.status(500).json({
      message: "Ceva nu a functionat cum trebuie",
    });
  }
}


