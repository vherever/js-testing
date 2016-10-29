describe("Item", function () {

    beforeEach(function () {
        Item.currentPrice = 2;
        Item.totalBudget = 500;
    });

    describe("When increase capacity", function () {

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

    describe("When buy something", function () {

        it("should allow to buy everything", function () {
            expect(Item.allowBuying(
                {
                    name: 'Jacket',
                    price: '200',
                    bought: false
                },
                {
                    name: 'Shoes',
                    price: '150',
                    bought: false
                }
            )).toBe(true);
        });
        it("should prevent from buying when not enough money", function () {
            expect(Item.allowBuying(
                {
                    name: 'Jacket',
                    price: '200',
                    bought: false
                },
                {
                    name: 'Shoes',
                    price: '150',
                    bought: false
                },
                {
                    name: 'Pants',
                    price: '300',
                    bought: false
                }
            )).toBe(false);
        });

    });

});










































