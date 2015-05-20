'use strict';

var PageView = require('../framework/page'),
  EventsCollection = require('../collections/calendarEvents'),
  EventView = require('../views/event');

var EventsView = PageView.extend({

  id: 'events',

  template: require('../../templates/pages/events.hbs'),

  buttonEvents: {
    right: '',
    face: '',
    left: 'goToCategoriesPage',
    bottom: 'scrollDown',
    top: 'scrollUp'
  },

  initialize: function() {
    var self = this;
    this.eventsCollection = new EventsCollection();
    this.listenTo(this.eventsCollection, 'change', this.render);

    // Uncomment to seed DB
    // this.seedEvents();
  },

  render: function() {
    this.$el.html(this.template());
    this.eventsCollection.each(function(calendarEvent) {
      this.$el.find('#event-list').append(this.createEventHTML(calendarEvent));
    }, this);

    this.$el.find('#event-category').text('All Categories');

    return this;
  },

  seedEvents: function() {
    this.eventsCollection.each(function(calendarEvent) {
      this.eventsCollection.remove(calendarEvent);
    }, this);
    this.eventsCollection.push([
        {name: 'Fishing', date: '10/05/2015', location: 'Darling Harbour', category: 'sport'},
        {name: 'Play guitar', date: '07/06/2015', location: 'Sydney', category: 'music'},
        {name: 'Sky diving', date: '01/03/2015', location: 'Maitland', category: 'sport'}
      ]);
  },

  createEventHTML: function(calendarEvent) {
    var view = new EventView({
      model: calendarEvent
    });
    return view.render().el;
  },

  goToCategoriesPage: function() {
    global.App.router.navigate('categories', true);
  },

  scrollDown: function() {
    $('#event-list').animate({scrollTop: '+=135px'});
  },

  scrollUp: function() {
    $('#event-list').animate({scrollTop: '-=135px'});
  }

});

module.exports = EventsView;
