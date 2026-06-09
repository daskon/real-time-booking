import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { AppError } from "../../utils/AppError";

const fakeUser = {
  id: "1",
  name: "John Doe",
  email: "admin@example.com",
  password: "password"
}

export const login = async (email: string, password: string) => {

  if(email.trim().toLowerCase() !== fakeUser.email) throw new AppError("Invalid credentials", 401);

  const hashed = await bcrypt.hash(fakeUser.password, 8);
  const isMatch = await bcrypt.compare(password, hashed);

  if(!isMatch) throw new AppError("Invalid credentials", 401);

  const token = jwt.sign(
    {id: fakeUser.id, email: fakeUser.email},
    process.env.JWT_SECRET!,
    {expiresIn: "1h"}
  );

  return {
    user: {
      id: fakeUser.id,
      email: fakeUser.email,
      name: fakeUser.name
    },
    token,
  }
}