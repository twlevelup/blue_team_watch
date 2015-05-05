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



  describe('render', function () {

    it('should dispaly the time', function () {
      homePage.render();
      var timeElement = homePage.$el.find('.time-interface').text();
      expect(timeElement).toMatch(/\d+:\d+/);
    });

    it('returns the view object', function() {
      expect(homePage.render()).toEqual(homePage);
    });

    describe('battery', function() {

      it('should display the battery as 100%', function() {
          homePage.render();
          expect(homePage.$("#battery").html()).toContain('<p>100%</p>');
      });

    });

  });

});
