function main(){
    const body = document.querySelector("body");
    const countElement = document.querySelector("#count");
    const header = document.querySelector("h1");
    let count = 0;

    let isBlue = false;
    const intervalId = setInterval(()=>{
        if(isBlue){
            body.style.background = "#ffffff";
        }else{
            body.style.background = "#000000";
            countElement.textContent = ++count;
            header.style.fontSize = count.toString() + "rem";
        }
        isBlue = !isBlue;
    }, 1000);
    setTimeout(()=>{
        clearInterval(intervalId);
        countElement.textContent = header.textContent;
    }, 10000)
}

main();