'use strict';

var EventView = Backbone.View.extend({

  tagName: 'div',

  template: require('../../templates/views/event.hbs'),

  initialize: function() {
    _.bindAll(this, 'render');
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  }

});

module.exports = EventView;
