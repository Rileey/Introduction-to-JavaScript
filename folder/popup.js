function popUp(){
    document.getElementById("get").style.display = "block"
    document.getElementById("bg").style.display = "block"
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