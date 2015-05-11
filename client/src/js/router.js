'use strict';

var Router = require('./framework/router.js'),
  HomePage = require('./pages/homePage'),
  ContactsPage = require('./pages/contactsPage'),
  CategoriesPage = require('./pages/categoriesPage'),
  homePage = new HomePage(),
  contactsPage = new ContactsPage(),
  categoriesPage = new CategoriesPage(),
  MainMenuPage = require('./pages/mainMenuPage'),
  homePage = new HomePage(),
  mainMenuPage = new MainMenuPage();


var AppRouter = Router.extend({

  routes: {
    '': 'home',
    contacts: 'contacts',
    categories: 'categories',
    mainMenu: 'mainMenu'
  },

  home: function() {
    this.renderView(homePage);
  },

  contacts: function() {
    this.renderView(contactsPage);
  },

  categories: function() {
    this.renderView(categoriesPage);
  },
  
  mainMenu: function() {
    this.renderView(mainMenuPage);
  },
});

module.exports = AppRouter;
