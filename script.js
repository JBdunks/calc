
let operator;

const main = () =>{
    first = document.getElementById('first').value;
    second = document.getElementById('second').value;

    if((/\D/g).test(first) || (/\D/g).test(second)){
        alert('Please enter valid numbers.');
        location.reload();
    };

    getOperator();

    if(operator == 'add'){add(first,second)};
    if(operator == 'subtract'){subtract(first,second)};
    if(operator == 'multiply'){multiply(first,second)};
    if(operator == 'divide'){divide(first,second)};

}


const getOperator = () => {
    var radioButtons = document.getElementsByName('operand')
    radioButtons.forEach(x => {
    if(x.checked){
        operator = x.value
    }
});
}


const add = (first, second) => {
    document.getElementById('results').innerHTML = parseInt(first) + parseInt(second);
}

const subtract = (first, second) => {
    document.getElementById('results').innerHTML = first - second;
}

const multiply = (first, second) => {
    document.getElementById('results').innerHTML = first * second;
}

const divide = (first, second) => {
if(second == 0){alert('Cannot Divide by 0.'), location.reload()};
document.getElementById('results').innerHTML = first / second;
}

const reload = () => location.reload()
