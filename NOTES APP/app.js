// 
const notecontainer= document.querySelector('.notescontaineri')
const createbtn=document.querySelector('.btn');
let notes=document.querySelectorAll('.input-box')

createbtn.addEventListener('click',()=>{
    let inputbox=document.createElement('p');
    let img=document.createElement('img');
    inputbox.className='input-box';
    inputbox.setAttribute('contenteditable','true')
    img.src='delete.png'
    notecontainer.appendChild(inputbox).appendChild(img)
})
notecontainer.addEventListener('click',(e)=>{
    if(e.target.tagName==='IMG'){
        e.target.parentElement.remove();
    }
})