'use strict';

var PageView = require('../framework/page');

var MainMenuView = PageView.extend({

  id: 'mainMenu',

  template: require('../../templates/pages/mainMenu.hbs'),

  buttonEvents: {
    left: 'goToHomePage',
    right: 'goToCategoriesPage',
    top: 'scrollUp',
    bottom: 'scrollDown'
  },

  initialize: function() {
    var self = this;
  },

  goToHomePage: function() {
    global.App.router.navigate('', true);
  },

  goToCategoriesPage: function() {
    global.App.router.navigate('categories', true);
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  scrollDown: function() {
    Backbone.demoCursor();
  },

  scrollUp: function() {
    Backbone.demoCursor(true);
  }

}
);

module.exports = MainMenuView;
