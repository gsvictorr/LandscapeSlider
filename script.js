let count = 1;

 // Verificando se o botão está marcado, caso sim troca a imagem
 // em determinado tempo
document.getElementById("radio1").checked = true;

setInterval( function(){
nextImage();
}, 4000)



// função pra trocar pra próxima imagem
function nextImage(){
    count ++;
    if(count>4){
        count=1;
    }

    document.getElementById("radio"+count).checked = true;
}