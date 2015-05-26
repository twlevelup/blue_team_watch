'use strict';

var EventView = require('../../src/js/views/event'),
  Router = require('../../src/js/router.js'),
  CalendarEvent = require('../../src/js/models/calendarEvent');

global.router = new Router();

describe('The Event View', function() {

  var eventView, router, calendarEvent;

  beforeEach(function () {
    calendarEvent = new CalendarEvent({
      name : "Fishing",
      date : "22/04/2015",
      location : "Sydney",
      category : "sport"
    });

    eventView = new EventView ({
      model: calendarEvent
    });

    router = new Router();
  });

  describe('rendering', function () {

    it('should display event title', function () {
      eventView.render();
      expect(eventView.$el.find('div').text()).toContain('Fishing');
    });

    it('should display event date', function () {
      eventView.render();
      expect(eventView.$el.find('span').text()).toContain('22/04/2015');
    });

    it('should display event location', function () {
      eventView.render();
      expect(eventView.$el.find('span').text()).toContain('Sydney');
    });

  });

});
