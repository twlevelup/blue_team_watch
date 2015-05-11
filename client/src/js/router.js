'use strict';

var Router = require('./framework/router.js'),
  HomePage = require('./pages/homePage'),
  MainMenuPage = require('./pages/mainMenuPage'),
  homePage = new HomePage(),
  mainMenuPage = new MainMenuPage();

var AppRouter = Router.extend({

  routes: {
    '': 'home',
    mainMenu: 'mainMenu'
  },

  home: function() {
    this.renderView(homePage);
  },

  mainMenu: function() {
    this.renderView(mainMenuPage);
  }

});

module.exports = AppRouter;
