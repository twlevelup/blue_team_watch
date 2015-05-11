'use strict';

var PageView = require('../framework/page');

// var ContactsCollection = require('../collections/contacts'),
//   ContactView = require('../views/contact');

var CategoriesView = PageView.extend({

  id: 'categories',

  template: require('../../templates/pages/categories.hbs'),

  render: function() {

    this.$el.html(this.template());
    return this;
  },

}
);

module.exports = CategoriesView;
