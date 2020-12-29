'use strict';

{

document.querySelector('button').addEventListener('click',()=>{
 const li =document.createElement('li');
 const color =document.querySelector('select');
 li.textContent ='${color.value} - ${color.selectedIndex}';
 document.querySelector('ul').appendChild(li);
//document.getElementById('button').textContent='Cganged!';

});

}

document.getElementById('target').addEventListener('click',()=>{
//document.getElementById('target').style.background ='pink';
//document.getElementById('target').style.borderRadius='50%';

});

for (let i =0; i< 10; i++){


const div =document.createElement('div');
div.classList.add('box');

div.addEventListener('click',()=>{
div.classList.toggle('circle');
});
document.body.appendChild(div);}

const score=60;
const name='hayato';

{
document.querySelector('button').addEventListener('click',() =>{
const li = document.createElement('li');
const text = document.querySelector('input');
li.textContent = text.value;
document.querySelector('ul').appendChild(li);
});
}

for(let i =1;i <=10; i++){
    console.log
}