
function vndToCurrency() {
    let currencyAmount = moneyInput;
    return amountConvert = (currencyAmount / exchangeRate).toFixed(2);

}
function currencyToVnd() {
    let currencyAmmount = moneyInput;
    console.log("The VND exchange value is: ", formatCurrency("vi", "VND", ReturnFromFunctionCall));
    return amountConvert = (currencyAmmount * exchangeRate).toFixed(2);

}
function formatCurrency(type1, type2, value) {
    const formatter = new Intl.NumberFormat(type1, {
        currency: type2,
        style: "currency"
    });
    return formatter.format(value);
}
function convertCurrency() {
    console.log("1. VND to USD")
    console.log("2. USD to VND")
    console.log("3. KRW to VND")
    console.log("4. VND to KRW")
    console.log("5. IDR to VND")
    console.log("6. VND to IDR")
    console.log("7. EUR to VND")
    console.log("8. VND to EUR")
    

    
     var currencyChoose=  console.log("Please choose the option")
    switch (currencyChoose) {
        case 1:
            exchangeRate = 23.208;
            ReturnFromFunctionCall = vndToCurrency();
            console.log("The USD exchange value is", formatCurrency("en-US", "USD", ReturnFromFunctionCall));
            break;
        case 2:
            exchangeRate = 23.208;
            ReturnFromFunctionCall = currencyToVnd();
            break;

        case 3:
            exchangeRate = 19.05;
            ReturnFromFunctionCall = vndToCurrency();
            console.log("The KRW exchange value is", formatCurrency("ko-KR", "KRW", ReturnFromFunctionCall));
            break;
        case 4:
            exchangeRate = 19.05;
            ReturnFromFunctionCall = currencyToVnd();
            break;
        case 5:
            exchangeRate = 1.56;
            ReturnFromFunctionCall = vndToCurrency();
            console.log("The IDR exchange value is", formatCurrency("id", "IDR", ReturnFromFunctionCall));
            break;
        case 6:
            exchangeRate = 1.56;
            ReturnFromFunctionCall = currencyToVnd();
            break;
        case 7:
            exchangeRate = 25.234;
            ReturnFromFunctionCall = vndToCurrency();
            console.log("The EUR exchange value is", formatCurrency("de-DE", "EUR", ReturnFromFunctionCall));
            break;
        case 8:
            exchangeRate = 25.234;
            ReturnFromFunctionCall = currencyToVnd();
            break;

    }
}




    function convert() {
        moneyInput = prompt("Please input the money needs to convert")
        if (moneyInput = parseInt(moneyInput)) {
            convertCurrency();

        }
        else {
            console.log("Please input the corrected form")
        }
    }
convert();
