var assert = require("assert")
  , carpathia = require(__dirname + "/../")
  ;

describe("Carpathia.js", function() {
  describe("translate", function() {
    it("should correctly translate the following phrases", function() {
      var test_translations = {
          "en-US": {
            "phrase": "that's life"
          }
        , "fr-FR": {
            "phrase": "c'est la vie"
          }
      };
      assert.strictEqual(carpathia.translate(test_translations, "en-US", "phrase"), "that's life");
      assert.strictEqual(carpathia.translate(test_translations, "fr-FR", "phrase"), "c'est la vie");
    });

    it('should throw an invalid dictionary error on missing dictionary', function(done) {
      try {
        carpathia.translate(null, "en-US", "phrase");
      }
      catch (err) {
        assert(err instanceof Error);
        assert(/Invalid dictionary/.test(err));
        done();
      }
    });

    it('should throw an invalid dictionary error on non-object dictionary', function(done) {
      try {
        carpathia.translate(5, "en-US", "phrase");
      }
      catch (err) {
        assert(err instanceof Error);
        assert(/Invalid dictionary/.test(err));
        done();
      }
    });

    it('should throw an invalid language error on empty language parameter', function(done) {
      try {
        carpathia.translate({"en-US": {"phrase": "foo"}}, null, "phrase");
      }
      catch (err) {
        assert(err instanceof Error);
        assert(/Invalid language/.test(err));
        done();
      }
    });

    it('should throw an invalid language error on missing language parameter', function(done) {
      try {
        carpathia.translate({"en-US": {"phrase": "foo"}}, "baz", "phrase");
      }
      catch (err) {
        assert(err instanceof Error);
        assert(/Invalid language/.test(err));
        done();
      }
    });

    it('should throw an invalid language error on invalid language parameter', function(done) {
      try {
        carpathia.translate({"en-US": {"phrase": "foo"}}, "fr-FR", "phrase");
      }
      catch (err) {
        assert(err instanceof Error);
        assert(/Invalid language/.test(err));
        done();
      }
    });

    it('should throw an invalid symbol error on missing symbol parameter', function(done) {
      try {
        carpathia.translate({"en-US": {"phrase": "foo"}}, "en-US", null);
      }
      catch (err) {
        assert(err instanceof Error);
        assert(/Invalid symbol/.test(err));
        done();
      }
    });

    it('should throw an invalid symbol error on invalid symbol parameter', function(done) {
      try {
        carpathia.translate({"en-US": {"phrase": "foo"}}, "en-US", "clause");
      }
      catch (err) {
        assert(err instanceof Error);
        assert(/Invalid symbol/.test(err));
        done();
      }
    });
  });
});
