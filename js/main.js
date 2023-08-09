let next=document.querySelector('#next'),
prev=document.querySelector('#prev'),
progress=document.querySelector('.progress2'),
circle=1;

progress.style.width='0%';
steps=Number(progress.style.width.replace('%',''));


next.addEventListener('click',()=>{
    if(circle<3){
    circle+=1
    steps+=33;
    console.log(circle,steps,'next')
    prev.classList.remove('disabled');
    progress.style.width=steps+'%';
    setTimeout(()=>{document.querySelector(`#c${circle}`).classList.add('b-shadow')
},700)
    } else if(circle===3){
        circle+=1
        steps+=33;
        progress.style.width=steps+'%';
        setTimeout(()=>{document.querySelector(`#c${circle}`).classList.add('b-shadow')
    },700)
    setTimeout(()=>{next.classList.add('disabled')},700)
    }
})


prev.addEventListener('click',()=>{
    if(circle===2){
    circle-=1
    steps-=33;
    setTimeout(()=>{ prev.classList.add('disabled')},700);
    progress.style.width=steps+'%';
    document.querySelector(`#c${circle+1}`).classList.remove('b-shadow');
}  else if (circle<=4){
        circle-=1
        steps-=33;
        progress.style.width=steps+'%';
        document.querySelector(`#c${circle+1}`).classList.remove('b-shadow')
        next.classList.remove('disabled');
 }
})