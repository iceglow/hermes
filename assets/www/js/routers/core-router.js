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

define([
  'backbone',
  'core/js/views/start-view',
  'map/js/views/app-view',
  'service/js/views/student-service-view',
  'info/js/views/info-view',
  'map/js/models/app-model',
  'jquery_mobile'
], function (Backbone, StartView, AppView, ServiceView, InfoView, AppModel) {
  return Backbone.Router.extend({

    routes: {
      "start": "defaultRoute",
      "map": "map",
      "restaurants": "restaurants",
      "computerLabs": "computerLabs",
      "auditoriums": "auditoriums",
      "buildings": "buildings",
      "parkingspaces": "parkingspaces",
      "departments": "departments",
      "studentservice": "studentservice",
      "info": "info",
      "*actions": "defaultRoute"
    },

    defaultRoute: function (actions) {
      var view = new StartView({ el: $('#page-home') });
      $.mobile.changePage(view.$el);
      view.render();
    },

    map: function (actions) {
      var appView = new AppView({
        el: $('#page-map'),
        model: new AppModel()
      });
      appView.render();

      $('#page-map').trigger("pagecreate");
    },

    studentservice: function () {
      var view = new ServiceView({ el: $('#studentservice') });
      $.mobile.changePage(view.$el);
      view.render();
    },

    info: function () {
      var view = new InfoView({ el: $('#info') });
      $.mobile.changePage(view.$el);
      view.render();
    },

    restaurants: function () {
      $.mobile.changePage($('#page-map'));
      var appView = new AppView({
        el: $('#page-map'),
        model: new AppModel({
          types: ["restaurant"],
          filterByCampus: true
        }),
        title: 'map.titles.restaurants'
      });
      appView.render();
      appView.updateLocations();
    },

    computerLabs: function () {
      $.mobile.changePage($('#page-map'));
      var appView = new AppView({
        el: $('#page-map'),
        model: new AppModel({ types: ["computer_labs"] }),
        title: 'map.titles.computerlabs'
      });
      appView.render();
      appView.updateLocations();
    },

    auditoriums: function () {
      $.mobile.changePage($('#page-map'));
      var appView = new AppView({
        el: $('#page-map'),
        model: new AppModel({ types: ["auditorium"] }),
        title: 'map.titles.auditoriums'
      });
      appView.render();
      appView.updateLocations();
    },

    buildings: function () {
      $.mobile.changePage($('#page-map'));
      var appView = new AppView({
        el: $('#page-map'),
        model: new AppModel({
          menu: true,
          types: ["building", "entrance", "elevator", "toilet"],
          nonVisibleTypes: ["entrance", "elevator", "toilet"]
        }),
        title: 'map.titles.buildings'
      });
      appView.render();
      appView.updateLocations();
    },

    parkingspaces: function () {
      $.mobile.changePage($('#page-map'));
      var appModel = new AppModel({
        filterByCampus: true,
        types: ["parking", "handicap_parking", 'entrance'],
        nonVisibleTypes: ["entrance"],
        zoomSensitive: true
      });

      var appView = new AppView({
        el: $('#page-map'),
        model: appModel,
        title: "map.titles.parking"
      });
      var self = this;
      appModel.locations.on('reset', function () {
        self.handleParkingspaceLocationsReset(appView, appModel);
      });
      appView.on('toggleMarkerVisibility', this.handleParkingspaceMarkerVisibility);
      appView.render();
      appView.updateLocations();
    },

    departments: function () {
      $.mobile.changePage($('#page-map'));
      var appView = new AppView({
        el: $('#page-map'),
        model: new AppModel({
          types: ["organization"]
        }),
        title: 'map.titles.departments'
      });
      appView.render();
      appView.updateLocations();
    },

    /**
     * Handle visibility of parkingspace markers
     *
     * @param locations collecion of locations
     * @param visible true = set markers visible, false = hide markers
     */
    handleParkingspaceMarkerVisibility: function (locations, visible) {
      locations.each(function (item) {
        if (item.get('type') == 'entrance') {
          if (item.get('handicapAdapted') === true) {
            item.set('visible', visible);
          }
          else {
            item.set('visible', false);
          }
        }
      });
    },

    /**
     * Handler for reset event on locations
     *
     * @param appView the app view
     * @param appModel the app model
     */
    handleParkingspaceLocationsReset: function (appView, appModel) {
      appModel.set('zoomSensitive', true);
      appModel.locations.byType(["parking", "handicap_parking"]).each(function (item) {
        item.on('clicked', function () {
          appModel.set('zoomSensitive', false);
          appView.trigger('toggleMarkerVisibility', appModel.locations, true);
        });
      });
    }
  });
});
