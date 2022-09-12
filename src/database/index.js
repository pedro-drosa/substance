import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

class Database {
  connection;

  constructor() {
    this.initialize();
  }

  initialize() {
    this.connection = new Sequelize(databaseConfig);
    this.authenticate();
  }

  async authenticate() {
    try {
      await this.connection.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }
}

export default new Database();
