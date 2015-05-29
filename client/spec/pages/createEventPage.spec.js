'use strict';

var CreateEventPage = require('../../src/js/pages/createEventPage.js'),
  Router = require('../../src/js/router'),
  App = require('../../src/js/app'),
  CalendarEvent = require('../../src/js/models/calendarEvent');

global.App = App;

describe('create event', function() {

  var createEventPage;

  beforeEach(function () {
    createEventPage = new CreateEventPage();
  });

  describe('button event handlers', function () {

    beforeEach(function () {
      createEventPage.setButtonEvents();
    });

    describe('left', function () {

      it('should take you back to the menu page', function () {
        spyOn(global.App, 'navigate');
        createEventPage.trigger('left');
        expect(global.App.navigate).toHaveBeenCalledWith('mainMenu');
      });

    });

    describe('right', function () {

      var CalendarEvents = Backbone.Collection.extend({
        model: CalendarEvent
      });

      it('should save the new event information', function () {
        createEventPage.eventsCollection = new CalendarEvents();
        createEventPage.trigger('right');
        var newEvent = createEventPage.eventsCollection.at(0);
        expect(newEvent.get('category')).toEqual('Story');
        expect(newEvent.get('location')).toEqual('Fire Pit');
        expect(newEvent.get('date')).toEqual('10/05/2015');
        expect(newEvent.get('time')).toEqual('7pm');
      });

    });

  });

  describe('rendering', function () {

    var html;

    beforeEach(function () {
      createEventPage.render();
      html = createEventPage.$el.html();
    });

    it('should produce the correct HTML', function () {
      expect(html).toContainText('create event');
    });

    it('returns the view object', function() {
      expect(createEventPage.render()).toEqual(createEventPage);
    });

    it('should display the category', function() {
      expect(html).toContainText('Story');
    });

    it('should display the date', function() {
      expect(html).toContainText('10/05/2015');
    });

    it('should display the location', function() {
      expect(html).toContainText('Fire Pit');
    });
    
    it('should display the time', function() {
      expect(html).toContainText('7pm');
    });

  });

});
