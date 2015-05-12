var CalendarEvent = Backbone.Model.extend({
  defaults: {
    name: '',
    date: '',
    location: '',
    category: ''
  }
});

module.exports = CalendarEvent;
