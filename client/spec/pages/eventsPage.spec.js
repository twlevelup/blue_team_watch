'use strict';

var EventsPage = require('../../src/js/pages/eventsPage'),
  Router = require('../../src/js/router'),
  App = require('../../src/js/app'),
  CalendarEvent = require('../../src/js/models/calendarEvent');

global.App = App;

describe('The Events Page', function() {

  var eventsPage;
  var CalendarEvents = Backbone.Collection.extend({
    model: CalendarEvent
  });

  beforeEach(function () {
    eventsPage = new EventsPage();
    eventsPage.eventsCollection = new CalendarEvents();
    eventsPage.eventsCollection.push([
      {name: "Food Festival", category: "Food", date: "10/05/2015", myEvent: false},
      {name: "Second Food Festival", category: "Food", date: "07/05/2015", myEvent: false},
      {name: "Water Festival", category: "Water", date: "11/05/2015", myEvent: true}
    ]);
  });

  describe('rendering', function () {
    describe('Food category selected', function () {
      beforeEach(function () {
        global.App.selectedCategory = "Food";
      });

      it('should display the event category', function() {
        eventsPage.render();
        expect(eventsPage.$el.find('#event-category').text()).toEqual('Food');
      });

      it('should render a list of event models', function() {
        eventsPage.render();
        expect(eventsPage.el.innerHTML).toContain('10/05/2015');
        expect(eventsPage.el.innerHTML).toContain('07/05/2015');
      });
    });

    describe('All Categories selected', function () {
      beforeEach(function () {
        global.App.selectedCategory = "All Categories";
      });

      it('returns the event view object', function() {
        expect(eventsPage.render()).toEqual(eventsPage);
      });

      it('should render a list of event models', function() {
        eventsPage.render();
        expect(eventsPage.el.innerHTML).toContain('10/05/2015');
        expect(eventsPage.el.innerHTML).toContain('07/05/2015');
        expect(eventsPage.el.innerHTML).toContain('11/05/2015');
      });

      it('should display the events in sorted order', function() {
          eventsPage.render();

          var dates = $('.date');
          var dateDigits = dates.map(function(date) {
            return date.innerText.match(/\d+/);
          });

          expect(dateDigits).toEqual(dateDigits.sort());
      });

      it('should display the event category', function() {
        eventsPage.render();
        expect(eventsPage.$el.find('#event-category').text()).toEqual('All Categories');
      });
    });
  });

  describe('events', function() {

    it('should go back to the categories page', function() {
      spyOn(eventsPage, 'goToCategoriesPage');
      eventsPage.setButtonEvents();
      eventsPage.trigger('left');
      expect(eventsPage.goToCategoriesPage).toHaveBeenCalled();
    });

    it('should scroll down', function() {
      spyOn(eventsPage, 'scrollDown');
      eventsPage.setButtonEvents();
      eventsPage.trigger('bottom');
      expect(eventsPage.scrollDown).toHaveBeenCalled();
    });

    it('should scroll up', function() {
      spyOn(eventsPage, 'scrollUp');
      eventsPage.setButtonEvents();
      eventsPage.trigger('top');
      expect(eventsPage.scrollUp).toHaveBeenCalled();
    });

    it('should add event to My Events', function() {
      spyOn(eventsPage, 'addToMyEvents');
      eventsPage.setButtonEvents();
      eventsPage.trigger('right');
      expect(eventsPage.addToMyEvents).toHaveBeenCalled();
    });
  });

  describe('my events', function(){

    it('should be able to set event as my event', function() {
      spyOn($.fn, "index").and.returnValue(0);
      expect(eventsPage.eventsCollection.at(0).attributes.myEvent).toEqual(false);
      eventsPage.addToMyEvents();
      expect(eventsPage.eventsCollection.at(0).attributes.myEvent).toEqual(true);
    });

    it('should not set event as my event if not added', function() {
      expect(eventsPage.eventsCollection.at(1).attributes.myEvent).toEqual(false);
    });

  });
});
