/**
 * @class The model representing the map.
 *
 * @author <a href="mailto:joakim.lundin@su.se">Joakim Lundin</a>
 */
var MapModel = Backbone.Model.extend(
    /** @lends MapMpdel */
    {
      /**
       * Model attribute defaults.
       */
      defaults: {
        location: new google.maps.LatLng(59.364213, 18.058383), // Stockholms universitet
        currentPosition: null,
        mapPosition: new google.maps.LatLng(59.364213, 18.058383) // Stockholms universitet
      },

      /**
       * Sets the center location of the map.
       * @param latitude tha latitude.
       * @param longitude the longitude.
       */
      setLocation: function (latitude, longitude) {
        this.set({ location: new google.maps.LatLng(latitude, longitude) });
      },

      /**
       * Sets the center of the map.
       * @param latitude tha latitude.
       * @param longitude the longitude.
       */
      setMapPosition: function (latitude, longitude) {
        this.set({ mapPosition: new google.maps.LatLng(latitude, longitude) });
      }
    });
