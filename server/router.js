const controllers = require('./controllers');
const mid = require('./middleware');

const router = (app) => {
  app.get('/books', mid.requiresLogin, controllers.Book.getBooks);
  app.post('/books', mid.requiresLogin, controllers.Book.addBook);
// Add routes for updating and deleting books

  app.get('/login', mid.requiresSecure, mid.requiresLogout, controllers.Account.loginPage);
  app.post('/login', mid.requiresSecure, mid.requiresLogout, controllers.Account.login);

  app.post('/signup', mid.requiresSecure, mid.requiresLogout, controllers.Account.signup);

  app.get('/logout', mid.requiresLogin, controllers.Account.logout);

  

  app.get('/', mid.requiresSecure, mid.requiresLogout, controllers.Account.loginPage);
};
module.exports = router;
