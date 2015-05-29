var CalendarEvent = Backbone.Model.extend({
  defaults: {
    name: '',
    date: '',
    location: '',
    category: '',
    time: '',
    myEvent: false
  }
});

module.exports = CalendarEvent;
