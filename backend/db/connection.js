import { Sequelize} from 'sequelize';

const sequelize = new Sequelize('employeems', 'root', '', {
    host: 'localhost',
    dialect:'mysql',
    port : 3306,
  });

//   const db = {}

//   db.sequelize = sequelize
//   db.Sequelize = Sequelize

  
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  


  export default sequelize
