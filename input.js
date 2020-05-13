const USD={
VND: 23388.85,
EUR: 0.85,
KRW: 1223.56,
USD: 1,
CNY: 7.10
}
function formatCurrency(type1, type2, value) {
    const formatter = new Intl.NumberFormat(type1, {
      currency: type2,
      style: "currency"
    });
    return formatter.format(value);
  }
let result=0;
const convertBtn=document.getElementById('convertCurrencyBtn');

const amount=document.getElementById('amountInput');



function convert(){
    amountInput=parseInt(amount.value);
    console.log("what is aomount",amount)
    const fromValue = document.getElementById("currency1").value;
    const toValue = document.getElementById("currency2").value;
    const result = ((USD[toValue] / USD[fromValue]) *amountInput).toFixed(2);
    console.log("How is" + result);
    const notification = showResult(toValue, result)
    
    document.getElementById("demo").innerHTML = `${parseInt(amountInput)} ${fromValue}=${notification} ${toValue}`;
}

function exchange(){
    amountInput=parseInt(amount.value);
    const fromValue = document.getElementById("currency2").value;
    const toValue = document.getElementById("currency1").value;
    const result = ((USD[toValue] / USD[fromValue]) *amountInput).toFixed(2);
    const notification = showResult(toValue, result)
    document.getElementById("demo").innerHTML = `${parseInt(amountInput)} ${fromValue}=${notification} ${toValue}`;
}





  

  const showResult = (toValue, result) => {
    let convertedValue = "";
    console.log(toValue);
    console.log("This is " + result);
    toValue === "USD" ? convertedValue = formatCurrency('en-US', "USD", result): ""
    toValue === "VND" ? convertedValue = formatCurrency('vi', "VND", result): ""
    toValue === "EUR" ? convertedValue = formatCurrency('de-DE', "EUR", result): ""
    toValue == "KRW" ? convertedValue = formatCurrency('ko-KR', "KRW", result): ""
    toValue === "CNY" ? convertedValue = formatCurrency('zh-CN', "CNY", result):""

    console.log("what is convertedValue",convertedValue);
    return convertedValue;
  }


document.getElementById("convertCurrencyBtn").onclick= function() { convert(); }
document.getElementById("exchangeCurrencyBtn").onclick=function() {exchange();}