'use strict';

var Router = require('./framework/router.js'),
  HomePage = require('./pages/homePage'),
  ContactsPage = require('./pages/contactsPage'),
  CategoriesPage = require('./pages/categoriesPage'),
  homePage = new HomePage(),
  contactsPage = new ContactsPage(),
  categoriesPage = new CategoriesPage();

var AppRouter = Router.extend({

  routes: {
    '': 'home',
    contacts: 'contacts',
    categories: 'categories'
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

});

module.exports = AppRouter;
