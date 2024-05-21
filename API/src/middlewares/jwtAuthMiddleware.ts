import { User } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const jwtAuthMiddleware = (
  req: Request<User>,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("Authorization")?.split(" ")[1];

  if (token) {
    const SECRET_JWT = process.env.SECRET_JWT;

    if (!SECRET_JWT) {
      return res.status(500).send("Ceva nu a functionat cum trebuie");
    }

    jwt.verify(token, SECRET_JWT as string, (err: any, _: any) => {
      if (err) {
        return res.status(403).send("Invalid token");
      }
      next();
    });
  } else {
    res.status(401).send("Token required");
  }
};
