document.addEventListener('DOMContentLoaded' , function(){
const depoimentoContent = [{
    texto: '“Comecei com insegurança e sem saber treinar direito. Os instrutores tiveram toda a paciência do mundo e me motivaram desde o primeiro dia. Em três meses já vi diferença no meu corpo e na minha autoestima!”',
    image: '../image/depo01.jpg',
    nome:'Sofia Lemos',
    tempo: 'Aluna há 3 meses',
    alt: 'Sofia Lemos' 
},

 {
  texto: '“Achava academia chato, mas com os treinos e o apoio que recebo aqui, virei outra pessoa. Tenho mais disposição, perdi peso e não me sinto sozinho no processo. É uma experiência de verdade, não só máquinas.”',
  image: '../image/depo02.jpg',
  nome:'Fernando Silva',
  tempo: 'Aluno há 2 anos',
  alt: 'Fernando Silva' ,

 },

 {
 texto: '“Eu nunca tinha feito musculação antes, mas aqui o ambiente é leve e os profissionais realmente entendem o que fazem. O treino é personalizado e cada evolução é acompanhada de perto. Recomendo demais!”',
 image: '../image/depo03.jpg',
 nome:'Lucas Talles',
 tempo: 'Aluno há 6 meses',
 alt: 'Lucas Talles' ,
}];


let indiceAtual = 0;


function mostrarDepoimento(){
    const depoimento = depoimentoContent[indiceAtual];

    const contentDepoiment = document.getElementById('content-depoiment');

contentDepoiment.innerHTML = `
         <div class="text-orange-400 text-[1.4rem]">
             <i class="bi bi-star-fill"></i>
             <i class="bi bi-star-fill"></i>
             <i class="bi bi-star-fill"></i>
             <i class="bi bi-star-fill"></i>
             <i class="bi bi-star-fill"></i>
           </div>

           <div class="text-white w-full">
             <p>${depoimento.texto}</p> 
           </div>

           <div class="flex items-center p-3 gap-3">
             <img src="${depoimento.image}" alt="" class="w-[60px] h-[60px] object-cover rounded-full">
             <div class="">
               <p class="font-bold text-[#ccc]">${depoimento.nome}</p>
               <p class="text-[0.9rem] text-[#aaa]">
               ${depoimento.tempo}</p>
             </div>
           </div>
    `

}


const arrowEsquerda = document.getElementById('arrowLeft');
const arrowDireita = document.getElementById('arrowRight');

const bolinhaOne = document.getElementById('bolinha1');
const bolinhaTwo = document.getElementById('bolinha2');
const bolinhaThree = document.getElementById('bolinha3');

bolinhaOne.addEventListener('click', function() {
  indiceAtual = 0;
  bolinhaOne.classList.add('bg-orange-400');
  bolinhaTwo.classList.remove('bg-orange-400');
  bolinhaThree.classList.remove('bg-orange-400');
});

bolinhaTwo.addEventListener('click', function() {
  indiceAtual = 1;
     bolinhaOne.classList.remove('bg-orange-400');
  bolinhaTwo.classList.add('bg-orange-400');
  bolinhaThree.classList.remove('bg-orange-400');

  mostrarDepoimento();
});

bolinhaThree.addEventListener('click', function() {
  indiceAtual = 2;
    bolinhaOne.classList.remove('bg-orange-400');
    bolinhaTwo.classList.remove('bg-orange-400');
    bolinhaThree.classList.add('bg-orange-400');
  mostrarDepoimento();
});

  


arrowDireita.addEventListener('click' , function(){
    indiceAtual++;

    if(indiceAtual >= depoimentoContent.length){
       indiceAtual = 0
    }

    mostrarDepoimento()
  
})



 arrowEsquerda.addEventListener('click' , function(){
       indiceAtual--;

       if(indiceAtual < 0){
        indiceAtual = depoimentoContent.length -1;
       }

       mostrarDepoimento()
      
    });

    mostrarDepoimento() 

      
  

});


// MENU MOBILE
let menuToggle = document.getElementById('menuToggle');
let menuX = document.getElementById('menuX')
let menuList = document.getElementById('menuMobile')
let menuListLinks = document.querySelectorAll('#menuMobile li a')

menuListLinks.forEach( links =>{
   links.addEventListener('click' , function(){
      menuList.classList.add('hidden');
      menuX.classList.add('hidden')
      menuToggle.classList.remove('hidden')
   })
});


menuToggle.addEventListener('click' , function(){
      menuToggle.classList.add("hidden")
      menuX.classList.remove('hidden')
      menuList.classList.remove('hidden')

});

menuX.addEventListener('click' , function(){
      menuToggle.classList.remove('hidden')
      menuX.classList.add('hidden')
      menuList.classList.add('hidden')
});