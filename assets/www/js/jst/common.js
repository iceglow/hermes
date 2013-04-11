if (!("JST" in window) || "JST" == undefined)
  window.JST = new Object();

JST['common/header'] = _.template(" \
    <h1><%= title %></h1> \
\
    <% if (backbutton) { %>\
      <a data-role='button' rel='external' data-ajax='false' data-transition='fade' data-rel='back' \
         data-icon='arrow-l' data-iconpos='left' class='ui-btn-left'> \
        Tillbaka \
      </a> \
    <% } %> \
\
    <% if (homebutton) { %>\
      <a data-role='button' rel='external' data-ajax='false' data-transition='fade' href='../index.html' \
         data-icon='home' data-iconpos='notext' class='ui-btn-right'> \
        Hem \
      </a> \
    <% } %> \
");

JST['common/external-link-dialog'] = _.template(' \
  <div data-role="header"> \
    <h2>Extern l&auml;nk</h2> \
  </div> \
  <div data-role="content"> \
    <p>Sidan kommer &ouml;ppnas i extern webbl&auml;sare, vill du forts&auml;tta?</p> \
    <p> \
      <fieldset class="ui-grid-a"> \
        <div class="ui-block-a"><a data-role="button" data-rel="back">Nej</a></div> \
        <div class="ui-block-b"><a data-role="button" data-rel="external" href="<%= href%>" target="_blank" \
          data-ajax="false" data-theme="b">Ja</a></div> \
      </fieldset> \
    </p> \
  </div> \
');
