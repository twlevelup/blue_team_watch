'use strict';

var PageView = require('../framework/page'),
    EventsCollection = require('../collections/calendarEvents'),
    EventView = require('../views/event');

var CategoriesView = PageView.extend({

  id: 'categories',

  template: require('../../templates/pages/categories.hbs'),

  buttonEvents: {
    left: 'goToMainMenuPage'
  },

  initialize: function() {
    var self = this;
    this.eventsCollection = new EventsCollection();
    this.listenTo(this.eventsCollection, 'change', this.render);
  },

  getCategories: function() {
    var categoriesArray = []; 
    this.eventsCollection.each(function(calendarEvent) {
      if(!_.contains(categoriesArray, calendarEvent.attributes.category)){
        categoriesArray.push(calendarEvent.attributes.category);        
      } 
    }, this);
    return categoriesArray;  
  },

  goToMainMenuPage: function() {
    global.App.router.navigate('mainMenu', true);
  },

  render: function() {
    this.$el.html(this.template());
    var categoriesArray = this.getCategories();
    for (var i = 0; i < categoriesArray.length; i+=1) {
      this.$el.find('#categories-list').append('<li>'+categoriesArray[i]+'</li>');
    }
    return this;
  }

}
);

module.exports = CategoriesView;
