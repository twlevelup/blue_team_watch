'use strict';

var EventsPage = require('../../src/js/pages/eventsPage'),
  Router = require('../../src/js/router'),
  App = require('../../src/js/app');

global.App = App;

describe('The Events Page', function() {

  var eventsPage;

  beforeEach(function () {
    eventsPage = new EventsPage();
  });

  // Collection needs to be defined within App

  // describe('events data', function () {

    it('should have a events collection', function () {
      expect(eventsPage.eventsCollection).toBeDefined();
    });

  // });

  describe('rendering', function () {

    describe('events should be in order', function() {

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


});
