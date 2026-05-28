import { Request, Response } from "express";
import { userService } from "../services/user.service";

export const userController = {
  async getProfile(req: Request, res: Response) {
    try {
      const user = await userService.getProfile(req.userId);
      return res.status(200).json(user);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(404).json({ message: error.message });
      }
      return res.status(500).json({ message: "Erro interno do servidor" });
    }
  },

  async updateProfile(req: Request, res: Response) {
    try {
      const { firstName, lastName, email, avatar } = req.body;
      const user = await userService.updateProfile(req.userId, {
        firstName,
        lastName,
        email,
        avatar,
      });
      return res.status(200).json(user);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message });
      }
      return res.status(500).json({ message: "Erro interno do servidor" });
    }
  },

  async updatePassword(req: Request, res: Response) {
    try {
      const { currentPassword, newPassword } = req.body;

      if (!currentPassword || !newPassword) {
        return res
          .status(400)
          .json({ message: "Todos os campos são obrigatórios" });
      }

      await userService.updatePassword(req.userId, {
        currentPassword,
        newPassword,
      });
      return res.status(200).json({ message: "Senha alterada com sucesso" });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message });
      }
      return res.status(500).json({ message: "Erro interno do servidor" });
    }
  },

  async deleteAccount(req: Request, res: Response) {
    try {
      await userService.deleteAccount(req.userId);
      return res.status(200).json({ message: "Conta excluída com sucesso" });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message });
      }
      return res.status(500).json({ message: "Erro interno do servidor" });
    }
  },
};
