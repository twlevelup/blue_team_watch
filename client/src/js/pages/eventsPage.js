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

  render: function() {

    this.$el.html(this.template());

  }

});

module.exports = EventsView;
