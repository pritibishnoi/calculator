
let buttons = document.querySelectorAll("button");
let display = document.getElementById('display');
let array_btn = Array.from(buttons);
let string ='';

array_btn.forEach( (btn)=>{
    btn.addEventListener('click', (e)=>{
    if(e.target.innerText == '=') {
        string = eval(string);
        display.value= string;
        }
    else if(e.target.innerText=='DEL'){
        string = string.substring(0,string.length-1)
        // string = string.slice(0,-1)
        display.value = string
    }
    else if(e.target.innerText== 'Reset'){
        string =''
        display.value= string
    }
  
    else{
        string += e.target.innerText;
        display.value= string;
    }
    })
})