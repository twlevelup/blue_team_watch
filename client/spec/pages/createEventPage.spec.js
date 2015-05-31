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

      // it('should prompt the user to the next screen for creating an event', function () {
      //   spyOn(createEventPage, 'nextStepOfCreateEvent');
      //   createEventPage.trigger('right');
      //   expect(createEventPage.nextStepOfCreateEvent).toHaveBeenCalled();
      // });

    });

  });

  describe('rendering', function () {

    var html;

    beforeEach(function () {
      createEventPage.render();
      html = createEventPage.$el.html();
    });

    it('should produce the correct HTML', function () {
      expect(html).toContainText('Create Event');
    });

    it('returns the view object', function() {
      expect(createEventPage.render()).toEqual(createEventPage);
    });

  });

});
