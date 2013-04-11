/*
 * Default handling of generic header triggered by data-header attribute
 */
$(document).on('pagecreate', '[data-role="page"][data-header]', function () {
  var $this = $(this),
      headerTemplate = $this.data("header"),
      headerOptions = $this.data("header-options") || "",
      optionsArr = headerOptions.split(" ");

  var attrs = {
    "data-theme": "a",
    "data-role": "header"
  };
  if (optionsArr.indexOf("notfixed") < 0) attrs["data-position"] = "fixed";

  var templateData = _.inject(optionsArr, function(memo, option) {
    memo[option] = true;
    return memo;
  }, {
    title: $this.data('header-title') || ($(document).attr('title') || 'Titel saknas'),
    backbutton: false,
    homebutton: false
  });

  var addClass = templateData.homebutton || templateData.backbutton ? "" : "nobuttons";

  $this.find('[data-role="header"]').remove();

  $('<div></div>').attr(attrs).prependTo(this).html(function() {
    return JST[headerTemplate](templateData);
  }).addClass(addClass);

});

/*
 * Default handling of external link by target=_blank attribute
 */
$(document).on("click", "a[target=_blank][data-rel!=external]", function(event) {
  event.preventDefault();
  var url = event.currentTarget.href;
  var ref = window.open(url, '_blank', 'location=no');
  var baseUrl = window.location.href.substring(0, window.location.href.indexOf("www/") + "www/".length - 1);

  ref.addEventListener('loadstop', function () {
    cordova.exec(null, null, "InAppBrowser", "injectScriptCode", [
      "var header = document.createElement('div');" +
          "header.innerHTML='<h1>HEADER</h1><a href=\"http://commands/back\" onclick=\"window.close()\">back</a><a href=\"http://commands/home\" onclick=\"window.close()\">home</a>';" +
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
      window.location = baseUrl + "/index.html"
    }
  });
});
