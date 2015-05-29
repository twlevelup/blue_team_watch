'use strict';

var MyEventsPage = require('../../src/js/pages/myEventsPage'),
  Router = require('../../src/js/router'),
  App = require('../../src/js/app'),
  CalendarEvent = require('../../src/js/models/calendarEvent');

global.App = App;

describe('The My Events Page', function() {

  var myEventsPage;
  var CalendarEvents = Backbone.Collection.extend({
    model: CalendarEvent
  });

  beforeEach(function () {
    myEventsPage = new MyEventsPage();
    myEventsPage.eventsCollection = new CalendarEvents();
    myEventsPage.eventsCollection.push([
      {date: "10/05/2015", myEvent: true},
      {date: "07/05/2015", myEvent: true},
      {date: "11/05/2015"}
    ]);
  });

  describe('rendering', function () {

    it('returns the event view object', function() {
      expect(myEventsPage.render()).toEqual(myEventsPage);
    });

    it('returns my events collection', function() {
      myEventsPage.render();
      expect(myEventsPage.$el.find('li').length).toEqual(2);
    });

    it('should display my events', function() {
      myEventsPage.render();
      expect(myEventsPage.$el.find('#event-category').text()).toEqual('My Events');
    });

  });

  describe('events', function() {

    it('should go back to the categories page', function() {
      spyOn(myEventsPage, 'goToMainMenuPage');
      myEventsPage.setButtonEvents();
      myEventsPage.trigger('left');
      expect(myEventsPage.goToMainMenuPage).toHaveBeenCalled();
    });

    it('should scroll down', function() {
      spyOn(myEventsPage, 'scrollDown');
      myEventsPage.setButtonEvents();
      myEventsPage.trigger('bottom');
      expect(myEventsPage.scrollDown).toHaveBeenCalled();
    });

    it('should scroll up', function() {
      spyOn(myEventsPage, 'scrollUp');
      myEventsPage.setButtonEvents();
      myEventsPage.trigger('top');
      expect(myEventsPage.scrollUp).toHaveBeenCalled();
    });

  });


});
