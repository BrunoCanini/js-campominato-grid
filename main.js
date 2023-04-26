let contenitore = document.getElementById("container");

const btnPlay = document.getElementById("btnHtml");

btnPlay.addEventListener("click" , function(){

    let pieno = true

    if( pieno = true){
        for (let i = 1; i <= 100; i++) {
            const element = i;
    
            let box = document.createElement("div");
            box.classList.add("square");
            box.innerText = element;
    
            contenitore.append(box)
            
        }
        
        pieno = false
    }

})