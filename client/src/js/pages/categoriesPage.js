'use strict';
var Appindex = 0;
var PageView = require('../framework/page'),
    EventsCollection = require('../collections/calendarEvents'),
    EventView = require('../views/event');
var CategoriesView = PageView.extend({

  id: 'categories',

  template: require('../../templates/pages/categories.hbs'),

  buttonEvents: {
    left: 'goToMainMenuPage',
    right: 'goToEventsPage',
    top: 'scrollUp',
    bottom: 'scrollDown'
  },

  goToEventsPage: function() {
    global.App.selectedCategory = 'Food';
    global.App.router.navigate('eventsPage', true);
  },

  initialize: function() {
    var self = this;
    this.eventsCollection = new EventsCollection();
    this.listenTo(this.eventsCollection, 'change', this.render);
  },

  getCategories: function() {
    var categoriesArray = [];
    this.eventsCollection.each(function(calendarEvent) {
      if (!_.contains(categoriesArray, calendarEvent.get('category'))) {
        categoriesArray.push(calendarEvent.attributes.category);
      }
    }, this);

    return categoriesArray;
  },

  goToMainMenuPage: function() {
    global.App.router.navigate('mainMenu', true);
  },

  render: function() {
    this.$el.html(this.template({categories: this.getCategories()}));
    return this;
  },

  scrollDown: function() {
    Backbone.demoCursor();
    Appindex += 1;
  },

  scrollUp: function() {
    Backbone.demoCursor(true);
    if (Appindex !== 0) {
      Appindex -= 1;
    }
  }

}
);

module.exports = CategoriesView;
