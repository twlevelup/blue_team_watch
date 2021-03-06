'use strict';

var PageView = require('../framework/page');

var homeScreen = PageView.extend({

  id: 'home',

  template: require('../../templates/pages/home.hbs'),

  buttonEvents: {
    right: 'goToMainMenu',
    top: 'scrollUp',
    bottom: 'scrollDown'
  },

  showCurrentTime: function() {
    var date = new Date(),
    minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
    var currentTime = date.getHours() + ':' + minutes;
    var self = this;
    this.$('#time .time-interface').html(currentTime);
  },

  goToMainMenu: function() {
    global.App.navigate('mainMenu', true);
  },

  scrollUp: function() {
    $('#watch-face').animate({scrollTop: '-=70px'});
  },

  scrollDown: function() {
    $('#watch-face').animate({scrollTop: '+=70px'});
  },

  render: function() {
    var self = this;
    this.$el.html(this.template());
    var date = this.formatDate(new Date());
    this.$('#date-container').append('<p>' + date + '</p>');
    this.showCurrentTime();

    (function updateCurrentTime() {
      self.showCurrentTime();
      setTimeout(updateCurrentTime, 1000);
    })();

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
