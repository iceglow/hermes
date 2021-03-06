$(document).on("mobileinit", function () {
  $.support.cors = true;

  $.mobile.allowCrossDomainPages = true;
  $.mobile.pushStateEnabled = false;
  $.mobile.page.prototype.options.domCache = true;
  $.mobile.ajaxEnabled = false;
  $.mobile.linkBindingEnabled = true;
  $.mobile.hashListeningEnabled = true;

  if (window.plugins) { //If we have registered plugins.
    window.plugins.childBrowser.onClose = function () {
      window.plugins.childBrowser.close();
    };
  }
});
