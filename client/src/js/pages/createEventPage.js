'use strict';

var Page = require('../framework/page'),
  EventsCollection = require('../collections/calendarEvents');

var CreateEventPage = Page.extend({

  id: 'create-event-page',

  template: require('../../templates/pages/createEventPage.hbs'),

  buttonEvents: {
    right: 'saveCreatedEvent',
    left: 'goToMainMenu',
    top: 'scrollUp',
    bottom: 'scrollDown'
  },

  eventsCollection: new EventsCollection(),

  goToMainMenu: function() {
    global.App.navigate('mainMenu');
  },

  saveCreatedEvent: function() {
    var newEvent = {category: 'Story', date: '10/05/2015', location: 'Fire Pit', time: '7pm'};
    this.eventsCollection.push(newEvent);
  },
  scrollUp: function() {
    $('#watch-face').animate({scrollTop: '-=70px'});
  },

  scrollDown: function() {
    $('#watch-face').animate({scrollTop: '+=70px'});
  },

  render: function() {

    this.$el.html(this.template());

    return this;

  }

});

module.exports = CreateEventPage;
