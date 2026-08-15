const hamburger=document.getElementById("hamburger");
const sidebar=document.getElementById("sidebar");
const main=document.getElementById("main");

hamburger.addEventListener("click",function(){
    sidebar.classList.toggle("open");
    main.classList.toggle("sidebar-open")
});