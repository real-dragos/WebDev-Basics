function main(){
    const mainButton = document.querySelector("button");

    mainButton.addEventListener("click",()=>{
        document.body.classList.toggle("purple");
    })
}

main();