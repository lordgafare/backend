import { Model, DataTypes } from "sequelize";
import connect from "../config/database";
import UserInterface from "../interfaces/user_interface";

class User extends Model<UserInterface> {
  public id!: number;
  public username!: string;
  public email!: string;
  public password?: string;
  public createdAt?: Date;
  public updatedAt?: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize: connect,
    timestamps: true,
    createdAt: "createdAt",
    updatedAt: "updatedAt",
    modelName: "User",
    tableName: "users",
  }
);

export default User;
