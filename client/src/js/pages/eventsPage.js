'use strict';

var PageView = require('../framework/page');

var EventsView = PageView.extend({

  id: 'events',

  template: require('../../templates/pages/events.hbs'),

  buttonEvents: {
    right: '',
    face: '',
    left: 'back'
  },

  initialize: function() {
    var self = this;
  },

  render: function() {

    this.$el.html(this.template());

    return this;
  }

});

module.exports = EventsView;
