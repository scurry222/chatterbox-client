var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    // set a event handler on submit button
    RoomsView.initialize();
    // dropdown menu
    MessagesView.initialize();
    // embolden friend on click

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      Messages.persist(data.results);
      MessagesView.render();
      // examine the response from the server request:
      Rooms.persist(data.results);
      RoomsView.render();
      // place data onto messagesmodel
      // inform them to render in messagesView, roomsView
      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
