let iconHeart = document.querySelector(".top-nav .fa-heart");
var state=false;
const listImgProds= document.querySelectorAll(".share .list-img-share img");
iconHeart.addEventListener("click", function () {    
    if(!state){
        iconHeart.classList.replace("fa-regular", "fa-solid");
        iconHeart.style.color="red";
        state=true;        
    }else{
        iconHeart.classList.replace("fa-solid", "fa-regular" );
        iconHeart.style.color="rgba(38, 47, 86, 1)";
        state=false;
    }    
})

