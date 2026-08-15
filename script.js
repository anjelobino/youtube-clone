const hamburger=document.getElementById("hamburger");
const sidebar=document.getElementById("sidebar");
const main=document.getElementById("main");
const leftbtn=document.getElementById("leftbtn");
const rightbtn=document.getElementById("rightbtn");
const cato = document.getElementById("cato");
const videos=[
    {
        thumbnail:"thumb1.png",
        title:"learn javascript",
        channel:"bro code",
        views:"120k views",
        time:"2 days ago"
    },

    {
        thumbnail:"thumb2.png",
        title:"bulding a youtube clone",
        channel:"addox web",
        views:"85k views",
        time:"1 week ago"
    },

    {
        thumbnail:"thumb3.png",
        title:"learn react.js",
        channel:"code",
        views:"120k views",
        time:"3 days ago"
    }
];
const videoGrid=document.getElementById("videoGrid");

hamburger.addEventListener("click",function(){
    sidebar.classList.toggle("open");
    main.classList.toggle("sidebar-open")
    videoGrid.classList.toggle("video-open")
});

leftbtn.addEventListener("click",function(){
    cato.scrollBy({left:-300,behavior:"smooth"});
});

rightbtn.addEventListener("click",function(){
    cato.scrollBy({left:300,behavior:"smooth"});
});

videos.forEach(function(video) {

    const card=document.createElement("div");
    card.classList.add("video-card");
    card.innerHTML=`
        <img src="${video.thumbnail}" alt="video thumbnail">
        <h3>${video.title}</h3>
        <p>${video.channel}</p>
        <p>${video.views}•${video.time}</p>
    `;
    videoGrid.appendChild(card);
});