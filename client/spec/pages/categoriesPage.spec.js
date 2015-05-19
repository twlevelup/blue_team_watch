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
      {category: "Food"},
      {category: "Hunt"},
      {category: "Water"},
      {category: "Food"}
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

    it('should display a list of list items for categories', function () {
      categoriesPage.render();
      expect(categoriesPage.$el.find('li').length).toEqual(4);
    });

    it('returns the Categories view object', function() {
      expect(categoriesPage.render()).toEqual(categoriesPage);
    });

    it('should render a list of event models by Categories', function() {
      categoriesPage.render();
      expect(categoriesPage.el.innerHTML).toContain('Food');
      expect(categoriesPage.el.innerHTML).toContain('Hunt');
      expect(categoriesPage.el.innerHTML).toContain('Water');
    });
   
  });

  describe('obtain event categories', function () {

    it('should fetch all unique categories from events', function () {
      var categories = ["Food", "Hunt", "Water"]; 
      expect(categoriesPage.getCategories()).toEqual(categories);
    });
  });

  

});
