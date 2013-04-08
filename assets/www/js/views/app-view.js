var AppView = Backbone.View.extend({
  events: {
    "click a[id=sisulink]": "openInAppBrowser"
  },

  openInAppBrowser: function (event) {
    event.preventDefault();
    var url = event.currentTarget.href;
    var ref = window.open(url, '_blank', 'location=no');
    var self = this;

    ref.addEventListener('loadstop', function () {
      cordova.exec(null, null, "InAppBrowser", "injectScriptCode", [
        "var header = document.createElement('div');" +
            "header.innerHTML='<h1>SISU</h1><a href=\"http://commands/back\" onclick=\"window.close()\">back</a><a href=\"http://commands/home\" onclick=\"window.close()\">home</a>';" +
            "header.style.top='0';" +
            "header.style.position='relative';" +
            "var body = document.getElementsByTagName('body')[0];" +
            "body.insertBefore(header, body.firstChild);"
      ]);
    });

    ref.addEventListener('loadstart', function () {
      if (event.url == "http://commands/back") {
        ref.close();
      }
      if (event.url == "http://commands/home") {
        ref.close();
        window.location = self.getBaseURL() + "/index.html"
      }
    });
  },

  getBaseURL: function () {
    var s = "www/";
    var i = window.location.href.indexOf(s);
    var baseUrl = window.location.href.substring(0, i + s.length - 1);
    return baseUrl;
  }
});
