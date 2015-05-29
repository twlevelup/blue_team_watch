
'use strict';

var CategoriesPage = require('../../src/js/pages/categoriesPage'),
  Router = require('../../src/js/router.js'),
  CalendarEvent = require('../../src/js/models/calendarEvent');
global.router = new Router();

describe('The Categories Page', function() {

  var categoriesPage, router;
  var CalendarEvents = Backbone.Collection.extend({
    model: CalendarEvent
  });
  beforeEach(function () {
    router = new Router();
    categoriesPage = new CategoriesPage();
    categoriesPage.eventsCollection = new CalendarEvents();
    categoriesPage.eventsCollection.push([
      {name: "Food Festival", category: "Food"},
      {name: "Hunting Festival", category: "Hunt"},
      {name: "Water Festival", category: "Water"},
      {name: "Music Festival", category: "Music"}
    ]);
  });

  describe('button events', function () {

    describe('left', function () {
      it('should take the user to the main menu page', function () {
        spyOn(categoriesPage, 'goToMainMenuPage');
        categoriesPage.setButtonEvents();
        categoriesPage.trigger('left');
        expect(categoriesPage.goToMainMenuPage).toHaveBeenCalled();
      });
    });

    describe('right', function () {
      it('should take the user to the events page', function () {
        spyOn(categoriesPage, 'goToEventsPage');
        categoriesPage.setButtonEvents();
        categoriesPage.trigger('right');
        expect(categoriesPage.goToEventsPage).toHaveBeenCalled();
      });
    });

  });

  describe('rendering', function () {

    it('should display category title', function () {
      categoriesPage.render();
      expect(categoriesPage.el.innerHTML).toContain('>Event Categories</h1>');
    });

    it('returns the category view object', function() {
      expect(categoriesPage.render()).toEqual(categoriesPage);
    });

    it('should display all categories including "all categories"', function () {
      categoriesPage.render();
      expect(categoriesPage.$el.find('li').length).toEqual(5);
    });

    it('should display all categories including "all categories"', function () {
      categoriesPage.render();
      expect(categoriesPage.$el.find('li').length).toEqual(5);
    });

    it('should add active to all categories', function () {
      categoriesPage.render();
      expect(categoriesPage.$el.find('li').length).toEqual(5);
    });

    it('returns the Categories view object', function() {
      expect(categoriesPage.render()).toEqual(categoriesPage);
    });

    it('should add active class to all categories', function () {
      categoriesPage.render();
      expect(categoriesPage.el.innerHTML).toContain('<li class="active">All Categories</li>');
    });

  });

  describe('should expose selected category for events page', function () {

    // it('should expose Food as category', function () {
    //   global.App.router.navigate = function (first, second) {};

    //   categoriesPage.render();
    //   categoriesPage.goToEventsPage();
    //   expect(global.App.selectedCategory).toEqual('Food');

    // });

    // it('should expose Food as category after scroll up twice', function () {
    //   global.App.router.navigate = function (first, second) {};

    //   categoriesPage.render();
    //   categoriesPage.scrollUp();
    //   categoriesPage.scrollUp();

    //   categoriesPage.goToEventsPage();
    //   expect(global.App.selectedCategory).toEqual('Food');

    // });

    // it('should expose Hunt as category after scroll down once', function () {
    //    global.App.router.navigate = function (first, second) {};

    //    categoriesPage.render();
    //    categoriesPage.scrollDown();
    //    categoriesPage.goToEventsPage();
    //    expect(global.App.selectedCategory).toEqual('Hunt');

    // });

    // it('should expose Music as category after scrolling down past the last category', function () {
    //   global.App.router.navigate = function (first, second) {};

    //   categoriesPage.render();
    //   categoriesPage.scrollDown();
    //   categoriesPage.scrollDown();
    //   categoriesPage.scrollDown();
    //   categoriesPage.scrollDown();
    //   categoriesPage.scrollDown();

    //   categoriesPage.goToEventsPage();
    //   expect(global.App.selectedCategory).toEqual('Music');

    // });


  });

});
