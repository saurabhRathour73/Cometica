let bTn=document.querySelector(".btn");
let menuBox=document.querySelector(".sidbar");
let bTn2=document.querySelector(".btn2");


bTn.addEventListener("click",function(){
    menuBox.style.transform="translateX(0)"
})
bTn2.addEventListener("click",function(){
    menuBox.style.transform="translateX(-100%)";
})

// let imgBox=document.querySelector(".imgbox");
// let body=document.querySelector ("main");
// body.addEventListener("scroll",function(){
//     // imgBox.style.opacity="1";
//     imgBox.style.transform="scale(1)";
// })