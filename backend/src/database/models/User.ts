import { Model, DataTypes } from 'sequelize';
import db from '.';

class User extends Model {
  id!: number;
  username!: string;
  email!: string;
  password!: string;
  balance!: number;
  role!: string;
}

User.init({
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  username: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  balance: {
    allowNull: false,
    type: DataTypes.DECIMAL(10,2),
  },
  role: {
    allowNull: false,
    type: DataTypes.STRING,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'users',
  timestamps: false,
});

export default User;