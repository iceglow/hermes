describe('Location model', function () {
  describe('when creating an empty location', function () {
    beforeEach(function () {
      this.location = new Location();
    });

    it('should have id 0', function () {
      expect(this.location.get('id')).toEqual(0);
    });

    it('should have campus "unknown"', function () {
      expect(this.location.get('campus')).toEqual('unknown');
    });

    it('should have type "unknown"', function () {
      expect(this.location.get('type')).toEqual('unknown');
    });

    it('should have subType "null"', function () {
      expect(this.location.get('subType')).toBeNull();
    });

    it('should have shape "point"', function () {
      expect(this.location.get('shape')).toEqual('point');
    });

    it('should have no text', function () {
      expect(this.location.get('text')).toEqual('');
    });

    it('should have empty coords', function () {
      expect(this.location.get('coords').length).toEqual(0);
    });

    it('should be directionAware', function () {
      expect(this.location.get('directionAware')).toBeTruthy();
    });

    it('should have a pin', function () {
      expect(this.location.get('pin')).toBeDefined();
    });
  });
});

describe('Locations collection', function () {
  describe('creating an empty collection', function () {
    beforeEach(function () {
      this.locations = new Locations();
    });

    it('should have Location for model', function () {
      expect(this.locations.model).toBe(Location);
    });

    it('should have a url pointing at broker geo api', function () {
      expect(this.locations.url).toMatch(/http:\/\/.+\.su\.se\/geo\/.+/)
    });
  });

  describe('fetching a collection of locations', function () {
    beforeEach(function () {
      this.locations = new Locations();
      this.fixture = this.fixtures.Locations.valid;

      this.server = sinon.fakeServer.create();
      this.server.respondWith(
          "GET",
          this.locations.url(),
          this.validResponse(this.fixture)
      );
    });

    afterEach(function () {
      this.server.restore();
    });

    it('should make a correct request', function () {
      this.locations.fetch();
      expect(this.server.requests.length).toEqual(1);
      expect(this.server.requests[0].method).toEqual("GET");
      expect(this.server.requests[0].url).toMatch(/.*\/poi/);
    });

    it('should return all locations', function () {
      this.locations.fetch();
      this.server.respond();
      expect(this.locations.length).toEqual(4);
    });

    it('should override defaults', function () {
      this.locations.fetch();
      this.server.respond();
      var firstLocation = this.locations.get(1);
      expect(firstLocation.get('id')).toEqual(1);
      expect(firstLocation.get('campus')).toEqual('Frescati');
      expect(firstLocation.get('type')).toEqual('parkering');
      expect(firstLocation.get('subType')).toEqual('mc');
      expect(firstLocation.get('shape')).toEqual('line');
      expect(firstLocation.get('text')).toEqual('Foobar');
      expect(firstLocation.get('coords').length).toEqual(2);
      expect(firstLocation.get('coords')).toContain(59.00);
      expect(firstLocation.get('coords')).toContain(18.00);
      expect(firstLocation.get('directionAware')).toBeFalsy();
    });
  });

  describe('filtering a Location collection', function () {
    beforeEach(function () {
      this.locations = new Locations();
      this.fixture = this.fixtures.Locations.valid;

      this.server = sinon.fakeServer.create();
      this.server.respondWith(
          "GET",
          this.locations.url(),
          this.validResponse(this.fixture)
      );
    });

    afterEach(function () {
      this.server.restore();
    });

    it('byCampus should return all by campus', function () {
      this.locations.fetch();
      this.server.respond();

      var subCollection = this.locations.byCampus('Frescati');
      expect(subCollection.size()).toEqual(3);
    });

    it('byType should return all by type', function () {
      this.locations.fetch();
      this.server.respond();

      var subCollection = this.locations.byType('hörsal');
      expect(subCollection.size()).toEqual(1);
    });

    it('byCampusAndType should return all by campus and type', function () {
      this.locations.fetch();
      this.server.respond();

      var types = [];
      types.push('parkering');
      var subCollection = this.locations.byCampusAndType('Frescati', types);
      expect(subCollection.size()).toEqual(2);
    });
  });
});