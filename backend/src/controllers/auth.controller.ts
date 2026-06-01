import { Request, Response } from "express";
import { authService } from "../services/auth.service";

export const authController = {
  async register(req: Request, res: Response) {
    try {
      const { firstName, lastName, email, password } = req.body;

      if (!firstName || !lastName || !email || !password) {
        return res
          .status(400)
          .json({ message: "Todos os campos são obrigatórios" });
      }

      if (password.length < 8) {
        return res
          .status(400)
          .json({ message: "Senha deve ter no mínimo 8 caracteres" });
      }

      const result = await authService.register({
        firstName,
        lastName,
        email,
        password,
      });

      return res.status(201).json(result);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message });
      }
      return res.status(500).json({ message: "Erro interno do servidor" });
    }
  },

  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res
          .status(400)
          .json({ message: "E-mail e senha são obrigatórios" });
      }

      const result = await authService.login({ email, password });

      return res.status(200).json(result);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(401).json({ message: error.message });
      }
      return res.status(500).json({ message: "Erro interno do servidor" });
    }
  },
};
