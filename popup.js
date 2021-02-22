 
/** 
function popup(){
    document.getElementById("form").style.display = "block"
}
function post(){
    i = 1
{
        var msg = []
        message = document.getElementById("box").value
        msg.push(message)
        console.log(msg)
        var count = msg.length
        document.getElementById("num").innerHTML += count
        console.log(count)
   }
}
*/
let html = document.querySelector("html")
let count = document.getElementById("word")
let x = document.getElementsByClassName("section")

let num = []
function popup(){
    var txt;
    var message = prompt("Got anything to say?", "Don't be shy");
    if (message == null || message == "") {
        txt = "User cancelled the prompt.";
    } else {
        txt = message;
    }


    document.getElementById("firstnote").innerHTML = txt;

    
    count.textContent = "You have " + x.length + " notes"; 
    
}



/** 
function popup(){
    var text;
    var person = prompt("Got anything to say to us?:", "Riley Prince");
    if (person == null || person == "") {
        text = "User cancelled the prompt.";
    } else {
        text = "Written " + person + " Notes";
    }
    document.getElementById("count").innerHTML = text;
}
*/
