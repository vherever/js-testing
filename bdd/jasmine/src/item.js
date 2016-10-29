window.Item = {
    currentPrice: 2,
    changePrice: function () {
        var price = this.currentPrice;
        console.log(arguments);
        if(arguments.length <= 2) {
            for (var i = 0; i < arguments.length; i++) {
                price += arguments[i];
            }

            this.currentPrice = price;
            return price;
        } else {
             return false;
        }
    }
};