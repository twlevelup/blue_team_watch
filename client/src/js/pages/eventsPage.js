'use strict';

var PageView = require('../framework/page'),
  EventsCollection = require('../collections/calendarEvents'),
  EventView = require('../views/event');

var EventsView = PageView.extend({

  id: 'events',

  category: 'category',

  template: require('../../templates/pages/events.hbs'),

  buttonEvents: {
    right: 'addToMyEvents',
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

    this.$el.find('.event-card').first().addClass('active');

    this.$el.find('#event-category').text('All Categories');

    return this;
  },

  seedEvents: function() {
    this.eventsCollection.each(function(calendarEvent) {
      this.eventsCollection.remove(calendarEvent);
    }, this);

    this.eventsCollection.push([
        {name: 'Fishing', date: '10/05/2015', location: 'Darling Harbour', category: 'sport'},
        {name: 'Play guitar', date: '11/05/2015', location: 'Sydney', category: 'music'},
        {name: 'Sky diving', date: '12/05/2015', location: 'Maitland', category: 'sport'}
      ]);
  },

  createEventHTML: function(calendarEvent) {
    var view = new EventView({
      model: calendarEvent
    });
    return view.render().el;
  },

  filterEvents: function(category) {
    return this.eventsCollection.where({category: category});
  },

  goToCategoriesPage: function() {
    global.App.router.navigate('categories', true);
  },

  scrollDown: function() {
    if (parseInt($('li.active').index()) < this.eventsCollection.length - 1) {
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
  },

  addToMyEvents: function () {
    this.eventsCollection.get(parseInt($('li.active').index())).set({myEvent: true});
  }

});

module.exports = EventsView;
