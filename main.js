//Functions delen.

let counter = 0

 let add = function(){
     counter++;
     document.getElementById('Value').textContent = counter;
}

let minus = function(){
    counter--;
    document.getElementById('Value').textContent = counter;
}