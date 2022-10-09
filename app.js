const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const authRoutes = require('./routes/auth'); // rutas de autentificación (login y registro)
const pagesRoutes = require('./routes/pages'); // 

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');


app.use(bodyParser.urlencoded({ extended: false }));  // middleware para parsear los datos de los formularios a String 
app.use(express.static(path.join(__dirname, 'public'))); // para cargar archivos estáticos



app.use('/auth', authRoutes); 
app.use(pagesRoutes);

app.use(errorController.get404);







app.get('/500', errorController.get500);

app.use(errorController.get404);

app.use((error, req, res, next) => {
  // res.status(error.httpStatusCode).render(...);
  // res.redirect('/500');
  res.status(500).render('500', {
    pageTitle: 'Error!',
    path: '/500',
    isAuthenticated: false
  });
});


app.listen(3001);