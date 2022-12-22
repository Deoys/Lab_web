new Vue({
    el: "#app",
    data:{
        courses: []
    },
    mounted(){
        axios
        .get('https://isidea.ru/rgups_data.json')
        .then(respose => this.courses = respose.data)
    }
})
Vue.config.devtools = true;

//бургер меню
let btn_burger = document.querySelector(".menu");
let nav = document.querySelector(".header");
let category = document.querySelector(".main-post");

btn_burger.addEventListener("click", function(){
    nav.classList.toggle("open");
    category.classList.toggle("open");
});
