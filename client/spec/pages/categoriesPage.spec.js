'use strict';

var CategoriesPage = require('../../src/js/pages/categoriesPage'),
  Router = require('../../src/js/router.js');

global.router = new Router();

describe('The Categories Page', function() {

  var categoriesPage, router;

  beforeEach(function () {
    router = new Router();
    categoriesPage = new CategoriesPage();
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
      expect(categoriesPage.$el.find('li').length).toEqual(9);
    });

        // it('should render each of the contacts', function () {
    //  spyOn(contactsPage, 'createContactHTML');
    //  contactsPage.contactsCollection.reset([{}, {}, {}, {}]);
    //  contactsPage.render();
    //  expect(contactsPage.createContactHTML.calls.count()).toEqual(4);
    // });


  });

});
