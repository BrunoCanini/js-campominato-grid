let contenitore = document.getElementById("container");

const btnPlay = document.getElementById("btnHtml");

let pieno = true

btnPlay.addEventListener("click" , function(){


    if( pieno === true){
        for (let i = 1; i <= 100; i++) {
            const element = i;
    
            let box = document.createElement("div");
            box.classList.add("square");
            box.innerText = element;
    
            contenitore.append(box)

            box.addEventListener("click" , function(){
                this.classList.toggle("enix")
                console.log(element)
            })
            
        }

        pieno = false
    }

})

