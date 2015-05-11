'use strict';

var MainMenuPage = require('../../src/js/pages/mainMenuPage'),
  Router = require('../../src/js/router.js');

global.router = new Router();

describe('The Main Menu Page', function() {

  var mainMenuPage, router;

  beforeEach(function () {
    router = new Router();
    mainMenuPage = new MainMenuPage();
  });

  describe('button events', function () {

    describe('left', function () {
      it('should take the user to the home page', function () {
        spyOn(mainMenuPage, 'goToHomePage');
        mainMenuPage.setButtonEvents();
        mainMenuPage.trigger('left');
        expect(mainMenuPage.goToHomePage).toHaveBeenCalled();
      });

    });

    describe('right', function () {
      it('should take the user to the categories page', function () {
        spyOn(mainMenuPage, 'goToCategoriesPage');
        mainMenuPage.setButtonEvents();
        mainMenuPage.trigger('right');
        expect(mainMenuPage.goToCategoriesPage).toHaveBeenCalled();
      });

    });

  });

  describe('rendering', function () {

    it('should produce the correct HTML', function () {
      mainMenuPage.render();
      expect(mainMenuPage.el.innerHTML).toContain('<h1>Main Menu</h1>');
    });

    it('should contain the events list option', function () {
      mainMenuPage.render();
      expect(mainMenuPage.el.innerHTML).toContain('<li class="active">Events</li>');
    });

    it('returns the view object', function() {
      expect(mainMenuPage.render()).toEqual(mainMenuPage);
    });

  });

});
