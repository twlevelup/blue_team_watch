'use strict';

var Router = require('./router'),
  WatchFace = require('./framework/watchFace'),
  NotificationsPanel = require('./framework/notifications'),
  availableNotificationTypes = require('./notifications/notificationsConfig'),
  clock = require('./framework/clock');

var App = {

  buttons: ['left', 'right', 'top', 'bottom', 'face'],

  navigate: function (route) {
    App.router.navigate(route, true);
  },

  start: function() {

    // App.navigate = navigate;

    this.router = new Router();

    this.watchFace = new WatchFace();
    this.notifications = new NotificationsPanel();
    this.notifications.configureNotifications(availableNotificationTypes);

    // FIXME Make a view for the watch and make these regular view events
    // Don't trigger them on the router
    $('#button-right').on('click', function() {
      App.router.currentView.trigger('right');
    });

    $('#button-top').click(function() {
      App.router.currentView.trigger('top');
    });

    $('#button-bottom').click(function() {
      App.router.currentView.trigger('bottom');
    });

    // FIXME I'm sure the cursor code should be somewhere else, I'll grab a dev
    // to help me with moving this.
    Backbone.demoCursor = function(direction) {
      var current = $('li.active'); // get current iten
      var next = current.next('li'); // get next item
      if (direction === true) {
        next = current.prev('li'); // get previous item
      }

      if (current !== undefined && next.size() !== 0) {
        current.removeClass('active');
        $(next).addClass('active');
        Backbone.updateCursor();
      }
    };

    Backbone.updateCursor = function() {
      console.log("Running update cursor.");
      var cursor = $('.cursor'); // get cursor div
      var current = $('.active'); // get current item
      if (current !== undefined && cursor !== undefined) {
        var topPosition = current.position().top;
        cursor.animate({
          top: topPosition
        }, {
          duration: 200
        });
      }
    };

    // Needs to be tested and set to a timeout.
    // $('#button-left').on('dblclick', function() {
    //   App.router.currentView.trigger('backToHome');
    // });

    $('#button-left').click(function() {
      App.router.currentView.trigger('left');
    });

    $('#watch-face').click(function() {
      App.router.currentView.trigger('face');
    });

    clock.start();

    Backbone.history.start();

  }

};

global.App = App;

module.exports = App;
