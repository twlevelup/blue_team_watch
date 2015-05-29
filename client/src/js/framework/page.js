'use strict';

var pageView = Backbone.View.extend({

  className: 'page',

  setButtonEvents: function() {
    _.each(this.buttonEvents, function(eventHandler, buttonID) {
      this.listenTo(this, buttonID, this[eventHandler]);
    }, this);
  },

  back: function() {
    history.back();
  },

  backToHome: function() {
    global.App.router.navigate('home', true);
  },

  scrollUpWithCursor: function() {
    this.scrollWithCursor(true);
  },

  scrollDownWithCursor: function() {
    this.scrollWithCursor(false);
  },

  scrollWithCursor: function(isUpDirection) {
    var current = this.$el.find('li.active');
    var next;
    if (isUpDirection) {
      next = current.prev('li');
    } else {
      next = current.next('li');
    }

    if (next.size() > 0) {
      current.removeClass('active');
      current = this.$el.find(next);
      current.addClass('active');

      var cursor = this.$el.find('.cursor');
      var topPosition = current.position().top;
      cursor.animate({top: topPosition}, {duration: 200});
    }
  },

});

module.exports = pageView;
