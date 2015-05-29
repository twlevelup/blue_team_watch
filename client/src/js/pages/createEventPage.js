'use strict';

var Page = require('../framework/page'),
  EventsCollection = require('../collections/calendarEvents');

var CreateEventPage = Page.extend({

  id: 'create-event-page',

  template: require('../../templates/pages/createEventPage.hbs'),

  buttonEvents: {
    right: 'saveCreatedEvent',
    left: 'goToMainMenu'
  },

  eventsCollection: new EventsCollection(),

  goToMainMenu: function() {
    global.App.navigate('mainMenu');
  },

  saveCreatedEvent: function() {
    var newEvent = {name: 'Another exciting story', category: 'Story', date: '10/05/2015'};
    this.eventsCollection.push(newEvent);
  },

  render: function() {

    this.$el.html(this.template());

    return this;

  }

});

module.exports = CreateEventPage;
