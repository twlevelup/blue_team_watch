'use strict';

var PageView = require('../framework/page');

// var ContactsCollection = require('../collections/contacts'),
//   ContactView = require('../views/contact');

var CategoriesView = PageView.extend({

  id: 'categories',

  template: require('../../templates/pages/categories.hbs'),

  buttonEvents: {
    left: 'goToMainMenuPage',
    right: 'goToEventsPage'
  },

  goToEventsPage: function() {
    global.App.router.navigate('eventsPage', true);
  },

  goToMainMenuPage: function() {
    global.App.router.navigate('mainMenu', true);
  },

  render: function() {

    this.$el.html(this.template());
    return this;
  }

}
);

module.exports = CategoriesView;
