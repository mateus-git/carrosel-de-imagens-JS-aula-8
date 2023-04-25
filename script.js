//buscando a lista de um array usando o fot
let msg = document.getElementById('msg')

const usuarios = [
    {nome: "Huginho", idade: 18},
    {nome: "Zezinho", idade: 19},
    {nome: "Luizinho", idade: 20}
];

const Users = usuarios.length

for (let i=0; i<Users; i++){
    msg.innerHTML +=`<p>${usuarios[i].nome} ${usuarios[i].idade}</p>`       
}

var imagens = [
    'img/1.png',
    'img/2.png',
    'img/3.png',
];


var index = 0
var time = 2000

function slideShow(){
     document.getElementById('image').src = imagens[index]
     index++
     if(index == imagens.length){index = 0}
     setTimeout("slideShow()", time)
 }



slideShow()