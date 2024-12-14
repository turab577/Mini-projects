let counter=0;
const inc=document.getElementById('inc');
const val=document.querySelector('.val');
const dec=document.getElementById('dec');
const reset=document.getElementById('reset');


inc.addEventListener('click',()=>{
    counter++;
    val.innerHTML=counter;
})
dec.addEventListener('click',()=>{
    if (counter >0) {
        counter--;
        val.innerHTML=counter
    }
})
reset.addEventListener('click',()=>{
    counter=0;
    val.innerHTML=counter;
})