import { Router, Request, Response, NextFunction } from "express";

class LoginController {
  getLogin(req: Request, res: Response) : void {
    res.send(`
    <form method="POST">
      <div>
        <label>Email</label>
        <input name="email" />
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="password" />
      </div>
      <button>Submit</button>
    </form>
    `);
  }
}
