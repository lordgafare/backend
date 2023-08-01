import UserInterface from "../interfaces/user_interface";
import User from "../models/user.model";

async function createUser(UserModel: UserInterface): Promise<User> {
  return User.create(UserModel);
}

async function getUserById(id: number): Promise<User | null> {
  return User.findByPk(id);
}

async function getAllUsers(): Promise<User[]> {
  return User.findAll();
}

async function updateUser(
  id: number,
  UserModel: UserInterface
): Promise<User | null> {
  const user = await User.findByPk(id);
  if (!user) {
    return null;
  }
  user.username = UserModel.username;
  user.email = UserModel.email;
  await user.save();
  return user;
}

async function deleteUser(id: number): Promise<boolean> {
  const user = await User.findByPk(id);
  if (!user) {
    return false;
  }
  await user.destroy();
  return true;
}

const userServices = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};

export default userServices;
