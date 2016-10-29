describe("Item", function () {

    beforeEach(function () {
        Item.currentPrice = 2;
    });

    it("should be defined", function () {
        expect(Item.currentPrice).toBeDefined();
        expect(Item.currentPrice).toEqual(2);
    });

    it("should change price", function () {
        expect(Item.changePrice(6)).toEqual(8);
    });

    it("should not be able to pass more than two parameters", function () {
        expect(Item.changePrice(6,8)).toEqual(16);
        expect(Item.changePrice(6,8,4)).toBe(false);
    });

});










































