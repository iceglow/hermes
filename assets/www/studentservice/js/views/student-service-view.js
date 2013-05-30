/*
 * Copyright (c) 2013, IT Services, Stockholm University
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this
 * list of conditions and the following disclaimer.
 *
 * Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * Neither the name of Stockholm University nor the names of its contributors
 * may be used to endorse or promote products derived from this software
 * without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */

var StudentView = Backbone.View.extend({
  initialize: function () {

    $(document).on('deviceready.appview', this.handleDeviceReady);

    initLocale({ resGetPath: '../i18n/__lng__.json' });
    $('div[data-role="header"] > h1').attr('data-i18n', 'studentService.header.title');
    this.$el.i18n();
    i18n.init({ fallbackLng: false });
  },

  /**
   * Render the student service view.
   */
  render: function () {
      var menu = _.map(config.studentService.menu, function(obj) {
          obj.title = i18n.t(obj.title, { defaultValue: " " });
          obj.url = i18n.t(obj.url, { defaultValue: " " });
          return obj;
      });

      menu = _.sortBy(menu, function(obj){
          return obj.title;
      });

      _.each(menu, function(obj) {
          if(obj.title != " "){
              $('#studentservice-menu').append(JST["studentservice/menu"](obj));
          }
      });
      $("#studentservice-menu").listview('refresh');
  },

  events: {
    'click a.servicelink': 'handleServiceLinkClick'
  },

  /**
   * Remove handler for the view.
   */
  remove: function () {
    $(document).off('.appview');

    Backbone.View.prototype.remove.call(this);
  },

  /**
   * Handles the device ready event.
   */
  handleDeviceReady: function () {
    gaPlugin.trackPage(null, null, "studentservice/index.html");
  },

  /**
   * Handles the device ready event.
   */
  handleServiceLinkClick: function (event) {
    gaPlugin.trackPage(null, null, $(event.target).attr("href"));
  }
});
