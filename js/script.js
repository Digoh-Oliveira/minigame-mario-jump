const mario = document.querySelector(".mario");//adicinando a class mario na constante mario
const pipe = document.querySelector(".pipe");// adicionando a classe pipe na costante pipe
const clouds = document.querySelector('.clouds');//adicionando a classe clouds na constante clouds
const floor = document.querySelector('.menu');//adicionando a classe menu na constante floor

var score = document.querySelector('#numberScore');
var count = 0;

function Reload(){/*Função do botão para dar refesh na pagina*/
     location.reload();}

const jump = () => {
    
    mario.classList.add('jump');//adiconando a class jump na classe mario

    setTimeout(() => {mario.classList.remove('jump');},500);//removendo a classe jump da classe mario
}
/*Loop da animação do Pipe, Mario, Clouds e do Floor que será Interrompida caso atinja os requisitos do IF */
const loop = setInterval(() => {
    
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const cloudsPosition = clouds.offsetLeft;
    const floorPosition = floor.offsetLeft;

         if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){
            
            pipe.style.animation = "none";
            pipe.style.left = `${pipePosition}px`;
            
            mario.style.animation = 'none';
            mario.style.bottom =`${marioPosition}px`
            mario.src = 'images/game-over.png';
            mario.style.width = '75px';
            mario.style.marginLeft = "50px";
            
            clouds.style.animation = 'none';
            clouds.style.left = `${cloudsPosition}px` ;

            floor.style.animation = 'none';
           
           clearInterval(loop);
         
        }
        else{//caso não atinja os requisitos do If, o incremento da variavel count será adicionado a variavel score 
            count++;
             
            score.innerHTML= count;}

}, 10);

//evento que ativa o 'pulo' do Mario
document.addEventListener("keydown", jump)