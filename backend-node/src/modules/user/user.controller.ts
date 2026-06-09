import { NextFunction, Request, Response } from "express";
import * as service from "./user.service";
import { success } from "../../utils/response";

export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try{
    const users = await service.getUsers();
    res.json(success(users));
  } catch (err) {
    next(err);
  }
}