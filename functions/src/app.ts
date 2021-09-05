import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as path from 'path';
class App {
  public express: any;

  constructor() {
    this.express = express();
    this.express.set('views', path.join(__dirname, 'views'));
    this.express.set('view engine', 'ejs');
    this.express.use(bodyParser.json());
    this.mountRoutes();
  }

  private mountRoutes(): void {
    // this.express.use('/sub-domain', <Add Express router here>);
  }
}

export default new App().express;
