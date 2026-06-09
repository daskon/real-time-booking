import { NextFunction, Request, Response } from "express";
import * as service from "./auth.service";
import { success } from "../../utils/response";

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try{
    const { email, password } = req.body;
    const data = await service.login(email,password);
    res.json(success(data));
  } catch(err){
    next(err);
  }
}