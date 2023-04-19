import { Router, Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";

interface RequestWithBody extends Request {
  body: {[key:string] : string | undefined}
}

function requireAuth(req: Request, res: Response, next: NextFunction) : void{
  if(req.session && req.session.loggedIn) {
    next();
  }

  res.status(403);
  res.send('Not permitted');
}

const router = Router();



router.post('/login', (req: RequestWithBody, res: Response) => {
  const {email, password} = req.body;

 if(email && password && email === 'test@test.com' && password === 'password') {
  //mark as login
  req.session = {loggedIn: true}
  res.redirect('/');

  //redirect to root route


 }  else {
  res.send('Invalid email or password');
 }

})

router.get('/', (req: Request, res: Response) => {
 if(req.session && req.session.loggedIn) {
  res.send(`
  <div>
    <div> You are logged in</div>
    <a href="/logout">Logout</a>
  </div>
  `)
 } else {
  res.send(`
  <div>
    <div> You are not logged in</div>
    <a href="/login">Login</a>
  </div>
  `)

 }
})

router.get('/logout', (req: Request, res: Response) => {
req.session = undefined;
res.redirect('/');
})

router.get('/protected', requireAuth, (req: Request, res: Response) => {
  res.send('Welcome to the protected route')
})

export {router}
