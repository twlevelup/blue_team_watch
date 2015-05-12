var CalendarEvent = require('../models/calendarEvent');
var Config = require('../config/config.js');

var CalendarEvents = Backbone.Firebase.Collection.extend({
  model: Event,
  url: Config.firebaseUrl + '/CalendarEvents'
});

module.exports = CalendarEvents;
