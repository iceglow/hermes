var AppView = Backbone.View.extend({
  events: {
    "click a[id=sisulink]": "openInAppBrowser"
  },

  openInAppBrowser: function (event) {
    event.preventDefault();
    var url = event.currentTarget.href;
    var ref = window.open(url, '_blank', 'location=no');

    ref.addEventListener('loadstop', function () {
      cordova.exec(null, null, "InAppBrowser", "injectScriptCode", [
        "var header = document.createElement('div');" +
            "header.innerHTML='<h1>SISU</h1>';" +
            "header.style.top='0';" +
            "header.style.position='relative';" +
            "var body = document.getElementsByTagName('body')[0];" +
            "body.insertBefore(header, body.firstChild);"
      ]);
    });
  }
});
