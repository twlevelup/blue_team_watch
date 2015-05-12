'use strict';

var PageView = require('../framework/page'),
  EventsCollection = require('../collections/calendarEvents');

var EventsView = PageView.extend({

  id: 'events',

  template: require('../../templates/pages/events.hbs'),

  buttonEvents: {
    right: '',
    face: '',
    left: 'back'
  },

  initialize: function() {
    var self = this;
    this.eventsCollection = new EventsCollection();

    // Un-comment to add events
    // this.seedEvents()
  },

  render: function() {

    this.$el.html(this.template());

    return this;
  },

  seedEvents: function() {
    this.eventsCollection.push([
      // array of event objects here
      {name: 'Adam', date: '0431 111 111', location: 'Adam', category: '0431 111 111'},
      {name: 'Adam2', date: '0431 111 112', location: 'Adam2', category: '0431 111 112'}
    ]);
  }

});

module.exports = EventsView;
