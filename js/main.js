let input = document.getElementById("input");
let button = document.getElementById("btn");
let result = document.getElementById("result");


button.addEventListener("click", ()=> {
    let replacedComma = replaceComma(input.value);
    if(isNaN(replacedComma)) {
        result.innerText = 'Digite apenas números válidos';
        result.classList.add('error');
        return false;
    }
    result.classList.remove('error');
    
    let valueInput = parseFloat(replacedComma);
    result.innerText =`Total cents: ${convertDollarToCent(valueInput)}`
})

const convertDollarToCent = (value) => {
    let dollarInCent = value*100;
    return Math.round(dollarInCent);
}
const replaceComma = (value) =>{
    return value.replaceAll(",",".");
}