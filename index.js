const btnE1 = document.querySelector(".btn");
const closeIconE1 = document.querySelector(".close-icon");
const trailerContainerE1 = document.querySelector(".trailerContainer");


btnE1.addEventListener("click",()=>{
    trailerContainerE1.classList.remove("active")
});

closeIconE1.addEventListener("click",()=>{
    trailerContainerE1.classList.add("active");
})