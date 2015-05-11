'use strict';

var AppRouter = require('../src/js/router.js'),
  PageView = require('../src/js/framework/page'),
  HomePage = require('../src/js/pages/homePage'),
  MainMenuPage = require('../src/js/pages/mainMenuPage');

describe('Application Router', function() {

  var router;

  describe('The Routes', function() {

    beforeEach(function() {
      router = new AppRouter();
      spyOn(router, 'renderView');
    });

    describe('#home', function() {
      it('should load the home screen', function() {
        router.home();
        var isHomePage = router.renderView.calls.argsFor(0)[0] instanceof HomePage;
        expect(isHomePage).toBeTruthy();
      });
    });

    describe('#mainMenu', function() {
      it('should load the main menu screen', function() {
        router.mainMenu();
        var isMainMenuPage = router.renderView.calls.argsFor(0)[0] instanceof MainMenuPage;
        expect(isMainMenuPage).toBeTruthy();
      });
    });

  });

});
