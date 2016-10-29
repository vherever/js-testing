window.Item = {
    currentPrice: 2,
    totalBudget: 500,
    changePrice: function () {
        var price = this.currentPrice;
        if(arguments.length <= 2) {
            for (var i = 0; i < arguments.length; i++) {
                price += arguments[i];
            }

            this.currentPrice = price;
            return price;
        } else {
             return false;
        }
    },

    allowBuying: function () {
        for (var i = 0; i < arguments.length; i++) {
            if(arguments[i].price <= this.totalBudget) {
                this.totalBudget -= arguments[i].price;
                arguments[i].bought = true;
            }
        }

        for(var i = 0; i < arguments.length; i ++) {
            if(!arguments[i].bought) {
                console.log(arguments);
                return false;
            }
        }

        return true;
    }
};