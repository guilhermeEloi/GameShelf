import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { userRepository } from "../repositories/user.repository";

interface RegisterDTO {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface LoginDTO {
  email: string;
  password: string;
}

function generateToken(userId: string) {
  return jwt.sign({ userId }, process.env.JWT_SECRET as string, {
    expiresIn: process.env.JWT_EXPIRES_IN as any,
  });
}

export const authService = {
  async register({ firstName, lastName, email, password }: RegisterDTO) {
    const existingUser = await userRepository.findByEmail(email);

    if (existingUser) {
      throw new Error("E-mail já cadastrado");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await userRepository.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    const token = generateToken(user.id);

    return { user, token };
  },

  async login({ email, password }: LoginDTO) {
    const user = await userRepository.findByEmail(email);

    if (!user) {
      throw new Error("E-mail ou senha inválidos");
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("E-mail ou senha inválidos");
    }

    const token = generateToken(user.id);

    const { password: _, ...userWithoutPassword } = user;

    return { user: userWithoutPassword, token };
  },
};
