afterEach(function () {
  $('#stage').remove();
  $('body > :not([id=HTMLReporter])').hide();
});

var helper = {
  trigger: function (obj, name) {
    var e = document.createEvent('Event');
    e.initEvent(name, true, true);
    obj.dispatchEvent(e);
  }
};

beforeEach(function () {
  $('div[data-role="page"]:not([data-url=""])').remove();
  $('body').append("<div id='stage' data-role='page'></div>");

  this.validResponse = function (responseText) {
    return [
      200,
      {"Content-Type": "application/json"},
      JSON.stringify(responseText)
    ];
  };
});
