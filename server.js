var express = require('express');
var path = require('path');
var logger = require('morgan');
var compression = require('compression');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var dotenv = require('dotenv');
var React = require('react');
var ReactDOM = require('react-dom/server');
var Router = require('react-router');
var Provider = require('react-redux').Provider;
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var moment = require('moment');
var request = require('request');
var webpack = require('webpack');
var config = require('./webpack.config');
var favicon = require('serve-favicon');

var rwController = require('./controllers/RWController');

// Load environment variables from .env file
dotenv.load();

// ES6 Transpiler
require('babel-core/register');
require('babel-polyfill');

// Models
var User = require('./models/User');
var RecentWork = require('./models/RecentWork');

// Controllers
var userController = require('./controllers/user');
var contactController = require('./controllers/contact');

// React and Server-Side Rendering
var routes = require('./app/routes');
var configureStore = require('./app/store/configureStore').default;

var app = express();

var compiler = webpack(config);
var mongoURL = "mongodb://silampawar:rockinginfy@cluster0-shard-00-00-clz8f.mongodb.net:27017,cluster0-shard-00-01-clz8f.mongodb.net:27017,cluster0-shard-00-02-clz8f.mongodb.net:27017/NewLoginApp?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin";
mongoose.connect(mongoURL);
mongoose.connection.on('error', function() {
  console.log('MongoDB Connection Error. Please make sure that MongoDB is running.');
  process.exit(1);
});
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.set('port', process.env.PORT || 3000);
app.use(compression());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {


  var rwNew = RecentWork();
//  RecentWork.findOne({ workTitle: 'Sample One' }).remove().exec();
//  RecentWork.findOne({ workTitle: 'New Project One' }).remove().exec();


  //rwNew.remove({},()=>console.log('All Work deleted'));
  rwNew.imgSrc = 'img1.jpeg';
   rwNew.mainImageSrc = 'sample.png';
    rwNew.workTitle = 'Reaction Timer';
    rwNew.description = 'This simple little Reaction Timer is a fun little proof of concept to test your reaction speed by timing how long it takes for you to click a button when randomly prompted. This was built in JS/HTML/CSS and was produced to simply recreate a game I had once played before. You can view an online demo over at: <a href= "http://aaronvanston.github.io/Reaction-Timer/">here</a></a>';
    rwNew.urlWebsite = 'www.google.com';
    rwNew.urlGitHub = 'www.github.com';
    rwNew.DEL_FLAG = 'N';
     rwNew.tags = 'ReactJS, NodeJS, HTML, CSS, MongoDB';
     rwNew.uploadedDate = new Date();
rwNew.save();


  req.isAuthenticated = function() {
    var token = (req.headers.authorization && req.headers.authorization.split(' ')[1]) || req.cookies.token;
    try {
      return jwt.verify(token, process.env.TOKEN_SECRET);
    } catch (err) {
      return false;
    }
  };

  if (req.isAuthenticated()) {
    var payload = req.isAuthenticated();
    User.findById(payload.sub, function(err, user) {
      req.user = user;
      next();
    });
  } else {
    next();
  }
});

if (app.get('env') === 'development') {
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));
  app.use(require('webpack-hot-middleware')(compiler));
}

app.post('/contact', contactController.contactPost);
app.put('/account', userController.ensureAuthenticated, userController.accountPut);
app.delete('/account', userController.ensureAuthenticated, userController.accountDelete);
app.post('/signup', userController.signupPost);
app.post('/login', userController.loginPost);
app.post('/forgot', userController.forgotPost);
app.post('/reset/:token', userController.resetPost);
app.get('/unlink/:provider', userController.ensureAuthenticated, userController.unlink);
app.post('/auth/google', userController.authGoogle);
app.get('/auth/google/callback', userController.authGoogleCallback);
app.post('/auth/twitter', userController.authTwitter);
app.get('/auth/twitter/callback', userController.authTwitterCallback);
app.post('/auth/github', userController.authGithub);
app.get('/auth/github/callback', userController.authGithubCallback);
/*added for recent work*/
app.get('/getAllWork', rwController.findAll);
app.get('/getAllWork/:id', rwController.findById);

// React server rendering
app.use(function(req, res) {
  var initialState = {
    auth: { token: req.cookies.token, user: req.user },
    messages: {}
  };
  var store = configureStore(initialState);

  Router.match({ routes: routes.default(store), location: req.url }, function(err, redirectLocation, renderProps) {
    if (err) {
      res.status(500).send(err.message);
    } else if (redirectLocation) {
      res.status(302).redirect(redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      var html = ReactDOM.renderToString(React.createElement(Provider, { store: store },
        React.createElement(Router.RouterContext, renderProps)
      ));
      res.render('layout', { title:'SilamPawar',
        html: html,
        initialState: store.getState()
      });
    } else {
      res.sendStatus(404);
    }
  });
});

// Production error handler
if (app.get('env') === 'production') {
  app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.sendStatus(err.status || 500);
  });
}

app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});

module.exports = app;
