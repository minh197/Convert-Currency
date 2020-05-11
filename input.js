
const exchangeRate = 23208;

function VndToUsd(){
    let amountVND=moneyInput;
    return amountVNDConvert=(amountVND/exchangeRate).toFixed(2);
   
}
function UsdToVnd(){
    let amountUSD=moneyInput;
    return amountUSDConvert=(amountUSD*exchangeRate).toFixed(2);
   
}
function convertCurrency(){


    
    let currencyChoose = prompt("What is the currency?");
    if(currencyChoose=="USD"){
        const ReturnFromFunctionCall = UsdToVnd();
        console.log("The VND exchange value is: ", ReturnFromFunctionCall, "VND" );
       
    
    
    }
    else if(currencyChoose=="VND"){
       
        const  ReturnFromFunctionCall = VndToUsd();
        console.log("The USD exchange value is", ReturnFromFunctionCall, "USD" );
        
    
    }
    else{
        prompt("Currency is not avalaible!")
       
    }
}


function convert(){
    moneyInput=prompt("Please input the money needs to convert")
    if(moneyInput=parseInt(moneyInput)){
        convertCurrency();

    }
    else{
        console.log("Please input the corrected form")
    }

}
convert();
















