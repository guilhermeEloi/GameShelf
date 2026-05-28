import bcrypt from "bcryptjs";
import { userRepository } from "../repositories/user.repository";

interface UpdateProfileDTO {
  firstName?: string;
  lastName?: string;
  email?: string;
  avatar?: string;
}

interface UpdatePasswordDTO {
  currentPassword: string;
  newPassword: string;
}

export const userService = {
  async getProfile(userId: string) {
    const user = await userRepository.findById(userId);

    if (!user) {
      throw new Error("Usuário não encontrado");
    }

    return user;
  },

  async updateProfile(userId: string, data: UpdateProfileDTO) {
    const user = await userRepository.findById(userId);

    if (!user) {
      throw new Error("Usuário não encontrado");
    }

    return userRepository.update(userId, data);
  },

  async updatePassword(
    userId: string,
    { currentPassword, newPassword }: UpdatePasswordDTO,
  ) {
    const user = await userRepository.findByEmail(
      (await userRepository.findById(userId))!.email,
    );

    if (!user) {
      throw new Error("Usuário não encontrado");
    }

    const passwordMatch = await bcrypt.compare(currentPassword, user.password);

    if (!passwordMatch) {
      throw new Error("Senha atual incorreta");
    }

    if (newPassword.length < 8) {
      throw new Error("Nova senha deve ter no mínimo 8 caracteres");
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await userRepository.updatePassword(userId, hashedPassword);
  },

  async deleteAccount(userId: string) {
    const user = await userRepository.findById(userId);

    if (!user) {
      throw new Error("Usuário não encontrado");
    }

    await userRepository.delete(userId);
  },
};
