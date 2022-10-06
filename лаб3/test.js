let button_on = document.getElementById('on');
let button_off = document.getElementById('off');
let list = document.querySelectorAll('.iteams_katalog');
let color = window.getComputedStyle( document.body ,null).getPropertyValue('background-color');

console.log(color)


button_on.addEventListener('click', function(){

    for(let i = 0; i<list.length; i++){
        if(i % 2!= 0){
            list[i].style.backgroundColor = "red";
            console.log(list[i]);
        }
    }    
})

button_off.addEventListener('click', function(){

    for(let i = 0; i<list.length; i++){
        if(i % 2!= 0){
            list[i].style.backgroundColor = "color";
            console.log(list[i]);
        }
    }    
})