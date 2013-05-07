afterEach(function () {
  document.getElementById('stage').innerHTML = '';
  $('body > :not([id=HTMLReporter])').hide();
});

beforeEach(function () {
  $.mobile.pageContainer = $('body');
  this.validResponse = function (responseText) {
    return [
      200,
      {"Content-Type": "application/json"},
      JSON.stringify(responseText)
    ];
  };
});

var helper = {
  trigger: function (obj, name) {
    var e = document.createEvent('Event');
    e.initEvent(name, true, true);
    obj.dispatchEvent(e);
  }
};

navigator.language = "en-US";

navigator.splashscreen = {
  hide: function () {
  }
};

navigator.userAgent = "";

navigator.platform = "";

navigator.geolocation = {
  getCurrentPosition: function() {
  },

  watchPosition: function() {
  },

  clearWatch: function() {}
};
