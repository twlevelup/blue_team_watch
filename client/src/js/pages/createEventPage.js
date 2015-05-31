'use strict';

var Page = require('../framework/page'),
  EventsCollection = require('../collections/calendarEvents');

var CreateEventPage = Page.extend({

  id: 'create-event-page',

  template: require('../../templates/pages/createEventPage.hbs'),

  buttonEvents: {
    right: 'nextStepOfCreateEvent',
    left: 'goToMainMenu',
    top: 'scrollUp',
    bottom: 'scrollDown'
  },

  // FIXME: due to time constarints I declared the following lists as arrays,
  //        but they should really be declared as collections.
  eventCategories: ['Art', 'Music', 'Food', 'Story', 'Sport', 'Games'],
  eventLocations: ['Fire Pit', 'The Rocks', 'Bondi Beach', 'Newtown', 'Surry Hills'],
  eventDates: [],
  eventTime: ['6am', '8am', '10am', '12am', '2pm', '4pm', '6pm', '8pm'],

  // an event can be scheduled with a max anticipation of 7 days
  days: 7,

  newEventAttribute: [],

  eventsCollection: new EventsCollection(),

  goToMainMenu: function() {
    //clearing the new event attributes array
    this.newEventAttribute = [];
    global.App.navigate('mainMenu');
  },

  getNextSevenDaysDate: function() {
    for (var i = 0; i < this.days; i += 1) {
      var day = new Date();
      day.setDate(day.getDate() + i);
      this.eventDates.push(this.formatDate(day));
    }
  },

  formatDate: function(date) {
    date = date.toString().split(' ');
    var formattedDate = '';
    formattedDate = formattedDate + date[0] + ' ' + date[2] + ' ' + date[1];
    return formattedDate;
  },

  nextStepOfCreateEvent: function() {
    if (this.newEventAttribute.length === 4) {

      var newEvent = {
        category: this.newEventAttribute[0],
        date: this.newEventAttribute[2],
        location: this.newEventAttribute[1],
        time: this.newEventAttribute[3]
      };
      this.eventsCollection.push(newEvent);
      this.newEventAttribute = [];
      global.App.router.navigate('', true);

    }
    else {
      var currentAttribute = this.$('.active').html();
      this.newEventAttribute.push(currentAttribute);
      this.render();
    }
  },

  scrollDown: function() {
    this.scrollDownWithCursor();
  },

  scrollUp: function() {
    this.scrollUpWithCursor();
  },

  render: function() {
    if (this.newEventAttribute.length === 1) {
      this.$el.html(this.template());
      this.renderListOf(this.eventLocations);
      return this;
    }
    else if (this.newEventAttribute.length === 2) {
      this.getNextSevenDaysDate();
      this.$el.html(this.template());
      this.renderListOf(this.eventDates);
      return this;
    }
    else if (this.newEventAttribute.length === 3) {
      this.$el.html(this.template());
      this.renderListOf(this.eventTime);
      return this;
    }
    else if (this.newEventAttribute.length === 4) {
      this.$el.html(this.template());
      this.renderEventCreatedScreen();
      return this;
    }
    else {
      this.$el.html(this.template());
      this.renderListOf(this.eventCategories);
      return this;
    }

  },

  renderListOf: function(attribute) {
    for (var i = 0; i < attribute.length; i += 1) {
      if (i === 0) {
        this.$el.find('#attributes-list').append('<li class="active">' + attribute[i] + '</li>');
      }
      else {
        this.$el.find('#attributes-list').append('<li>' + attribute[i] + '</li>');
      }
    }
  },

  renderEventCreatedScreen: function() {
    this.$el.find('#attributes-list').append('<li class="active">Event Created!</li>');
  }

});

module.exports = CreateEventPage;
