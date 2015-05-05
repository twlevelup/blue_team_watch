'use strict';

var HomePage = require('../../src/js/pages/homePage'),
  Router = require('../../src/js/router'),
  App = require('../../src/js/app');

global.App = App;

describe('The Home Page', function() {

  var homePage;

  beforeEach(function () {
    homePage = new HomePage();
  });

  describe('button event handlers', function () {

    beforeEach(function () {
      homePage.setButtonEvents();
    });

    describe('right', function () {

      beforeEach(function () {
        spyOn(global.App, 'navigate');
      });

      it('should take the user to the contacts page', function () {

        homePage.trigger('right');

        expect(global.App.navigate).toHaveBeenCalled();
      });

    });

  });

  describe('formatting', function() {

    it('should 2nd of Feburary have correct format', function() {

      var date = new Date('02/02/2015');
      expect(homePage.formatDate(date)).toEqual('Mon 02 Feb');

    });

    it('should 3rd of March have correct format', function() {

      var date = new Date('03/03/2016');
      expect(homePage.formatDate(date)).toEqual('Thu 03 Mar');

    });

  });

  describe('rendering', function () {

    it('returns the view object', function() {
      expect(homePage.render()).toEqual(homePage);
    });

    describe('date', function() {


      it('should render the date', function() {
        var expectedFormattedDate = homePage.formatDate(new Date("02/02/2015"));

        homePage.render();

        expect(homePage.$('#date-container').html()).toEqual("<p>" + expectedFormattedDate + "</p>");
      });

    });

  });


});
