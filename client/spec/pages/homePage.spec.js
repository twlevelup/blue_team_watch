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

  describe('rendering', function () {

    // it('should render the date', function () {
    //   homePage.render();
    //   expect(homePage.el.innerHTML).toContain('<h4>TUE 02 FEB</h4>');
    // });

    it('returns the view object', function() {
      expect(homePage.render()).toEqual(homePage);
    });

    // it('should render the date view', function() {
    //   expect()
    // });

  });

});
