'use strict';

var Router = require('./framework/router.js'),
  HomePage = require('./pages/homePage'),
  ContactsPage = require('./pages/contactsPage'),
  CategoriesPage = require('./pages/categoriesPage'),
  MyEventsPage = require('./pages/MyEventsPage'),
  CreateEvent = require('./pages/createEventPage'),
  homePage = new HomePage(),
  contactsPage = new ContactsPage(),
  categoriesPage = new CategoriesPage(),
  myEventsPage = new MyEventsPage(),
  MainMenuPage = require('./pages/mainMenuPage'),
  EventsPage = require('./pages/eventsPage'),
  mainMenuPage = new MainMenuPage(),
  eventsPage = new EventsPage(),
  createEventPage = new CreateEvent();


var AppRouter = Router.extend({

  routes: {
    '': 'home',
    contacts: 'contacts',
    categories: 'categories',
    mainMenu: 'mainMenu',
    eventsPage: 'eventsPage',
    myEvents: 'myEvents',
    createEvent: 'createEventPage'
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
  },

  myEvents: function() {
    this.renderView(myEventsPage);
  },

  createEventPage: function() {
    this.renderView(createEventPage);
  }

});

module.exports = AppRouter;
