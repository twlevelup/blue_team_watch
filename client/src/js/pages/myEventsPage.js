'use strict';

var PageView = require('../framework/page'),
  EventsCollection = require('../collections/calendarEvents'),
  EventView = require('../views/event'),
  myEvents = [];

var MyEventsView = PageView.extend({

  id: 'events',

  template: require('../../templates/pages/events.hbs'),

  buttonEvents: {
    right: '',
    face: '',
    left: 'goToMainMenuPage',
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
    myEvents = this.eventsCollection.where({myEvent: true});

    for (var i = 0; i < myEvents.length; i += 1) {
      this.$el.find('#event-list').append(this.createEventHTML(myEvents[i]));
    }

    this.$el.find('.event-card').first().addClass('active');

    this.$el.find('#event-category').text('My Events');

    return this;
  },

  createEventHTML: function(calendarEvent) {
    var view = new EventView({
      model: calendarEvent
    });
    return view.render().el;
  },

  goToMainMenuPage: function() {
    global.App.router.navigate('mainMenu', true);
  },

  scrollDown: function() {
    if (parseInt($('li.active').index()) < myEvents.length - 1) {
      $('#event-list').animate({scrollTop: '+=135px'});
      var indexOfNextEventCard = parseInt($('li.active').index()) + 1;
      this.toggleActiveEventCard(indexOfNextEventCard);
    }
  },

  scrollUp: function() {
    if (parseInt($('li.active').index()) > 0) {
      $('#event-list').animate({scrollTop: '-=135px'});
      var indexOfNextEventCard = parseInt($('li.active').index()) - 1;
      this.toggleActiveEventCard(indexOfNextEventCard);
    }
  },

  toggleActiveEventCard: function(indexOfNextEventCard) {
    $('li.active').removeClass('active');
    var nextEventCard = this.$el.find('.event-card').eq(indexOfNextEventCard);
    nextEventCard.addClass('active');
  }

});

module.exports = MyEventsView;
