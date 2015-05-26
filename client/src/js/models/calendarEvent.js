var CalendarEvent = Backbone.Model.extend({
  defaults: {
    name: '',
    date: '',
    location: '',
    category: '',
    myEvent: false
  }
});

module.exports = CalendarEvent;
