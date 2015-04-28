'use strict';

var Backbone = require('backbone'),
 $ = require('jquery'),
 _ = require('underscore');

Backbone.$ = $;

var DateView = Backbone.View.extend({

  tagName: 'li',

  template: require('../../templates/views/date.hbs'),

  initialize: function() {
    _.bindAll(this, 'render');
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  }

});

module.exports = DateView;
