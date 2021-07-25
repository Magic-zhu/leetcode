//买卖股票的最佳时机2

var maxProfit = function (prices) {
    let profit = 0;
    for (let i = 1; i < prices.length; i++) {
        if(prices[i]>prices[i-1]){
            profit = profit + prices[i] - prices[i-1]
        }
    }
    return profit
};

let t = [1,2,3,4,5];
console.log(maxProfit(t))