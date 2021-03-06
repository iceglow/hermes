/**
 * The app view for the map module.
 *
 * @class A Backbone view to handle the app.
 * @author <a href="mailto:joakim.lundin@su.se">Joakim Lundin</a>
 * @type {Backbone.View}
 */
var LineLocationView = GenericLocationView.extend(
    /** @lends LineLocationView */
    {

      /**
       * @constructs
       * @param options options for this view.
       */
      initialize: function (options) {

        options.marker = new google.maps.Polyline({
          strokeColor: "#000000",
          strokeOpacity: 0.8,
          strokeWeight: 3,
          fillColor: "#00ff00",
          fillOpacity: 0.35,
          visible: true,
          poiType: options.model.getPoiType(),
          map: null,
          path: options.model.getGPoints()
        });

        var self = this;
        google.maps.event.addListener(options.marker, 'click', function (event) {
          if (options.model.get('directionAware')) {
            options.infoWindow.setDestination(event.latLng);
          }
          self.openInfoWindow(options.model, this, event.latLng);
        });

        this.constructor.__super__.initialize.apply(this, [options]);
      },

      /**
       * Update position on the map.
       */
      updatePosition: function () {
        this.marker.setPath(this.model.getGPoints());
      }
    });
