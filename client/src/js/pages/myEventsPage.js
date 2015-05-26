'use strict';

var PageView = require('../framework/page'),
  EventsCollection = require('../collections/calendarEvents'),
  EventView = require('../views/event');

var MyEventsView = PageView.extend({

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
  },

  render: function() {
    this.$el.html(this.template());

    // Limit to myEvents == true
    var myEvents = this.eventsCollection.where({myEvent: true});
    window.console.log(myEvents);
    window.console.log(myEvents.length);

    for (var i = 0; i < myEvents.length; i += 1) {
      this.$el.find('#event-list').append(this.createEventHTML(myEvents[i]));
    }

    // myEvents.each(function(calendarEvent) {
    //   this.$el.find('#event-list').append(this.createEventHTML(calendarEvent));
    // }, this);

    this.$el.find('#event-category').text('My Events');

    return this;
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

module.exports = MyEventsView;
