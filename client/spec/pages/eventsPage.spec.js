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
      {date: "10/05/2015"},
      {date: "07/05/2015"},
      {date: "11/05/2015"}
    ]);
  });

  describe('rendering', function () {

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



  });


});
