'use strict';

var PageView = require('../framework/page');

var homeScreen = PageView.extend({

  id: 'home',

  template: require('../../templates/pages/home.hbs'),

  buttonEvents: {
    right: 'goToContacts',
    top: 'scrollUp',
    bottom: 'scrollDown'
  },

  goToContacts: function() {
    global.App.navigate('contacts', true);
  },

  scrollUp: function() {
    $('#watch-face').animate({scrollTop: '-=70px'});
  },

  scrollDown: function() {
    $('#watch-face').animate({scrollTop: '+=70px'});
  },

  render: function() {

    this.$el.html(this.template());
    // variable containing date should be placed in below.
    this.$('#date-container').append('<p>formatedatenow</p>');
    // this.formatDate()
    return this;

  },

  formatDate: function(date) {
    date = date.toString().split(' ');

    var formattedDate = '';
    formattedDate = formattedDate + date[0] + ' ' + date[2] + ' ' + date[1];
    return formattedDate;

  }

});

module.exports = homeScreen;
