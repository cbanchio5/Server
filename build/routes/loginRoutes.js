"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/login', (req, res) => {
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
});
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (email && password && email === 'test@test.com' && password === 'password') {
        //mark as login
        req.session = { loggedIn: true };
        res.redirect('/');
        //redirect to root route
    }
    else {
        res.send('Invalid email or password');
    }
});
