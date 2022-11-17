let answer = document.getElementById('answer');

let previous; 
function input(value){
    answer.value += value;
}

function remove(){
    previous = answer.value.split('');
    previous[previous.length-1] = "";
    answer.value = previous.join("");
}

function calc(){
    answer.value = (eval(answer.value));
}