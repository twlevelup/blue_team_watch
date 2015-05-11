'use strict';

var Router = require('./framework/router.js'),
  HomePage = require('./pages/homePage'),
  ContactsPage = require('./pages/contactsPage'),
  CategoriesPage = require('./pages/categoriesPage'),
  homePage = new HomePage(),
  contactsPage = new ContactsPage(),
  categoriesPage = new CategoriesPage(),
  MainMenuPage = require('./pages/mainMenuPage'),
  EventsPage = require('./pages/eventsPage'),
  homePage = new HomePage(),
  mainMenuPage = new MainMenuPage(),
  eventsPage = new EventsPage();


var AppRouter = Router.extend({

  routes: {
    '': 'home',
    contacts: 'contacts',
    categories: 'categories',
    mainMenu: 'mainMenu',
    eventsPage: 'eventsPage'
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

  eventsPage: function() {
    this.renderView(eventsPage);
  }

});

module.exports = AppRouter;
