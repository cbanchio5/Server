import bodyParser from 'body-parser';
import express, {Request, Response} from 'express';
import {router} from './routes/loginRoutes'
import cookieSession from 'cookie-session';
import './controllers/LoginController';
import {router as controllerRouter} from './controllers/decorators/controllers'

const app = express();

app.use(bodyParser.urlencoded({extended:true}))
app.use(cookieSession({
  keys: ['sdf']
}));
app.use(router);
app.use(controllerRouter);

app.listen(3000, ()=> {
  console.log("Listening on port 3000");
})
