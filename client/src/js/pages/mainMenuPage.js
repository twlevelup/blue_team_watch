'use strict';

var PageView = require('../framework/page');

var MainMenuView = PageView.extend({

  id: 'mainMenu',

  template: require('../../templates/pages/mainMenu.hbs'),

  buttonEvents: {
    left: 'goToHomePage',
    right: 'goToNextRightScreen',
    top: 'scrollUp',
    bottom: 'scrollDown'
  },

  initialize: function() {
    var self = this;
  },

  goToHomePage: function() {
    global.App.router.navigate('', true);
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
  },

  goToNextRightScreen: function() {
    var nextScreen = $('.active').attr('data-target');
    global.App.router.navigate(nextScreen, true);
  }

});

module.exports = MainMenuView;
