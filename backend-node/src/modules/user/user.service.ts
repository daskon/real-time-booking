import * as repo from "./user.repository";

export const getUsers = async () => repo.findAll();