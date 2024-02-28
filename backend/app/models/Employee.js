import { DataTypes } from 'sequelize';
import  sequelize  from '../../db/connection.js';

const Employee = sequelize.define('employees', {

    employee_id: {
    type: DataTypes.STRING,
    allowNull: false
  },
  
  name:{
    type:DataTypes.STRING,
    allowNull: false,
  },
  date_of_birth:{

    type:DataTypes.STRING,
    allowNull: false
  },
  mobile_no:{
    type:DataTypes.INTEGER,
    allowNull: true

  },
  alternate_no:{
    type:DataTypes.INTEGER,
    allowNull: false
  },
  
  city:{
    type:DataTypes.INTEGER,
    allowNull: false
  },
  address:{
    type:DataTypes.STRING,
    allowNull: false
},
postal_code:{
  type:DataTypes.STRING,
  allowNull: false

},
qualification:{
  type:DataTypes.STRING,
  allowNull: false

},
  year_of_experience:{
    type:DataTypes.STRING,
    allowNull: false
  
  },
  start_date:{
    type:DataTypes.STRING,
    allowNull: false
  
  },
  end_date:{
    type:DataTypes.STRING,
    allowNull: false
  
  },
  gender:{
    type:DataTypes.STRING,
    allowNull: false
  
  },
  marital_status:{
    type:DataTypes.STRING,
    allowNull: false
  
  },
  email:{
    type:DataTypes.STRING,
    allowNull: false
  
  },
  password:{
    type:DataTypes.STRING,
    allowNull: false
  
  },
//   image:{
//     type:DataTypes.STRING,
//     allowNull: false
  
//   },
 
});

export default Employee;