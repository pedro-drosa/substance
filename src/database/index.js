import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

import User from '../app/models/User';
import Role from '../app/models/Role';

const models = [User, Role];

class Database {
  connection;

  constructor() {
    this.initialize();
  }

  initialize() {
    this.connection = new Sequelize(databaseConfig);
    this.authenticate();
    this.initModels();
  }

  async authenticate() {
    try {
      await this.connection.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }

  initModels() {
    models.map((model) => model.init(this.connection));
    models.map(
      (model) => model.associate && model.associate(this.connection.models),
    );
  }
}

export default new Database();
