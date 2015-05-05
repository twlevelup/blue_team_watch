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

  showCurrentTime: function() {
    var date = new Date(),
    minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
    var currentTime = date.getHours() + ':' + minutes;
    var self = this;
    this.$('#time .time-interface').html(currentTime);
    setInterval(function() {
      var date = new Date(),
      minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
      currentTime = date.getHours() + ':' + minutes;
      self.$('#time .time-interface').html(currentTime);
    }, 1000);
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

    this.showCurrentTime();

    return this;

  }

});

module.exports = homeScreen;
