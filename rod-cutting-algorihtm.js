//Taking Input from User:
    function rodPricesInput(){
        let rodPricesInput = document.getElementById("first-input").value;
        rodPrices = rodPricesInput.split(" ").map(Number);
        return rodPrices;
    }
    function rodLengthInput(){
        let rodLength = document.getElementById("second-input").value;
        return rodLength;
    }

//DYNAMIC PROGRAMMING BOTTOM-UP APPROACH
function TotalRevenueDP(prices, rLen) {
    //define optimal-value (r) and optimal-choice (s) arrays
    var r = [],
        s = [];
    r[0] = 0;
    s[0] = 0;

    //loop through the different lengths and determine max revenue
    for(var i = 1; i <= rLen; i++) {
        //define a var to store the current max returned from recursion.
        var currentMaxRevenue = 0;
        for(var j = 1; j <= i; j++) {
            var currentRevenue = prices[j - 1] + r[i - j];
            if (currentRevenue > currentMaxRevenue) {
                currentMaxRevenue = currentRevenue;
                s[i] = j;
            }
        }
        r[i] = currentMaxRevenue;
    }
    //finally return the max rev
    return [r[rLen], s ];
}

//PRINT OPTIMAL SOLUTIONS
function CutRodSolution(rLen, OptChoice){
 var s = OptChoice;
 var solutions = "";
    while(rLen > 0){
        solutions = solutions + s[rLen] + " " ;
        rLen = rLen - s[rLen];
    }
    return solutions;
}

//var totalRevDp = TotalRevenueDP(prices, rLen);
function cutRodAlgorithm(){
    var rLen = rodLengthInput(), prices = rodPricesInput();
//OptRevenue -> R ; OptChoice -> S
const [OptRevenue, OptChoice] = TotalRevenueDP(prices, rLen);
document.getElementById("first-output").value = OptRevenue;
console.log('Dynamic Programming: Revenue is ', OptRevenue);

console.log('Dynamic Programming: Choice is ', OptChoice[rLen]);
document.getElementById("second-output").value = OptChoice[rLen];

console.log('Optimal Solutions: ', CutRodSolution(rLen, OptChoice));
document.getElementById("third-output").value = CutRodSolution(rLen, OptChoice);

}