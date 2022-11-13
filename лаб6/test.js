//плавный скрол
const anchors = document.querySelectorAll('a[href*="#K"]')

for (let anchor of anchors){
    anchor.addEventListener("click", (event)=>{
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior:"smooth",
            block: "start"
        })
    })
}



//изменение bg четных элементов
const button = document.getElementById("btn");
const button_none = document.getElementById("btn_none");
const iteams = document.querySelectorAll(".iteams_katalog:nth-child(even)");
const hex=[
    "0","1","2","3","4","5","6","7","8","9","A","B","C","D", "E", "F"
]


button_none.addEventListener("click", () =>{
    let color = "transparent";
    for(let n=0; n < iteams.length; n++){
        console.log(iteams);
        iteams[n].style.backgroundColor = color;
    }
})

button.addEventListener("click", () => {
    let hexColor = generateHex();
    for(let n=0; n < iteams.length; n++){
        iteams[n].style.backgroundColor = hexColor;
    }
})

function generateHex(){
    let hexColor="#";
    for(let i = 0; i<6; i++){
        hexColor += hex[getRandomNum()];
    }
    return hexColor;
}

function getRandomNum(){
    return Math.floor(Math.random()*hex.length);
}



//сортировка

let list = document.querySelector('#Katalog')
let iteam = document.querySelectorAll(".iteams_katalog");
let select = document.getElementById("#sort");

select.addEventListener('change', () =>{
    let color = "transparent";
    for(let n=0; n < iteams.length; n++){
        console.log(iteams);
        iteams[n].style.backgroundColor = color;
    }
    
    if(select.value == "min"){
    let sorted = [...iteam].sort((a,b) =>{
        return a.children[2].innerHTML - b.children[2].innerHTML;
    });
    list.innerHTML='';
    for(let iteam of sorted){
        list.appendChild(iteam);
    }
    console.log(sorted);
} 
    if(select.value == "max"){
    let sorted = [...iteam].sort((a,b) =>{
        return - a.children[2].innerHTML - b.children[2].innerHTML;
    });
    list.innerHTML='';
    for(let iteam of sorted){
        list.appendChild(iteam);
    }
    console.log(sorted);
} 
    if(select.value == "default"){
        let sorted = [...iteam];
        list.innerHTML='';
        for(let iteam of sorted){
            list.appendChild(iteam);
        }
        console.log(sorted);
}
})


