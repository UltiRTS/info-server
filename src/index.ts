import 'reflect-metadata';
import {AppDataSource} from './db/datasource';
import * as express from 'express';
import {queryUserById, queryUserByUsername} from './handlers/user';

AppDataSource.initialize()
  .then(() => {
    console.log('db initialized');
  })
  .catch(e => {
    console.log(e);
  });

const app = express();
const port = 3030;

app.get('/', (req, res) => {
  res.send(
    JSON.stringify({
      msg: 'hello, world',
    })
  );
});

app.get('/user/:id', queryUserById);
app.get('/user/byname/:username', queryUserByUsername);

app.listen(port, () => {
  console.log(`listening at ${port}`);
});
