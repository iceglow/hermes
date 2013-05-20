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

require.config({
  baseUrl: window.location.href.match(/(.*\/www)\/.*/)[1],
  paths: {
    // Dependencies
    async: 'js/lib/requirejs-plugins-1.0.1/async',
    goog: 'js/lib/requirejs-plugins-1.0.1/goog',
    jquery: 'js/lib/jquery-1.8.2.min',
    jquery_mobile: 'js/lib/jquery.mobile-1.3.1.min',
    jquery_mobile_config: 'js/jquery.mobile-config',
    jquery_ui_map: 'map/js/lib/jquery.ui.map/jquery.ui.map.min',
//    jquery_ui_map_overlays: 'map/js/lib/jquery.ui.map/jquery.ui.map.overlays.min',
//    jquery_ui_map_services: 'map/js/lib/jquery.ui.map/jquery.ui.map.services.min',
    //google_maps_api: 'async!http://maps.google.com/maps/api/js?key=AIzaSyDj0Ddh5c4FOvG3NgxFFBwuOZB-8E1pNbo&sensor=true!callback',
    underscore: 'js/lib/underscore-1.4.4-min',
    backbone: 'js/lib/backbone-1.0.0-min',
    i18n: 'js/lib/i18next-1.6.2.min',
    fastclick: 'js/lib/fastclick/fastclick.min',
    locale: 'js/locale',
    config: 'js/config',
    common: 'js/jst/common',
    defaults: 'js/default',

    // Application
    core: window.location.href.match(/(.*\/www)\/.*/)[1],
    map: window.location.href.match(/(.*\/www)\/.*/)[1] + '/map',
    service: window.location.href.match(/(.*\/www)\/.*/)[1] + '/studentservice',
    info: window.location.href.match(/(.*\/www)\/.*/)[1] + '/info'
  },
  priority: ['jquery', 'jquery_ui_map', 'jquery_mobile', 'jquery_mobile_config', 'underscore', 'backbone', 'i18n'],
  shim: {
    underscore: {
      exports: "_"
    },
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    i18n: {
      deps: ['jquery'],
      exports: 'i18n'
    },
    locale: {
      deps: ['i18n']
    },
    common: {
      deps: ['underscore']
    },
    defaults: {
      deps: ['jquery', 'common', 'fastclick']
    },
    jquery_mobile: {
      deps: ['jquery', 'defaults', 'jquery_mobile_config']
    },
    jquery_mobile_config: {
      deps: ['jquery']
    },
    jquery_ui_map: {
      deps: ['jquery',
        'async!http://maps.google.com/maps/api/js?key=AIzaSyDj0Ddh5c4FOvG3NgxFFBwuOZB-8E1pNbo&sensor=true!callback'
      ]
    }
  }
});

require([
  'backbone',
  'js/routers/core-router',
], function (Backbone, CoreRouter) {
  $(document).ready(function () {
    var router = new CoreRouter();
    Backbone.history.start();
  });
});

