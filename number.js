var Password = window.prompt("Enter the password you want to hack(numbers only): ")
let counts=setInterval(updated);
let upto=0;
function updated(){
        var count= document.getElementById("counter");
        count.innerHTML=++upto
        if(upto==Password)
                {
                 document.getElementById("counter").innerHTML = upto;
                 alert("I cracked you Password! "+ upto)
                 window.stop()
                }
}
