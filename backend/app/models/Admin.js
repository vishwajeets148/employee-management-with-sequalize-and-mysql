import { DataTypes } from 'sequelize';
import  sequelize  from '../../db/connection.js';

const Admin = sequelize.define('admins', {

  
  name:{
    type:DataTypes.STRING,
    allowNull: false,
  },
  email:{

    type:DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password:{

    type:DataTypes.STRING,
    allowNull: false,
    unique: true,
  },


 
});

export default Admin;