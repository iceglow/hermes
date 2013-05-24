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
  baseUrl: "./",
  paths: {
    // Dependencies
    async: 'js/lib/requirejs-plugins-1.0.1/async.min',
    goog: 'js/lib/requirejs-plugins-1.0.1/goog.min',
    jquery: 'js/lib/jquery-1.8.2.min',
    jquery_mobile: 'js/lib/jquery.mobile-1.3.1.min',
    jquery_mobile_config: 'js/jquery.mobile-config',
    underscore: 'js/lib/underscore-1.4.4-min',
    backbone: 'js/lib/backbone-1.0.0-min',
    i18n: 'js/lib/i18next-1.6.2.min',
    fastclick: 'js/lib/fastclick/fastclick.min',

    // Test framework
    jasmine: 'spec/lib/jasmine-1.3.1/jasmine',
    'jasmine-html': 'spec/lib/jasmine-1.3.1/jasmine-html',
    sinon: 'spec/lib/sinon-1.7.0',
    helper: 'spec/helper',
    console_runner: 'spec/lib/phantom-jasmine/console-runner',
    jasmine_junit_reporter: 'spec/lib/jasmine-reporters/jasmine.junit_reporter',

    config: 'js/config',
    locale: 'js/locale',

    // Tests & stuff
    spec: 'spec',
    fixtures: 'spec/util/fixtures',

    // Application
    core: './',
    map: 'map',
    info: 'info',
    student: 'student'
  },
  priority: [
    'jasmine',
    'jquery',
    'jquery_mobile',
    'jquery_mobile_config',
    'underscore',
    'backbone',
    'i18n'
  ],
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
    jquery_mobile: {
      deps: ['jquery', 'jquery_mobile_config']
    },
    jasmine: {
      exports: 'jasmine'
    },
    'jasmine-html': {
      deps: ['jasmine'],
      exports: 'jasmine'
    },
    console_runner: {
      deps: ['jasmine']
    },
    jasmine_junit_reporter: {
      deps: ['jasmine']
    }
  }
});

window.store = "TestStore"; // override local storage store name - for testing

require([
  'underscore',
  'jquery',
  'jasmine-html',
  'sinon',
  'spec/util/helper',
  'console_runner',
  'jasmine_junit_reporter'
], function (_, $, jasmine) {

  var jasmineEnv = jasmine.getEnv();
  jasmineEnv.updateInterval = 1000;

  var console_reporter = new jasmine.ConsoleReporter();
  window.console_reporter = console_reporter;
  jasmine.getEnv().addReporter(console_reporter);
  jasmine.getEnv().addReporter(new jasmine.JUnitXmlReporter("build/reports/tests/"));

  var htmlReporter = new jasmine.HtmlReporter();

  jasmineEnv.addReporter(htmlReporter);

  jasmineEnv.specFilter = function (spec) {
    return htmlReporter.specFilter(spec);
  };

  var specs = [];
  specs.push('spec/default.spec');
  specs.push('spec/i18n.spec');
  specs.push('spec/modules/start/start-view.spec');
  specs.push('spec/modules/info/info-view.spec');
  specs.push('spec/modules/student/student-service-view.spec');
  specs.push('spec/modules/map/app-model.spec');
  specs.push('spec/modules/map/campus-model.spec');
  specs.push('spec/modules/map/location-model.spec');

  $(function () {
    require(specs, function () {
      jasmineEnv.execute();
    });
  });
});
