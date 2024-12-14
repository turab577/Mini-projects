let a=["blue","black","green","red","violet","pink"];
const btn=document.getElementById('color');
btn.addEventListener('click',()=>{
    const c= Math.floor(Math.random()*a.length);
    document.body.style.backgroundColor=a[c]
})