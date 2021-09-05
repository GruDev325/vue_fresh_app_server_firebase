import { Client } from 'pg';
import DatabaseResultSet from '../../models/databaseResultSet';
import PostgresDatabase from './databaseConnection';

export default class DatabaseService {
  /**
   * Generic function to performing queries using try/catch
   * @param sqlString
   * @param params
   */
  public async performQuery(
    sqlString: string,
    params: any[]
  ): Promise<DatabaseResultSet> {
    try {
      const connection: Client = await PostgresDatabase.getConnection();

      const result = await connection.query(sqlString, params);

      return { rows: result.rows, rowCount: result.rowCount };
    } catch (err) {
      throw new Error(err);
    }
  }
}
