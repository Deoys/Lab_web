let button_on = document.getElementById('on');
let button_off = document.getElementById('off');

let list = document.querySelectorAll('.iteams_katalog');

console.log(list)


button_on.addEventListener('click', function(){

    for(let i = 0; i<list.length; i++){
        if(i % 2!= 0){

            list[i].style.backgroundColor = "red";

            console.log(list[i]);

        }
    }
    
})