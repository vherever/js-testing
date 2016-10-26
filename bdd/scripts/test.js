describe("pow", function() {

    describe("x in n degree", function() {

        function makeTest(x) {
            var expected = x * x * x;
            it(x + " in 3 degree equals " + expected, function() {
                assert.equal(pow(x, 3), expected);
            });
        }

        for (var x = 1; x <= 5; x++) {
            makeTest(x);
        }

    });

    it("x in minus n degree equals NaN", function() {
        assert(isNaN(pow(2, -1)), "pow(2, -1) not NaN");
    });

    it("x in float n degree equals NaN", function() {
        assert(isNaN(pow(2, 1.5)), "pow(2, -1.5) not NaN");
    });

    describe("Any number, except zero in zero degree equals 1", function() {

        function makeTest(x) {
            it(x + " in zero degree equals 1", function() {
                assert.equal(pow(x, 0), 1);
            });
        }

        for (var x = -5; x <= 5; x += 2) {
            makeTest(x);
        }

    });

    it("zero in zero degree equals NaN", function() {
        assert(isNaN(pow(0, 0)), "0 in 0 degree not NaN");
    });

});