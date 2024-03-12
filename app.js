const btn1=document.querySelector(".decrease-btn");
const btn2=document.querySelector(".increase-btn");
const btn3=document.querySelector(".reset-btn");
const display=document.querySelector(".display");

let count=0;
btn1.addEventListener('click',()=>{
    count -=1;
    display.textContent=count;
    colorDisplayText();
})

btn2.addEventListener('click',()=>{
    count =0;
    display.textContent=count;
    colorDisplayText();
})
btn3.addEventListener('click',()=>{
    count +=1;
    display.textContent=count;
    colorDisplayText();
})

function colorDisplayText(){
    if(count <0){
        display.style.color='red';
    } else if(count>0){
        display.style.color='green';
    } else{
        display.style.color='black';
    }
}