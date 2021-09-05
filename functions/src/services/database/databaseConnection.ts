import { Client } from 'pg';
import { DatabaseConfig } from '../../config/databaseConfig';

export default class PostgresDatabase {
  private static _instance: Client;

  public static async getConnection() {
    if (this._instance) {
      return this._instance;
    } else {
      this._instance = await this.setupDatabase();

      return this._instance;
    }
  }

  static async setupDatabase(): Promise<Client> {
    const client = new Client(DatabaseConfig.connectionParams);

    await client.connect();
    return client;
  }
}

// USAGE const dbConnection = PostgresDatabase.Connection;
