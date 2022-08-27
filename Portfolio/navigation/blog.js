/*this if for arrow up and arrow down event*/
document.addEventListener('scroll',() =>{
    const fromTop = window.scrollY || pageXOffset;
    const fromBottom = document.getElementById('post').getBoundingClientRect().height-fromTop;
    const upArrow = document.getElementById('upArrow');
    const downArrow = document.getElementById('downArrow');

    if(fromTop > 200){
        upArrow.style.display = 'flex';
    

    }else{
        upArrow.style.display = 'none';

    }
    if(fromBottom > fromTop){
        downArrow.style.display = 'flex';
      
    }else{
        downArrow.style.display = 'none';
        
    }
})