'use strict';
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
    global.App.selectedCategory = this.$el.find(".active").text();
    global.App.router.navigate('eventsPage', true);
  },

  initialize: function() {
    var self = this;
    this.eventsCollection = new EventsCollection();
    this.listenTo(this.eventsCollection, 'change', this.render);
  },

  getCategories: function() {
    var categoriesArray = [{title: 'All Categories', active: true}];
    this.eventsCollection.each(function(calendarEvent) {
      if (!_.contains(categoriesArray, calendarEvent.get('category'))) {
        categoriesArray.push({title: calendarEvent.attributes.category});
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
    this.scrollDownWithCursor();
  },

  scrollUp: function() {
    this.scrollUpWithCursor();
  }
}
);

module.exports = CategoriesView;
