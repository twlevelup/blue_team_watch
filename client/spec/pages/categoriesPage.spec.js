
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
      {name: "Music Festival", category: "MusicCategory"},
      {name: "Second Music Festival", category: "MusicCategory"}
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

    it('should display two music categories', function () {
      categoriesPage.render();
      expect(categoriesPage.$el.find('li').text().split("MusicCategory").length - 1).toEqual(1);
    });

    it('should display all categories including "all categories"', function () {
      categoriesPage.render();
      expect(categoriesPage.$el.find('li').length).toEqual(4);
    });

    it('should add active', function () {
      categoriesPage.render();
      expect(categoriesPage.$el.find('.active').length).toEqual(1);
    });

    it('returns the Categories view object', function() {
      expect(categoriesPage.render()).toEqual(categoriesPage);
    });
   
  });

  describe('should pass selected category to event page', function () {
    beforeEach(function () {
      global.App.router.navigate = function (first, second) {};
      categoriesPage.render();
    });

    it('should pass All Categories', function () {
      categoriesPage.goToEventsPage(); 
      expect(global.App.selectedCategory).toEqual('All Categories');  
    });

    it('should pass All Categories after scrolling up twice', function () {
      categoriesPage.scrollUp();
      categoriesPage.scrollUp();

      categoriesPage.goToEventsPage();
      expect(global.App.selectedCategory).toEqual('All Categories');

    });

    it('should pass Food after scrolling down once', function () {
       categoriesPage.scrollDown();
       categoriesPage.goToEventsPage();
       expect(global.App.selectedCategory).toEqual('Food');

    });

    it('should pass Music after scrolling down past the last category', function () {
      categoriesPage.scrollDown();
      categoriesPage.scrollDown();
      categoriesPage.scrollDown();
      categoriesPage.scrollDown();
      categoriesPage.scrollDown();
      categoriesPage.scrollDown();

      categoriesPage.goToEventsPage();
      expect(global.App.selectedCategory).toEqual('MusicCategory');
    });
  });  
});
