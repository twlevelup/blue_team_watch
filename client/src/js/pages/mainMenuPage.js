'use strict';

var PageView = require('../framework/page');

var MainMenuView = PageView.extend({

  id: 'mainMenu',

  template: require('../../templates/pages/mainMenu.hbs'),

  buttonEvents: {
    left: 'goToHomePage'
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
  }

}
);

module.exports = MainMenuView;
